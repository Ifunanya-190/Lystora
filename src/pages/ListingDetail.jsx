import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  HiOutlineArrowLeft,
  HiStar,
  HiOutlineStar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineGlobe,
  HiOutlineClock,
  HiOutlineShare,
  HiOutlineHeart,
  HiHeart,
  HiOutlineSearchCircle,
  HiOutlineClipboardCopy,
  HiOutlineExternalLink,
  HiOutlineTrash,
  HiOutlinePencil,
} from 'react-icons/hi'
import InquiryModal from '../components/InquiryModal'
import { useListings } from '../context/ListingsContext'

export default function ListingDetail() {
  const { id } = useParams()
  const { allListings, getReviews, addReview, deleteReview, updateReview } = useListings()
  const listing = allListings.find((l) => l.id === id)
  const [inquiryOpen, setInquiryOpen] = useState(false)
  const [saved, setSaved] = useState(() => {
    try {
      const savedList = JSON.parse(sessionStorage.getItem('lystora_saved') || '[]')
      return savedList.includes(id)
    } catch { return false }
  })
  const [shared, setShared] = useState(false)
  const [shareMenuOpen, setShareMenuOpen] = useState(false)
  const [editingReviewIdx, setEditingReviewIdx] = useState(null)
  const [editReviewForm, setEditReviewForm] = useState({ name: '', rating: 0, text: '' })

  const toggleSaved = () => {
    setSaved((prev) => {
      const next = !prev
      try {
        const savedList = JSON.parse(sessionStorage.getItem('lystora_saved') || '[]')
        const updated = next ? [...savedList, id] : savedList.filter((s) => s !== id)
        sessionStorage.setItem('lystora_saved', JSON.stringify(updated))
      } catch { /* ignore */ }
      return next
    })
  }

  // Reviews from context
  const reviews = getReviews(id)

  // Computed rating from reviews
  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0'

  // Review form state
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 0, text: '' })
  const [hoverRating, setHoverRating] = useState(0)

  const submitReview = (e) => {
    e.preventDefault()
    if (!reviewForm.name || !reviewForm.rating || !reviewForm.text) return
    const now = new Date()
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
    addReview(id, {
      name: reviewForm.name,
      date: `${monthNames[now.getMonth()]} ${now.getFullYear()}`,
      rating: reviewForm.rating,
      text: reviewForm.text,
    })
    setReviewForm({ name: '', rating: 0, text: '' })
    setShowReviewForm(false)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    } catch { /* ignore */ }
    setShareMenuOpen(false)
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: listing?.name || 'Check this out',
          text: `Check out ${listing?.name} on Lystora`,
          url: window.location.href,
        })
      } catch { /* user cancelled */ }
    } else {
      handleCopyLink()
    }
    setShareMenuOpen(false)
  }

  if (!listing) {
    return (
      <div className="pt-32 pb-20 text-center">
        <HiOutlineSearchCircle className="text-5xl text-ink-300 mx-auto mb-4" />
        <h1 className="text-editorial text-3xl text-ink-900 mb-2">Listing not found</h1>
        <p className="text-ink-500 text-sm mb-6">
          This business may have been removed or the link is incorrect.
        </p>
        <Link to="/explore" className="btn-primary">
          Back to Explore
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-wide">
        {/* Back */}
        <Link
          to="/explore"
          className="inline-flex items-center gap-1.5 text-xs font-accent font-medium text-ink-500 hover:text-terra-500 transition-colors mb-6"
        >
          <HiOutlineArrowLeft /> Back to Explore
        </Link>

        {/* Hero image */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={listing.image}
            alt={listing.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="badge-terra text-[10px]">{listing.categoryLabel || listing.category}</span>
              {listing.verified && (
                <span className="badge-forest text-[10px] flex items-center gap-1">
                  <HiOutlineBadgeCheck className="text-xs" /> Verified
                </span>
              )}
              {listing.featured && (
                <span className="badge bg-white/20 text-white backdrop-blur-sm text-[10px]">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-editorial text-2xl md:text-4xl text-white">
              {listing.name}
            </h1>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="card-elevated p-6 md:p-8">
              <h2 className="font-accent font-semibold text-lg text-ink-800 mb-4">
                About
              </h2>
              <p className="text-sm text-ink-600 leading-relaxed mb-4">
                {listing.description || `${listing.name} is a trusted provider in the ${(listing.categoryLabel || listing.category).toLowerCase()} sector, serving clients in ${listing.location} and beyond. With a strong track record and a commitment to quality, they've earned the trust of hundreds of clients.`}
              </p>
              {!listing.description && (
              <p className="text-sm text-ink-600 leading-relaxed">
                Whether you need professional consultation, ongoing services, or one-time support,
                {listing.name} delivers with excellence. Their team combines deep expertise
                with a client-first approach that sets them apart.
              </p>
              )}
            </div>

            {/* Services */}
            {(() => {
              const customServices = listing.services
                ? listing.services.split(',').map(s => s.trim()).filter(Boolean)
                : null
              const defaultServices = [
                'General Consultation',
                'Specialized Services',
                'Online / Remote Support',
                'Enterprise Solutions',
                'Training & Workshops',
                'Emergency Assistance',
              ]
              const servicesToShow = customServices || (listing.userSubmitted ? null : defaultServices)
              if (!servicesToShow) return null
              return (
            <div className="card-elevated p-6 md:p-8">
              <h2 className="font-accent font-semibold text-lg text-ink-800 mb-4">
                Services Offered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesToShow.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-ink-50 text-sm text-ink-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-terra-400" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
              )
            })()}

            {/* Reviews */}
            <div className="card-elevated p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-accent font-semibold text-lg text-ink-800">
                  Reviews ({reviews.length})
                </h2>
                <button
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="text-xs font-accent font-medium text-terra-500 hover:text-terra-600 transition-colors"
                >
                  {showReviewForm ? 'Cancel' : 'Write a Review'}
                </button>
              </div>

              {/* Review form */}
              {showReviewForm && (
                <form onSubmit={submitReview} className="mb-6 p-4 bg-sand-50 rounded-xl border border-sand-200 space-y-3 animate-fade-in">
                  <div>
                    <label className="text-xs font-accent font-medium text-ink-600 mb-1 block">Your Name</label>
                    <input
                      type="text"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm(prev => ({...prev, name: e.target.value}))}
                      placeholder="Your name"
                      required
                      className="w-full px-3 py-2 rounded-lg border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-accent font-medium text-ink-600 mb-1 block">Rating</label>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewForm(prev => ({...prev, rating: star}))}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          {star <= (hoverRating || reviewForm.rating) ? (
                            <HiStar className="text-xl text-terra-400" />
                          ) : (
                            <HiOutlineStar className="text-xl text-ink-300" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-accent font-medium text-ink-600 mb-1 block">Your Review</label>
                    <textarea
                      value={reviewForm.text}
                      onChange={(e) => setReviewForm(prev => ({...prev, text: e.target.value}))}
                      rows={3}
                      placeholder="Share your experience..."
                      required
                      className="w-full px-3 py-2 rounded-lg border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!reviewForm.name || !reviewForm.rating || !reviewForm.text}
                    className="btn-primary text-xs py-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Submit Review
                  </button>
                </form>
              )}

              {reviews.map((review, idx) => (
                <div
                  key={review.name + idx}
                  className="py-4 border-b border-ink-100 last:border-0 last:pb-0 first:pt-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-terra-100 flex items-center justify-center text-xs font-accent font-semibold text-terra-700">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-accent font-semibold text-ink-800">
                          {review.name}
                        </p>
                        <p className="text-[10px] text-ink-400">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <HiStar key={i} className="text-terra-400 text-xs" />
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setEditingReviewIdx(idx)
                          setEditReviewForm({ name: review.name, rating: review.rating, text: review.text })
                        }}
                        className="p-1 rounded text-ink-300 hover:text-terra-500 transition-colors"
                        title="Edit review"
                      >
                        <HiOutlinePencil className="text-sm" />
                      </button>
                      <button
                        onClick={() => deleteReview(id, idx)}
                        className="p-1 rounded text-ink-300 hover:text-red-500 transition-colors"
                        title="Delete review"
                      >
                        <HiOutlineTrash className="text-sm" />
                      </button>
                    </div>
                  </div>
                  {/* Edit form inline */}
                  {editingReviewIdx === idx ? (
                    <div className="mt-2 p-3 bg-sand-50 rounded-lg border border-sand-200 space-y-2 animate-fade-in">
                      <input
                        type="text"
                        value={editReviewForm.name}
                        onChange={(e) => setEditReviewForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg border border-ink-200 text-sm text-ink-800 focus:outline-none focus:border-terra-400 transition-all"
                      />
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setEditReviewForm(prev => ({ ...prev, rating: star }))}
                          >
                            {star <= editReviewForm.rating ? (
                              <HiStar className="text-lg text-terra-400" />
                            ) : (
                              <HiOutlineStar className="text-lg text-ink-300" />
                            )}
                          </button>
                        ))}
                      </div>
                      <textarea
                        value={editReviewForm.text}
                        onChange={(e) => setEditReviewForm(prev => ({ ...prev, text: e.target.value }))}
                        rows={2}
                        className="w-full px-3 py-2 rounded-lg border border-ink-200 text-sm text-ink-800 focus:outline-none focus:border-terra-400 transition-all resize-none"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            updateReview(id, idx, editReviewForm)
                            setEditingReviewIdx(null)
                          }}
                          className="btn-primary text-xs py-1.5 px-3"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingReviewIdx(null)}
                          className="text-xs font-accent text-ink-500 hover:text-ink-700 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {review.text}
                  </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rating card */}
            <div className="card-elevated p-6 text-center">
              <div className="text-4xl font-heading text-ink-900 mb-1">
                {avgRating}
              </div>
              <div className="flex items-center justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className={`text-lg ${
                      i < Math.round(parseFloat(avgRating))
                        ? 'text-terra-400'
                        : 'text-ink-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-ink-500">
                Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Contact card */}
            <div className="card-elevated p-6">
              <h3 className="font-accent font-semibold text-sm text-ink-800 mb-4">
                Contact Info
              </h3>
              <div className="space-y-3">
                {(listing.address || listing.location) && (
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <HiOutlineLocationMarker className="text-terra-500 flex-shrink-0" />
                  {listing.address || listing.location}
                </div>
                )}
                {listing.phone && (
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <HiOutlinePhone className="text-terra-500 flex-shrink-0" />
                  {listing.phone}
                </div>
                )}
                {listing.email && (
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <HiOutlineMail className="text-terra-500 flex-shrink-0" />
                  {listing.email}
                </div>
                )}
                {listing.website && (
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <HiOutlineGlobe className="text-terra-500 flex-shrink-0" />
                  {listing.website}
                </div>
                )}
                {listing.hours && (
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <HiOutlineClock className="text-terra-500 flex-shrink-0" />
                  {listing.hours}
                </div>
                )}
                {!listing.phone && !listing.email && !listing.website && !listing.hours && (
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <HiOutlineLocationMarker className="text-terra-500 flex-shrink-0" />
                  {listing.location}
                </div>
                )}
              </div>

              <div className="flex gap-2 mt-5">
                <button
                  onClick={() => setInquiryOpen(true)}
                  className="btn-primary flex-1 text-xs py-2.5"
                >
                  Send Inquiry
                </button>
                <button
                  onClick={toggleSaved}
                  className={`p-2.5 rounded-xl border transition-all ${
                    saved
                      ? 'border-terra-300 text-terra-500 bg-terra-50'
                      : 'border-ink-200 text-ink-500 hover:text-terra-500 hover:border-terra-300'
                  }`}
                >
                  {saved ? <HiHeart className="text-base" /> : <HiOutlineHeart className="text-base" />}
                </button>
                <button
                  onClick={() => setShareMenuOpen(!shareMenuOpen)}
                  className="p-2.5 rounded-xl border border-ink-200 text-ink-500 hover:text-terra-500 hover:border-terra-300 transition-all relative"
                >
                  <HiOutlineShare className="text-base" />
                  {shared && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-ink-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                      Link copied!
                    </span>
                  )}
                  {shareMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white border border-ink-200 rounded-xl shadow-lg z-20 min-w-[160px] overflow-hidden animate-fade-in">
                      <button
                        onClick={handleCopyLink}
                        className="flex items-center gap-2.5 w-full px-4 py-3 text-xs font-accent text-ink-700 hover:bg-ink-50 transition-colors text-left"
                      >
                        <HiOutlineClipboardCopy className="text-base text-ink-400" />
                        Copy Link
                      </button>
                      <button
                        onClick={handleNativeShare}
                        className="flex items-center gap-2.5 w-full px-4 py-3 text-xs font-accent text-ink-700 hover:bg-ink-50 transition-colors text-left border-t border-ink-100"
                      >
                        <HiOutlineExternalLink className="text-base text-ink-400" />
                        Share...
                      </button>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="card-elevated overflow-hidden">
              <div className="h-48 bg-ink-100 flex items-center justify-center text-ink-400">
                <div className="text-center">
                  <HiOutlineLocationMarker className="text-3xl mx-auto mb-2" />
                  <p className="text-xs font-accent">Map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        businessName={listing.name}
      />
    </div>
  )
}
