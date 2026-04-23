import { Link } from 'react-router-dom'
import {
  HiOutlineCheck,
  HiOutlineBadgeCheck,
  HiOutlineChartBar,
  HiOutlineStar,
  HiOutlineLightningBolt,
  HiOutlineSupport,
} from 'react-icons/hi'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Get your business listed and discovered by customers worldwide.',
    features: [
      'Basic business listing',
      'Show on category & city pages',
      'Accept customer reviews',
      'Business contact info displayed',
      'Lystora search visibility',
    ],
    cta: 'Get Listed Free',
    ctaStyle: 'btn-secondary',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Stand out from the crowd with premium placement and tools.',
    features: [
      'Everything in Free, plus:',
      'Verified badge on your listing',
      'Featured placement in category',
      'Priority in search results',
      'Photo gallery (up to 20 photos)',
      'Respond to reviews publicly',
      'Monthly performance analytics',
      'Remove competitor ads from your page',
    ],
    cta: 'Start Pro Trial',
    ctaStyle: 'btn-warm',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For businesses with multiple locations or high-volume needs.',
    features: [
      'Everything in Pro, plus:',
      'Up to 10 branch locations',
      'Dedicated account manager',
      'Custom branded profile page',
      'API access for listing management',
      'Lead tracking & CRM integration',
      'Sponsored placement on homepage',
      'Quarterly business review calls',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'btn-primary',
    popular: false,
  },
]

const faq = [
  {
    q: 'Is it really free to list my business?',
    a: 'Yes. The Free plan gives you a permanent listing on Lystora with your business name, category, location, contact info, and customer reviews. No hidden fees.',
  },
  {
    q: 'What does the verified badge mean?',
    a: 'The verified badge means our team has confirmed your business exists, is operational, and matches the information in your listing. Available on Pro and Enterprise plans.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. There are no long-term contracts. You can downgrade or cancel your plan at any time. Your listing stays active on the Free plan.',
  },
  {
    q: 'How do payments work?',
    a: 'We accept all major credit cards, Paystack (for African cards), and bank transfers for Enterprise plans. Billing is monthly with no setup fees.',
  },
  {
    q: 'What if I have multiple business locations?',
    a: 'The Enterprise plan supports up to 10 locations under one account. Each location gets its own listing page with individual reviews and analytics.',
  },
]

export default function Pricing() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      {/* Hero */}
      <section className="container-wide text-center mb-16">
        <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
          Pricing
        </span>
        <h1 className="text-editorial text-3xl md:text-5xl text-ink-900 mb-4">
          Simple plans,{' '}
          <span className="italic text-terra-500">real results</span>
        </h1>
        <p className="text-ink-500 text-sm md:text-base max-w-lg mx-auto">
          Every business starts free. Upgrade when you're ready to grow faster.
        </p>
      </section>

      {/* Plans */}
      <section className="container-wide mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-elevated p-6 md:p-8 flex flex-col relative ${
                plan.popular ? 'ring-2 ring-terra-400 shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-terra text-[10px] px-4">
                  Most Popular
                </span>
              )}

              <h3 className="font-accent font-semibold text-lg text-ink-800">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mt-2 mb-1">
                <span className="text-editorial text-4xl text-ink-900">
                  {plan.price}
                </span>
                <span className="text-sm text-ink-400">{plan.period}</span>
              </div>
              <p className="text-xs text-ink-500 mb-6">{plan.description}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-sm text-ink-600"
                  >
                    <HiOutlineCheck className="text-forest-500 mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.name === 'Free' ? '/submit-listing' : '/contact'}
                className={`${plan.ctaStyle} text-center w-full text-xs py-3`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Features breakdown */}
      <section className="bg-white border-y border-ink-100 py-20 mb-20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-editorial text-2xl md:text-3xl text-ink-900">
              What you get with{' '}
              <span className="italic text-terra-500">every plan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <HiOutlineBadgeCheck className="text-2xl" />,
                title: 'Trust & Credibility',
                text: 'Every listing on Lystora signals legitimacy. Pro users get a verified badge that builds instant trust.',
              },
              {
                icon: <HiOutlineChartBar className="text-2xl" />,
                title: 'Visibility & Reach',
                text: 'Your business appears in category, city, and search results. Pro listings rank higher.',
              },
              {
                icon: <HiOutlineStar className="text-2xl" />,
                title: 'Customer Reviews',
                text: 'Real reviews from real customers help you build reputation. Pro users can respond publicly.',
              },
              {
                icon: <HiOutlineLightningBolt className="text-2xl" />,
                title: 'Always Updated',
                text: 'Edit your listing anytime. Update hours, add photos, change your description — instantly.',
              },
              {
                icon: <HiOutlineSupport className="text-2xl" />,
                title: 'Customer Support',
                text: 'Free users get community support. Pro and Enterprise users get priority email and chat support.',
              },
              {
                icon: <HiOutlineChartBar className="text-2xl" />,
                title: 'Analytics',
                text: 'Pro users see how many people viewed their listing, clicked contact, and read reviews.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <div className="w-10 h-10 rounded-lg bg-terra-50 flex items-center justify-center text-terra-600 mb-3">
                  {item.icon}
                </div>
                <h3 className="font-accent font-semibold text-ink-800 text-sm mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-ink-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-narrow">
        <h2 className="text-editorial text-2xl md:text-3xl text-ink-900 text-center mb-10">
          Frequently Asked{' '}
          <span className="italic text-terra-500">Questions</span>
        </h2>

        <div className="space-y-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="card-elevated group"
            >
              <summary className="px-6 py-4 cursor-pointer flex items-center justify-between text-sm font-accent font-semibold text-ink-800 hover:text-terra-600 transition-colors list-none">
                {item.q}
                <span className="text-ink-400 group-open:rotate-45 transition-transform text-lg">+</span>
              </summary>
              <div className="px-6 pb-4 text-sm text-ink-600 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
