import { Link } from 'react-router-dom'
import {
  HiOutlineArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
  HiOutlineStar,
} from 'react-icons/hi'
import SearchBar from '../components/SearchBar'
import CategoryCard from '../components/CategoryCard'
import ListingCard from '../components/ListingCard'
import { categories, featuredListings, cities, testimonials, articles } from '../data/sampleData'

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background accent shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-terra-100 rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-forest-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container-wide">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-terra-50 border border-terra-200 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
              <span className="text-xs font-accent font-medium text-terra-700">
                Trusted by 50,000+ businesses worldwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink-900 leading-[1.08] mb-6 animate-fade-in-up stagger-1">
              Find the right
              <span className="block text-terra-500 italic">
                businesses & services
              </span>
              anywhere in the world.
            </h1>

            {/* Subtitle */}
            <p className="text-ink-500 text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up stagger-2">
              Lystora connects you with verified professionals across health, education,
              finance, legal, real estate, and more — city by city, globally.
            </p>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl animate-fade-in-up stagger-3">
            <SearchBar size="lg" />
          </div>

          {/* Quick category pills */}
          <div className="flex flex-wrap gap-2 mt-6 animate-fade-in-up stagger-4">
            <span className="text-xs text-ink-400 font-accent py-1.5">Popular:</span>
            {['Health', 'Education', 'Finance', 'Legal', 'Jobs'].map((cat) => (
              <Link
                key={cat}
                to={`/category/${cat.toLowerCase()}`}
                className="px-3 py-1.5 rounded-lg bg-white border border-ink-100 text-xs font-accent text-ink-600 hover:border-terra-300 hover:text-terra-600 transition-all"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CATEGORIES GRID
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-y border-ink-100">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
                Browse Categories
              </span>
              <h2 className="text-editorial text-3xl md:text-4xl text-ink-900">
                Everything you need,{' '}
                <span className="italic text-terra-500">one platform.</span>
              </h2>
            </div>
            <Link
              to="/categories"
              className="flex items-center gap-2 text-sm font-accent font-medium text-ink-600 hover:text-terra-500 transition-colors"
            >
              View all categories <HiOutlineArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.slice(0, 9).map((cat) => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURED LISTINGS
      ═══════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-accent font-semibold tracking-widest uppercase text-forest-600 mb-2 block">
                Featured Businesses
              </span>
              <h2 className="text-editorial text-3xl md:text-4xl text-ink-900">
                Handpicked &{' '}
                <span className="italic text-forest-600">verified</span>
              </h2>
            </div>
            <Link
              to="/explore"
              className="flex items-center gap-2 text-sm font-accent font-medium text-ink-600 hover:text-terra-500 transition-colors"
            >
              Explore all <HiOutlineArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY LYSTORA
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-ink-900 text-cream relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 border border-ink-700 rounded-full opacity-30" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 border border-ink-700 rounded-full opacity-20" />

        <div className="container-wide relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-400 mb-2 block">
              Why Lystora
            </span>
            <h2 className="text-editorial text-3xl md:text-4xl text-cream">
              Built different.{' '}
              <span className="italic text-terra-300">Built better.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <HiOutlineGlobeAlt className="text-2xl" />,
                title: 'Truly Global',
                text: "From Lagos to London, São Paulo to Singapore — we don't just cover one region. We cover the world, city by city.",
              },
              {
                icon: <HiOutlineBadgeCheck className="text-2xl" />,
                title: 'Verified & Trusted',
                text: 'Every featured business goes through our verification process. Look for the badge — it means they are real.',
              },
              {
                icon: <HiOutlineLightningBolt className="text-2xl" />,
                title: 'Always Fresh',
                text: 'Listings are updated continuously. No more clicking on dead links or outdated phone numbers from 2019.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-ink-800 border border-ink-700 flex items-center justify-center text-terra-400 mx-auto md:mx-0 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-accent font-semibold text-lg text-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CITIES / GLOBAL REACH
      ═══════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
              Global Network
            </span>
            <h2 className="text-editorial text-3xl md:text-4xl text-ink-900">
              Explore cities{' '}
              <span className="italic text-terra-500">around the world</span>
            </h2>
            <p className="text-ink-500 text-sm mt-3 max-w-md mx-auto">
              We're live in 50+ cities across 6 continents — and growing every week.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.name}
                to={`/city?loc=${city.name}`}
                className="group card-elevated p-5 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-terra-50 flex items-center justify-center text-terra-500 text-xl mx-auto mb-2">{city.flag}</div>
                <h3 className="font-accent font-semibold text-ink-800 group-hover:text-terra-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-xs text-ink-400">{city.country}</p>
                <p className="text-xs text-terra-500 font-medium mt-1.5">
                  {city.listingCount} listings
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-y border-ink-100">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-xs font-accent font-semibold tracking-widest uppercase text-forest-600 mb-2 block">
              Testimonials
            </span>
            <h2 className="text-editorial text-3xl md:text-4xl text-ink-900">
              People love{' '}
              <span className="italic text-forest-600">Lystora</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-elevated p-6 md:p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="text-terra-400 text-sm fill-current" />
                  ))}
                </div>
                <p className="text-ink-600 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-terra-50 flex items-center justify-center text-terra-500 text-lg">{t.avatar}</div>
                  <div>
                    <p className="text-sm font-accent font-semibold text-ink-800">
                      {t.name}
                    </p>
                    <p className="text-xs text-ink-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LATEST ARTICLES
      ═══════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
                Resources
              </span>
              <h2 className="text-editorial text-3xl md:text-4xl text-ink-900">
                Guides, articles &{' '}
                <span className="italic text-terra-500">insights</span>
              </h2>
            </div>
            <Link
              to="/resources"
              className="flex items-center gap-2 text-sm font-accent font-medium text-ink-600 hover:text-terra-500 transition-colors"
            >
              Read all <HiOutlineArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/resources/${article.id}`}
                className="group card-elevated overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="sm:w-48 h-48 sm:h-auto bg-ink-100 overflow-hidden flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <span className="text-[11px] font-accent font-medium uppercase tracking-wider text-terra-500 mb-1.5">
                    {article.category} · {article.readTime}
                  </span>
                  <h3 className="font-accent font-semibold text-ink-800 leading-snug group-hover:text-terra-600 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-ink-500 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="mt-auto pt-3 text-xs text-ink-400">
                    {article.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-wide">
          <div className="relative bg-terra-500 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-terra-400 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-terra-600 rounded-full blur-2xl opacity-40" />

            <div className="relative z-10">
              <h2 className="text-editorial text-3xl md:text-4xl text-white mb-4">
                Ready to grow your business?
              </h2>
              <p className="text-terra-100 max-w-md mx-auto mb-8 text-sm md:text-base">
                Join thousands of businesses already being discovered on Lystora.
                Get verified, get found, get growing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to="/submit-listing"
                  className="inline-flex items-center justify-center gap-2 bg-white text-terra-700 px-8 py-3.5 rounded-xl font-accent font-semibold text-sm hover:bg-cream transition-colors"
                >
                  List Your Business
                </Link>
                <Link
                  to="/explore"
                  className="inline-flex items-center justify-center gap-2 bg-terra-600 text-white px-8 py-3.5 rounded-xl font-accent font-semibold text-sm border border-terra-400 hover:bg-terra-700 transition-colors"
                >
                  Explore Directory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
