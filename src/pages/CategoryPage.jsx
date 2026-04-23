import { useParams, Link } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import ListingCard from '../components/ListingCard'
import SearchBar from '../components/SearchBar'
import { categories } from '../data/sampleData'
import { useListings } from '../context/ListingsContext'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find((c) => c.slug === slug)
  const { allListings: featuredListings } = useListings()

  if (!category) {
    return (
      <div className="pt-32 pb-20 text-center">
        <HiOutlineQuestionMarkCircle className="text-5xl text-ink-300 mx-auto mb-4" />
        <h1 className="text-editorial text-3xl text-ink-900 mb-2">Category not found</h1>
        <p className="text-ink-500 text-sm mb-6">
          We couldn't find a category matching "{slug}".
        </p>
        <Link to="/categories" className="btn-primary">
          Browse All Categories
        </Link>
      </div>
    )
  }

  // Filter matching listings (demo: match on category name loosely)
  const matchedListings = featuredListings.filter(
    (l) => (l.categoryLabel || l.category || '').toLowerCase().includes(slug.split('-')[0])
  )
  // Fill with all listings if no match
  const displayListings = matchedListings.length > 0 ? matchedListings : featuredListings

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-wide">
        {/* Back link */}
        <Link
          to="/categories"
          className="inline-flex items-center gap-1.5 text-xs font-accent font-medium text-ink-500 hover:text-terra-500 transition-colors mb-6"
        >
          <HiOutlineArrowLeft /> All Categories
        </Link>

        {/* Header */}
        <div className="flex items-start gap-5 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-terra-50 flex items-center justify-center text-4xl flex-shrink-0">
            {category.icon}
          </div>
          <div>
            <h1 className="text-editorial text-3xl md:text-4xl text-ink-900 mb-1">
              {category.title}
            </h1>
            <p className="text-ink-500 text-sm">{category.description}</p>
            <span className="text-xs font-accent font-medium text-terra-500 mt-1 block">
              {category.count} listings worldwide
            </span>
          </div>
        </div>

        {/* Search within category */}
        <SearchBar size="sm" className="mb-8" />

        {/* Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayListings.map((listing, idx) => (
            <ListingCard key={listing.id + '-' + idx} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  )
}
