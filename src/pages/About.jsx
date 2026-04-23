import { Link } from 'react-router-dom'
import {
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineBadgeCheck,
  HiOutlineHeart,
  HiOutlineCode,
  HiOutlineColorSwatch,
  HiOutlineClipboardList,
  HiOutlineDesktopComputer,
} from 'react-icons/hi'

const stats = [
  { label: 'Businesses Listed', value: '50,000+' },
  { label: 'Cities Covered', value: '50+' },
  { label: 'Countries', value: '30+' },
  { label: 'Monthly Visitors', value: '2M+' },
]

const values = [
  {
    icon: <HiOutlineGlobeAlt className="text-2xl" />,
    title: 'Global First',
    text: "We don't think in borders. Every feature we build works for someone in Lagos, London, and Lima equally.",
  },
  {
    icon: <HiOutlineUserGroup className="text-2xl" />,
    title: 'Community Driven',
    text: 'The best directories are built by the people who use them. Reviews, submissions, corrections — all from our community.',
  },
  {
    icon: <HiOutlineBadgeCheck className="text-2xl" />,
    title: 'Trust & Quality',
    text: "We verify businesses. We remove fakes. We don't sell ranking positions. If a business has our badge, they earned it.",
  },
  {
    icon: <HiOutlineHeart className="text-2xl" />,
    title: 'Human Design',
    text: "No corporate templates. No cookie-cutter layouts. Every pixel is placed with care by humans who actually use the product.",
  },
]

const team = [
  { name: 'Ezeogu Ifunanya', role: 'Founder & CEO', icon: <HiOutlineCode className="text-3xl" /> },
  { name: 'Kenzo Takahashi', role: 'Head of Product', icon: <HiOutlineColorSwatch className="text-3xl" /> },
  { name: 'Fatima Al-Rashid', role: 'Head of Operations', icon: <HiOutlineClipboardList className="text-3xl" /> },
  { name: 'Carlos Rivera', role: 'Engineering Lead', icon: <HiOutlineDesktopComputer className="text-3xl" /> },
]

export default function About() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      {/* Hero */}
      <section className="container-wide mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
            About Lystora
          </span>
          <h1 className="text-editorial text-4xl md:text-5xl text-ink-900 leading-tight mb-5">
            We're building the{' '}
            <span className="italic text-terra-500">world's directory</span>{' '}
            — one city at a time.
          </h1>
          <p className="text-ink-500 text-base md:text-lg leading-relaxed">
            Lystora started with a simple question: why is it so hard to find trusted
            businesses outside of a few major Western cities? Why do billions of people
            rely on word of mouth when much of the world already has internet access?
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink-900 py-14 mb-20">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-editorial text-3xl md:text-4xl text-terra-400 mb-1">
                  {stat.value}
                </div>
                <p className="text-xs font-accent text-ink-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container-wide mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-accent font-semibold tracking-widest uppercase text-forest-600 mb-2 block">
              Our Story
            </span>
            <h2 className="text-editorial text-3xl md:text-4xl text-ink-900 mb-5">
              Born from{' '}
              <span className="italic text-forest-600">frustration</span>
            </h2>
            <div className="space-y-4 text-sm text-ink-600 leading-relaxed">
              <p>
                In 2024, our founder Ifunanya was trying to find a reliable pediatric dentist
                in Lagos. Google gave her outdated listings. The local directory hadn't
                been updated since 2018. She ended up relying on a WhatsApp group.
              </p>
              <p>
                That experience sparked a question: what if there was one platform —
                beautifully designed, continuously updated, verified — that worked for
                every city in the world?
              </p>
              <p>
                Not just another Yelp clone. Something built for the realities of how
                people in Lagos, Nairobi, São Paulo, and Bangalore actually find services.
                Something that bridges the trust gap between "I found this online" and
                "my friend recommended this."
              </p>
              <p>
                That's Lystora. We're a team of builders from 4 continents, united by
                the belief that everyone deserves access to trustworthy business information.
              </p>
            </div>
          </div>
          <div className="bg-sand-100 rounded-2xl p-8 md:p-12 border border-sand-200">
            <blockquote className="text-editorial text-xl md:text-2xl text-ink-800 italic leading-snug mb-6">
              "The best business directory is the one your friend has in their head.
              We're building that friend — for the entire world."
            </blockquote>
            <div className="flex items-center gap-3">
              <HiOutlineCode className="text-2xl text-terra-500" />
              <div>
                <p className="text-sm font-accent font-semibold text-ink-800">
                  Ezeogu Ifunanya
                </p>
                <p className="text-xs text-ink-500">Founder & CEO, Lystora</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-y border-ink-100 py-20 mb-20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
              What We Stand For
            </span>
            <h2 className="text-editorial text-3xl md:text-4xl text-ink-900">
              Our <span className="italic text-terra-500">values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-elevated p-6 md:p-8 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-terra-50 flex items-center justify-center text-terra-600 flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-ink-800 mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-wide mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-accent font-semibold tracking-widest uppercase text-forest-600 mb-2 block">
            The People
          </span>
          <h2 className="text-editorial text-3xl md:text-4xl text-ink-900">
            Meet the <span className="italic text-forest-600">team</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="card-elevated p-6 text-center hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-terra-50 flex items-center justify-center text-terra-600 mx-auto mb-3">
                {member.icon}
              </div>
              <h3 className="font-accent font-semibold text-sm text-ink-800">
                {member.name}
              </h3>
              <p className="text-xs text-ink-500 mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide">
        <div className="bg-terra-50 border border-terra-200 rounded-2xl p-8 md:p-14 text-center">
          <h2 className="text-editorial text-2xl md:text-3xl text-ink-900 mb-3">
            Want to join us?
          </h2>
          <p className="text-ink-500 text-sm max-w-md mx-auto mb-6">
            We're always looking for passionate people who believe the world deserves
            better infrastructure for finding and trusting businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/careers" className="btn-primary">
              View Open Roles
            </Link>
            <Link to="/partner" className="btn-secondary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
