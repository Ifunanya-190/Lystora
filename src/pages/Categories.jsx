import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import { categories } from '../data/sampleData'

export default function Categories() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
            All Categories
          </span>
          <h1 className="text-editorial text-3xl md:text-4xl text-ink-900 mb-3">
            Browse by{' '}
            <span className="italic text-terra-500">category</span>
          </h1>
          <p className="text-ink-500 text-sm leading-relaxed">
            Whether you need a doctor, a lawyer, a tutor, or a restaurant — Lystora
            organizes the world's businesses so you can find exactly what you need.
          </p>
        </div>

        {/* Full category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="group card-elevated p-6 flex gap-5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-terra-50 flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-terra-100 transition-colors">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-accent font-semibold text-ink-800 group-hover:text-terra-600 transition-colors mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-ink-500 leading-relaxed mb-2">
                  {cat.description}
                </p>
                <span className="text-xs font-accent font-medium text-terra-500">
                  {cat.count} listings →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
