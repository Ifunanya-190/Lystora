import { useSearchParams, Link } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineLocationMarker } from 'react-icons/hi'
import ListingCard from '../components/ListingCard'
import SearchBar from '../components/SearchBar'
import { cities, categories } from '../data/sampleData'
import { useListings } from '../context/ListingsContext'

export default function CityPage() {
  const [searchParams] = useSearchParams()
  const cityName = searchParams.get('loc') || ''
  const { allListings } = useListings()

  const city = cities.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  )

  // Filter listings by city
  const cityListings = allListings.filter((l) =>
    l.location.toLowerCase().includes(cityName.toLowerCase())
  )
  // Pad with all listings if none match
  const displayListings = cityListings.length > 0 ? cityListings : allListings

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-wide">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-accent font-medium text-ink-500 hover:text-terra-500 transition-colors mb-6"
        >
          <HiOutlineArrowLeft /> All Cities
        </Link>

        {/* City header */}
        <div className="bg-ink-900 rounded-2xl p-8 md:p-12 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-terra-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-cream/10 flex items-center justify-center text-cream text-3xl mb-3">{city?.flag || <HiOutlineLocationMarker />}</div>
            <h1 className="text-editorial text-3xl md:text-4xl text-cream mb-2">
              {city?.name || cityName || 'Explore City'}
            </h1>
            <p className="text-ink-400 text-sm mb-1">
              {city?.country || 'Worldwide'}
            </p>
            <p className="text-terra-400 text-sm font-accent font-medium">
              {city?.listingCount || '1,000+'} listings available
            </p>
          </div>
        </div>

        {/* Search */}
        <SearchBar size="sm" className="mb-8" />

        {/* Quick category access */}
        <div className="mb-8">
          <h2 className="font-accent font-semibold text-sm text-ink-700 mb-3">
            Browse by Category in {city?.name || cityName}
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="px-3 py-2 rounded-lg bg-white border border-ink-200 text-xs font-accent font-medium text-ink-600 hover:border-terra-300 hover:text-terra-600 transition-all"
              >
                {cat.icon} {cat.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Listings */}
        <h2 className="font-accent font-semibold text-lg text-ink-800 mb-4">
          Top Businesses in {city?.name || cityName}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayListings.map((listing, idx) => (
            <ListingCard key={listing.id + '-city-' + idx} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  )
}
