import { Link } from 'react-router-dom'
import {
  HiOutlineCheck,
  HiOutlineLibrary,
  HiOutlineOfficeBuilding,
  HiOutlineNewspaper,
  HiOutlineLightningBolt,
} from 'react-icons/hi'

const benefits = [
  {
    title: 'Reach New Customers',
    text: 'Lystora gets thousands of visitors looking for businesses exactly like yours. We send them straight to your partners.',
  },
  {
    title: 'Co-Marketing Opportunities',
    text: 'Get featured in our email newsletter, resource articles, and social channels — amplifying your brand.',
  },
  {
    title: 'Revenue Share',
    text: 'Earn commission when businesses you refer upgrade to our Pro or Enterprise plans.',
  },
  {
    title: 'Dedicated Support',
    text: 'Every partner gets a dedicated account contact and priority onboarding for their referred businesses.',
  },
]

const partnerTypes = [
  {
    title: 'Business Associations',
    text: 'Chambers of commerce, trade groups, and industry associations can list all their members on Lystora in bulk.',
    icon: <HiOutlineLibrary className="text-3xl" />,
  },
  {
    title: 'Coworking Spaces & Hubs',
    text: "Help your members get noticed. We'll give them verified listings and you get co-branding.",
    icon: <HiOutlineOfficeBuilding className="text-3xl" />,
  },
  {
    title: 'Media & Content Partners',
    text: 'Publish resources together, cross-promote content, and build shared audiences.',
    icon: <HiOutlineNewspaper className="text-3xl" />,
  },
  {
    title: 'Technology Partners',
    text: 'Integrate with Lystora via API. Build tools, plugins, or services on top of our directory data.',
    icon: <HiOutlineLightningBolt className="text-3xl" />,
  },
]

export default function Partner() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-wide">
        {/* Hero */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
            Partner With Us
          </span>
          <h1 className="text-editorial text-3xl md:text-5xl text-ink-900 mb-4">
            Let's grow{' '}
            <span className="italic text-terra-500">together</span>
          </h1>
          <p className="text-ink-500 text-sm md:text-base leading-relaxed">
            Whether you represent a business association, a coworking space, or a media platform —
            there's a way we can work together to help more businesses get discovered.
          </p>
        </div>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="font-accent font-semibold text-lg text-ink-800 mb-6">
            Why partner with Lystora
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="card-elevated p-6 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center text-forest-600 flex-shrink-0 mt-0.5">
                  <HiOutlineCheck className="text-lg" />
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-sm text-ink-800 mb-1">{b.title}</h3>
                  <p className="text-xs text-ink-500 leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner types */}
        <section className="mb-20">
          <h2 className="font-accent font-semibold text-lg text-ink-800 mb-6">
            Who we work with
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {partnerTypes.map((p) => (
              <div key={p.title} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-xl bg-terra-50 flex items-center justify-center text-terra-600 mb-3">
                  {p.icon}
                </div>
                <h3 className="font-accent font-semibold text-sm text-ink-800 mb-1.5">{p.title}</h3>
                <p className="text-xs text-ink-500 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink-900 rounded-2xl p-8 md:p-14 text-center">
          <h2 className="text-editorial text-2xl md:text-3xl text-cream mb-3">
            Ready to partner?
          </h2>
          <p className="text-ink-400 text-sm max-w-md mx-auto mb-6">
            Tell us about your organisation and how you'd like to collaborate.
            We'll get back to you within 48 hours.
          </p>
          <Link to="/contact" className="btn-warm text-xs py-3 px-8">
            Get In Touch
          </Link>
        </section>
      </div>
    </div>
  )
}
