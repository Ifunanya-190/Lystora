import { Link } from 'react-router-dom'
import {
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineBookOpen,
  HiOutlineSun,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
} from 'react-icons/hi'

const openings = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build and improve the Lystora web platform. Work with React, Tailwind, and modern tooling to deliver fast, accessible interfaces.',
  },
  {
    title: 'Content Strategist',
    department: 'Marketing',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Plan and create guides, articles, and resources that help business owners and professionals succeed. Write for real humans, not algorithms.',
  },
  {
    title: 'Business Development Lead — Africa',
    department: 'Growth',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Drive partnerships with business associations, chambers of commerce, and enterprise clients across African markets.',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Shape how millions interact with Lystora. You will own the end-to-end design process from research to pixel-perfect handoff.',
  },
  {
    title: 'Customer Success Associate',
    department: 'Support',
    location: 'Remote (GMT-1 to GMT+4)',
    type: 'Full-time',
    description: 'Help business owners get the most out of Lystora. Onboard new Pro/Enterprise users and resolve issues with care.',
  },
]

const values = [
  { icon: <HiOutlineGlobeAlt className="text-2xl" />, title: 'Remote-first', text: "Work from anywhere. We're distributed across 8 countries and counting." },
  { icon: <HiOutlineBookOpen className="text-2xl" />, title: 'Learning budget', text: '$1,500/year for courses, books, conferences — whatever helps you grow.' },
  { icon: <HiOutlineSun className="text-2xl" />, title: 'Flexible PTO', text: 'We trust you to take time off when you need it. No tracking, no guilt.' },
  { icon: <HiOutlineCurrencyDollar className="text-2xl" />, title: 'Competitive pay', text: 'Salaries benchmarked against global standards, paid in your preferred currency.' },
  { icon: <HiOutlineShieldCheck className="text-2xl" />, title: 'Health coverage', text: 'Comprehensive health insurance for you and your dependents.' },
  { icon: <HiOutlineLightningBolt className="text-2xl" />, title: 'Equity options', text: 'Early employees get stock options. We grow together.' },
]

export default function Careers() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-wide">
        {/* Hero */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
            Careers
          </span>
          <h1 className="text-editorial text-3xl md:text-5xl text-ink-900 mb-4">
            Help us build the world's most{' '}
            <span className="italic text-terra-500">useful</span> directory
          </h1>
          <p className="text-ink-500 text-sm md:text-base leading-relaxed">
            Lystora is growing fast. We're looking for people who care about quality,
            move quickly, and want their work to matter. If that sounds like you — read on.
          </p>
        </div>

        {/* Perks */}
        <section className="mb-20">
          <h2 className="font-accent font-semibold text-lg text-ink-800 mb-6">
            Why work at Lystora
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card-elevated p-5">
                <div className="w-10 h-10 rounded-xl bg-terra-50 flex items-center justify-center text-terra-600 mb-2">
                  {v.icon}
                </div>
                <h3 className="font-accent font-semibold text-sm text-ink-800 mb-1">{v.title}</h3>
                <p className="text-xs text-ink-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open roles */}
        <section>
          <h2 className="font-accent font-semibold text-lg text-ink-800 mb-2">
            Open Positions
          </h2>
          <p className="text-xs text-ink-500 mb-6">
            {openings.length} roles currently open. Don't see your role? Email us at careers@lystora.com.
          </p>

          <div className="space-y-4">
            {openings.map((job) => (
              <details key={job.title} className="card-elevated group">
                <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-accent font-semibold text-ink-800 text-sm group-hover:text-terra-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-xs text-ink-400">
                        <HiOutlineBriefcase className="text-sm" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-ink-400">
                        <HiOutlineLocationMarker className="text-sm" /> {job.location}
                      </span>
                      <span className="badge text-[10px]">{job.type}</span>
                    </div>
                  </div>
                  <span className="text-ink-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 border-t border-ink-100 pt-4">
                  <p className="text-sm text-ink-600 leading-relaxed mb-4">{job.description}</p>
                  <Link to="/contact" className="btn-primary text-xs py-2 px-5">
                    Apply Now
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
