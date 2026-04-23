import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  HiOutlineAdjustments,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineSearch,
} from 'react-icons/hi'
import SearchBar from '../components/SearchBar'
import ListingCard from '../components/ListingCard'
import { categories } from '../data/sampleData'
import { useListings } from '../context/ListingsContext'

export default function Explore() {
  const [searchParams] = useSearchParams()
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [ratingFilter, setRatingFilter] = useState('any')
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [sortBy, setSortBy] = useState('relevance')
  const { allListings: everyListing } = useListings()

  const queryParam = searchParams.get('q') || ''
  const locationParam = searchParams.get('loc') || ''

  // Filter and sort listings
  const allListings = useMemo(() => {
    const doubled = everyListing

    return doubled.filter((l) => {
      const catText = (l.categoryLabel || l.category || '').toLowerCase()
      const matchesCategory = selectedCategory === 'all' || catText.includes(selectedCategory)
      const matchesQuery = !queryParam || l.name.toLowerCase().includes(queryParam.toLowerCase()) || catText.includes(queryParam.toLowerCase())
      const matchesLocation = !locationParam || l.location.toLowerCase().includes(locationParam.toLowerCase())
      const matchesRating = ratingFilter === 'any' || l.rating >= parseFloat(ratingFilter)
      const matchesVerified = !verifiedOnly || l.verified
      return matchesCategory && matchesQuery && matchesLocation && matchesRating && matchesVerified
    }).sort((a, b) => {
      if (sortBy === 'highest') return b.rating - a.rating
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount
      if (sortBy === 'newest') return b.id.localeCompare(a.id)
      return 0
    })
  }, [everyListing, selectedCategory, queryParam, locationParam, ratingFilter, verifiedOnly, sortBy])

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-editorial text-3xl md:text-4xl text-ink-900 mb-2">
            Explore Directory
          </h1>
          <p className="text-ink-500 text-sm">
            {queryParam
              ? `Showing results for "${queryParam}"${locationParam ? ` in ${locationParam}` : ''}`
              : 'Discover verified businesses and professionals worldwide.'}
          </p>
        </div>

        {/* Search */}
        <SearchBar size="sm" className="mb-8" />

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-accent font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-ink-900 text-cream'
                  : 'bg-white border border-ink-200 text-ink-600 hover:border-ink-400'
              }`}
            >
              All
            </button>
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat.slug}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === cat.slug ? 'all' : cat.slug
                  )
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-accent font-medium transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-ink-900 text-cream'
                    : 'bg-white border border-ink-200 text-ink-600 hover:border-ink-400'
                }`}
              >
                {cat.icon} {cat.title}
              </button>
            ))}
          </div>

          {/* View toggle & filters */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-accent font-medium bg-white border border-ink-200 text-ink-600 hover:border-ink-400 transition-all"
            >
              <HiOutlineAdjustments className="text-base" /> Filters
            </button>
            <div className="flex bg-white border border-ink-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${
                  viewMode === 'grid' ? 'bg-ink-100 text-ink-800' : 'text-ink-400'
                }`}
              >
                <HiOutlineViewGrid className="text-base" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${
                  viewMode === 'list' ? 'bg-ink-100 text-ink-800' : 'text-ink-400'
                }`}
              >
                <HiOutlineViewList className="text-base" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters panel (expandable) */}
        {showFilters && (
          <div className="card-elevated p-5 mb-6 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                  Rating
                </label>
                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-ink-200 text-sm text-ink-700 focus:outline-none focus:border-terra-400"
                >
                  <option value="any">Any rating</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                  Verification
                </label>
                <select
                  value={verifiedOnly ? 'verified' : 'all'}
                  onChange={(e) => setVerifiedOnly(e.target.value === 'verified')}
                  className="w-full px-3 py-2 rounded-lg border border-ink-200 text-sm text-ink-700 focus:outline-none focus:border-terra-400"
                >
                  <option value="all">All</option>
                  <option value="verified">Verified Only</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-ink-200 text-sm text-ink-700 focus:outline-none focus:border-terra-400"
                >
                  <option value="relevance">Relevance</option>
                  <option value="highest">Highest Rated</option>
                  <option value="reviews">Most Reviewed</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <p className="text-xs text-ink-400 font-accent mb-4">
          Showing {allListings.length} results
        </p>

        {/* Listings grid */}
        {allListings.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex flex-col gap-4'
            }
          >
            {allListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <HiOutlineSearch className="text-4xl text-ink-300 mx-auto mb-4" />
            <h3 className="font-accent font-semibold text-ink-700 text-lg mb-2">
              No results found
            </h3>
            <p className="text-ink-500 text-sm">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
