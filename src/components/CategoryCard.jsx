import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

export default function CategoryCard({ icon, title, count, slug, color = 'terra' }) {
  const colorMap = {
    terra: 'bg-terra-50 text-terra-600 group-hover:bg-terra-100',
    forest: 'bg-forest-50 text-forest-600 group-hover:bg-forest-100',
    sand: 'bg-sand-50 text-sand-600 group-hover:bg-sand-100',
    ink: 'bg-ink-50 text-ink-600 group-hover:bg-ink-100',
  }

  return (
    <Link
      to={`/category/${slug}`}
      className="group card-elevated p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-colors duration-300 ${colorMap[color]}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-accent font-semibold text-ink-800 group-hover:text-terra-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-ink-500 mt-0.5">
          {count} listings
        </p>
      </div>
      <div className="mt-auto flex items-center gap-1 text-xs font-accent font-medium text-ink-400 group-hover:text-terra-500 transition-colors">
        Browse <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}
