import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight, HiOutlineCheckCircle } from 'react-icons/hi'
import { articles } from '../data/sampleData'

const resourceCategories = ['All', 'Legal', 'Finance', 'Education', 'Jobs & Careers', 'Health', 'Technology']

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [nlEmail, setNlEmail] = useState('')
  const [nlSubscribed, setNlSubscribed] = useState(false)

  const handleNlSubscribe = (e) => {
    e.preventDefault()
    if (!nlEmail) return
    setNlSubscribed(true)
    setNlEmail('')
    setTimeout(() => setNlSubscribed(false), 4000)
  }

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category.toLowerCase().includes(activeCategory.toLowerCase()))

  const featured = filteredArticles[0]
  const rest = filteredArticles.slice(1)
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
            Resources & Guides
          </span>
          <h1 className="text-editorial text-3xl md:text-4xl text-ink-900 mb-3">
            Knowledge to help you{' '}
            <span className="italic text-terra-500">thrive</span>
          </h1>
          <p className="text-ink-500 text-sm leading-relaxed">
            Business guides, industry reports, how-to articles, and expert insights —
            all free, all practical, all written for real people in real markets.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {resourceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-accent font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-ink-900 text-cream'
                  : 'bg-white border border-ink-200 text-ink-600 hover:border-ink-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured article */}
        {featured && (
        <Link
          to={`/resources/${featured.id}`}
          className="group card-elevated overflow-hidden flex flex-col md:flex-row mb-8"
        >
          <div className="md:w-1/2 h-64 md:h-auto bg-ink-100 overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <span className="text-[11px] font-accent font-medium uppercase tracking-wider text-terra-500 mb-2">
              {featured.category} · {featured.readTime}
            </span>
            <h2 className="text-editorial text-2xl md:text-3xl text-ink-900 group-hover:text-terra-600 transition-colors mb-3 leading-tight">
              {featured.title}
            </h2>
            <p className="text-sm text-ink-500 leading-relaxed mb-4">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs font-accent font-medium text-terra-500 group-hover:text-terra-600">
              Read Article <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
        )}

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <Link
              key={article.id}
              to={`/resources/${article.id}`}
              className="group card-elevated overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-ink-100 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[11px] font-accent font-medium uppercase tracking-wider text-terra-500 mb-1.5">
                  {article.category} · {article.readTime}
                </span>
                <h3 className="font-accent font-semibold text-ink-800 leading-snug group-hover:text-terra-600 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-ink-500 leading-relaxed line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <span className="mt-auto text-xs text-ink-400">{article.date}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-forest-50 border border-forest-200 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-editorial text-2xl md:text-3xl text-ink-900 mb-3">
            Get weekly insights
          </h3>
          <p className="text-ink-500 text-sm max-w-md mx-auto mb-6">
            Join 10,000+ professionals who receive our curated guide every Tuesday.
            No spam, no fluff — just actionable knowledge.
          </p>
          {nlSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-forest-600 text-sm">
              <HiOutlineCheckCircle className="text-lg" />
              <span className="font-accent font-medium">Subscribed! Check your inbox.</span>
            </div>
          ) : (
          <form onSubmit={handleNlSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded-xl border border-forest-200 text-sm focus:outline-none focus:border-forest-500 transition-colors"
            />
            <button type="submit" className="btn-primary bg-forest-700 hover:bg-forest-800 py-3 px-6">
              Subscribe
            </button>
          </form>
          )}
        </div>
      </div>
    </div>
  )
}
