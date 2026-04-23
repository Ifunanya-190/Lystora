import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  HiOutlinePhotograph,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineGlobe,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineX,
} from 'react-icons/hi'
import { categories } from '../data/sampleData'
import { useListings } from '../context/ListingsContext'

const initialForm = {
  businessName: '',
  category: '',
  description: '',
  services: '',
  address: '',
  city: '',
  country: '',
  phone: '',
  email: '',
  website: '',
  hours: '',
  ownerName: '',
  ownerEmail: '',
}

export default function SubmitListing() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)
  const [coverImage, setCoverImage] = useState(null)
  const [dragging, setDragging] = useState(false)
  const fileInputRef = useRef(null)
  const { addListing } = useListings()

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return
    if (file.size > 5 * 1024 * 1024) return // 5MB limit
    const reader = new FileReader()
    reader.onloadend = () => setCoverImage(reader.result)
    reader.readAsDataURL(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return
    if (file.size > 5 * 1024 * 1024) return
    const reader = new FileReader()
    reader.onloadend = () => setCoverImage(reader.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Find category label from slug
    const cat = categories.find((c) => c.slug === form.category)
    addListing({ ...form, categoryLabel: cat ? cat.title : form.category, coverImage })
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  const canProceed = () => {
    if (step === 1) return form.businessName && form.category && form.description
    if (step === 2) return form.city && form.country
    return form.ownerName && form.ownerEmail
  }

  if (submitted) {
    return (
      <div className="pt-32 pb-20">
        <div className="container-narrow text-center">
          <HiOutlineCheckCircle className="text-6xl text-forest-500 mx-auto mb-4" />
          <h1 className="text-editorial text-3xl md:text-4xl text-ink-900 mb-3">
            Listing Submitted!
          </h1>
          <p className="text-ink-500 text-sm max-w-md mx-auto mb-8">
            Thank you for submitting your business. Our team will review it within
            24–48 hours. You'll receive a confirmation email once it's live.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/explore" className="btn-primary">
              Browse Directory
            </Link>
            <Link to="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-narrow">
        {/* Header */}
        <div className="max-w-xl mb-10">
          <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
            Submit a Listing
          </span>
          <h1 className="text-editorial text-3xl md:text-4xl text-ink-900 mb-3">
            Add your business to Lystora
          </h1>
          <p className="text-ink-500 text-sm leading-relaxed">
            Fill in the details below and our team will verify and publish your listing.
            It's free to get listed — premium features are optional.
          </p>
        </div>

        {/* Progress steps */}
        <div className="flex items-center gap-2 mb-10">
          {[
            { n: 1, label: 'Business Info' },
            { n: 2, label: 'Location & Contact' },
            { n: 3, label: 'Owner Details' },
          ].map((s) => (
            <button
              key={s.n}
              onClick={() => s.n < step && setStep(s.n)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-accent font-medium transition-all ${
                step === s.n
                  ? 'bg-terra-500 text-white'
                  : step > s.n
                  ? 'bg-forest-50 text-forest-700 cursor-pointer'
                  : 'bg-ink-50 text-ink-400 cursor-default'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step > s.n ? 'bg-forest-500 text-white' : step === s.n ? 'bg-white/20 text-white' : 'bg-ink-200 text-ink-500'
              }`}>
                {step > s.n ? '✓' : s.n}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 — Business Info */}
          {step === 1 && (
            <div className="card-elevated p-6 md:p-8 space-y-5 animate-fade-in">
              <h2 className="font-accent font-semibold text-lg text-ink-800">
                Business Information
              </h2>

              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                  Business Name *
                </label>
                <input
                  type="text"
                  value={form.businessName}
                  onChange={update('businessName')}
                  placeholder="e.g. Greenleaf Medical Centre"
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                  Category *
                </label>
                <select
                  value={form.category}
                  onChange={update('category')}
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                  Description *
                </label>
                <textarea
                  value={form.description}
                  onChange={update('description')}
                  rows={4}
                  placeholder="Tell people what your business does, what services you offer, and what makes you stand out..."
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all resize-none"
                  required
                />
                <p className="text-[11px] text-ink-400 mt-1">
                  {form.description.length}/500 characters
                </p>
              </div>

              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                  Services Offered
                </label>
                <textarea
                  value={form.services}
                  onChange={update('services')}
                  rows={3}
                  placeholder="List your main services, separated by commas. E.g.: General Consultation, Legal Advisory, Tax Filing, Corporate Training"
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all resize-none"
                />
                <p className="text-[11px] text-ink-400 mt-1">
                  Separate each service with a comma
                </p>
              </div>

              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                  Cover Photo
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleImageChange}
                  className="hidden"
                />
                {coverImage ? (
                  <div className="relative rounded-xl overflow-hidden border border-ink-200">
                    <img src={coverImage} alt="Cover preview" className="w-full h-48 object-cover" />
                    <button
                      type="button"
                      onClick={() => { setCoverImage(null); if (fileInputRef.current) fileInputRef.current.value = '' }}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-ink-900/60 text-white flex items-center justify-center hover:bg-ink-900/80 transition-colors"
                    >
                      <HiOutlineX className="text-sm" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                      dragging ? 'border-terra-400 bg-terra-50' : 'border-ink-200 hover:border-terra-300'
                    }`}
                  >
                    <HiOutlinePhotograph className="text-3xl text-ink-300 mx-auto mb-2" />
                    <p className="text-xs text-ink-500">
                      Drag & drop or click to upload
                    </p>
                    <p className="text-[10px] text-ink-400 mt-1">
                      JPG, PNG up to 5MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2 — Location & Contact */}
          {step === 2 && (
            <div className="card-elevated p-6 md:p-8 space-y-5 animate-fade-in">
              <h2 className="font-accent font-semibold text-lg text-ink-800">
                Location & Contact
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                    City *
                  </label>
                  <div className="relative">
                    <HiOutlineLocationMarker className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                    <input
                      type="text"
                      value={form.city}
                      onChange={update('city')}
                      placeholder="e.g. Lagos"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                    Country *
                  </label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={update('country')}
                    placeholder="e.g. Nigeria"
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                  Full Address
                </label>
                <input
                  type="text"
                  value={form.address}
                  onChange={update('address')}
                  placeholder="Street address"
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                    Phone Number
                  </label>
                  <div className="relative">
                    <HiOutlinePhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+234 800 123 4567"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                    Business Email
                  </label>
                  <div className="relative">
                    <HiOutlineMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="info@yourbusiness.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                    Website
                  </label>
                  <div className="relative">
                    <HiOutlineGlobe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                    <input
                      type="url"
                      value={form.website}
                      onChange={update('website')}
                      placeholder="https://yourbusiness.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                    Business Hours
                  </label>
                  <div className="relative">
                    <HiOutlineClock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                    <input
                      type="text"
                      value={form.hours}
                      onChange={update('hours')}
                      placeholder="Mon-Fri, 8am-6pm"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 — Owner Details */}
          {step === 3 && (
            <div className="card-elevated p-6 md:p-8 space-y-5 animate-fade-in">
              <h2 className="font-accent font-semibold text-lg text-ink-800">
                Owner / Contact Person
              </h2>
              <p className="text-xs text-ink-500">
                This information is private and will only be used to verify your listing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.ownerName}
                    onChange={update('ownerName')}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={form.ownerEmail}
                    onChange={update('ownerEmail')}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="bg-sand-50 border border-sand-200 rounded-xl p-4">
                <p className="text-xs text-ink-600 leading-relaxed">
                  By submitting, you confirm that you are authorised to represent this
                  business and that the information provided is accurate. Lystora reserves
                  the right to verify and edit listings before publishing.
                </p>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-6">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-secondary text-xs py-2.5"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className="btn-primary text-xs py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canProceed()}
                className="btn-warm text-xs py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit Listing
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
