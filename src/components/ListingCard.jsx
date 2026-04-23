import { Link } from 'react-router-dom'
import { HiStar, HiOutlineLocationMarker, HiOutlineBadgeCheck } from 'react-icons/hi'

export default function ListingCard({ listing }) {
  const {
    id,
    name,
    category,
    location,
    rating,
    reviewCount,
    image,
    verified,
    featured,
  } = listing

  return (
    <Link
      to={`/listing/${id}`}
      className="group card-elevated overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 bg-ink-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {featured && (
          <span className="absolute top-3 left-3 badge-terra text-[10px]">
            Featured
          </span>
        )}
        {verified && (
          <span className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <HiOutlineBadgeCheck className="text-forest-600 text-base" />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] font-accent font-medium uppercase tracking-wider text-terra-500 mb-1">
          {listing.categoryLabel || category}
        </span>
        <h3 className="font-accent font-semibold text-ink-800 group-hover:text-terra-600 transition-colors leading-snug mb-2">
          {name}
        </h3>

        <div className="flex items-center gap-3 text-xs text-ink-500 mt-auto">
          {/* Location */}
          <span className="flex items-center gap-1">
            <HiOutlineLocationMarker className="text-sm" />
            {location}
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1 ml-auto">
            <HiStar className="text-terra-400 text-sm" />
            <span className="font-medium text-ink-700">{rating}</span>
            <span className="text-ink-400">({reviewCount})</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
