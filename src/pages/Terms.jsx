import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HiOutlineDocumentText,
  HiOutlineDesktopComputer,
  HiOutlineClipboardList,
  HiOutlineChatAlt2,
  HiOutlineCreditCard,
  HiOutlinePuzzle,
  HiOutlineExclamationCircle,
  HiOutlineBan,
  HiOutlineScale,
  HiOutlineMail,
  HiOutlineCheckCircle,
  HiOutlineReceiptRefund,
  HiOutlineSpeakerphone,
} from 'react-icons/hi'

const sections = [
  {
    id: 'acceptance',
    icon: <HiOutlineDocumentText />,
    title: 'Acceptance of Terms',
    content: (
      <div className="bg-white border border-ink-100 rounded-xl p-5">
        <p className="text-sm text-ink-600 leading-relaxed">
          By accessing or using Lystora ("the Platform"), you agree to be bound by these Terms of Service.
          If you do not agree, do not use the Platform. We may update these terms from time to time —
          continued use after changes constitutes acceptance.
        </p>
      </div>
    ),
  },
  {
    id: 'usage',
    icon: <HiOutlineDesktopComputer />,
    title: 'Use of the Platform',
    content: (
      <>
        <p className="text-sm text-ink-600 mb-4">You agree to use Lystora only for lawful purposes. You must not:</p>
        <div className="space-y-2">
          {[
            'Submit false, misleading, or fraudulent business information.',
            'Impersonate any person or business you are not authorised to represent.',
            'Scrape, crawl, or harvest data from the Platform without written permission.',
            'Attempt to gain unauthorised access to any part of the Platform.',
            'Use the Platform to harass, abuse, or harm other users.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 px-4 py-3 rounded-lg bg-red-50 border border-red-100">
              <span className="text-red-400 mt-0.5">✕</span>
              <span className="text-sm text-ink-600">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'listings',
    icon: <HiOutlineClipboardList />,
    title: 'Business Listings',
    content: (
      <>
        <p className="text-sm text-ink-600 mb-4">When you submit a business listing, you represent that:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {[
            { text: 'You are authorised to represent the business.' },
            { text: 'All information provided is accurate and up to date.' },
            { text: 'You have the right to use any images or content submitted.' },
          ].map((item) => (
            <div key={item.text} className="p-4 rounded-xl bg-white border border-ink-100 text-center">
              <div className="w-8 h-8 rounded-full bg-forest-50 flex items-center justify-center text-forest-500 mx-auto mb-2">
                <HiOutlineCheckCircle className="text-lg" />
              </div>
              <p className="text-xs text-ink-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-sand-50 border border-sand-200 rounded-xl p-4">
          <p className="text-xs text-ink-600 leading-relaxed">
            Lystora reserves the right to review, edit, or remove any listing at our discretion.
            We may verify business information before publishing.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'reviews',
    icon: <HiOutlineChatAlt2 />,
    title: 'Reviews & User Content',
    content: (
      <div className="relative overflow-hidden rounded-xl bg-white border border-ink-100 p-6">
        <p className="text-sm text-ink-600 leading-relaxed">
          Reviews must be honest and based on genuine experience. We do not tolerate fake reviews,
          spam, or defamatory content. Lystora may remove reviews that violate these standards.
          By posting a review, you grant us a non-exclusive, royalty-free licence to display it on the Platform.
        </p>
      </div>
    ),
  },
  {
    id: 'paid-plans',
    icon: <HiOutlineCreditCard />,
    title: 'Paid Plans',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: 'Billing', desc: 'Pro and Enterprise plans are billed monthly.', icon: <HiOutlineCreditCard className="text-xl" /> },
          { label: 'Cancellation', desc: 'Cancel anytime — your plan stays active until the billing period ends.', icon: <HiOutlineReceiptRefund className="text-xl" /> },
          { label: 'Pricing changes', desc: 'We reserve the right to change pricing with 30 days\' notice.', icon: <HiOutlineSpeakerphone className="text-xl" /> },
        ].map((item) => (
          <div key={item.label} className="card-elevated p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-terra-50 flex items-center justify-center text-terra-500 mx-auto mb-2">
              {item.icon}
            </div>
            <h4 className="font-accent font-semibold text-xs text-ink-800 mb-1">{item.label}</h4>
            <p className="text-xs text-ink-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'ip',
    icon: <HiOutlinePuzzle />,
    title: 'Intellectual Property',
    content: (
      <div className="bg-white border border-ink-100 rounded-xl p-5">
        <p className="text-sm text-ink-600 leading-relaxed">
          All content, design, and code on the Platform is owned by Lystora or its licensors.
          You may not copy, modify, distribute, or create derivative works without permission.
          Business owners retain ownership of their submitted content.
        </p>
      </div>
    ),
  },
  {
    id: 'liability',
    icon: <HiOutlineExclamationCircle />,
    title: 'Limitation of Liability',
    content: (
      <div className="relative overflow-hidden rounded-xl bg-ink-900 p-6">
        <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-terra-500/10 rounded-full blur-2xl" />
        <p className="text-sm text-ink-300 leading-relaxed relative z-10">
          Lystora is provided "as is" without warranties of any kind. We are not liable for
          any damages arising from your use of the Platform, including but not limited to
          loss of data, revenue, or business opportunities. Our total liability shall not
          exceed the amount you paid us in the 12 months preceding the claim.
        </p>
      </div>
    ),
  },
  {
    id: 'termination',
    icon: <HiOutlineBan />,
    title: 'Termination',
    content: (
      <div className="bg-white border border-ink-100 rounded-xl p-5">
        <p className="text-sm text-ink-600 leading-relaxed">
          We may suspend or terminate your access to the Platform at any time for violation
          of these terms. You may close your account at any time by contacting us.
          Sections on Intellectual Property, Liability, and Governing Law survive termination.
        </p>
      </div>
    ),
  },
  {
    id: 'law',
    icon: <HiOutlineScale />,
    title: 'Governing Law',
    content: (
      <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
        <p className="text-sm text-forest-800 leading-relaxed">
          These terms are governed by and construed in accordance with the laws of the Federal
          Republic of Nigeria. Any disputes shall be resolved in the courts of Lagos, Nigeria.
        </p>
      </div>
    ),
  },
  {
    id: 'contact',
    icon: <HiOutlineMail />,
    title: 'Contact',
    content: (
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 card-elevated p-5 text-center">
          <p className="text-sm text-ink-600 mb-3">Legal questions?</p>
          <span className="text-terra-500 font-accent font-semibold text-sm">legal@lystora.com</span>
        </div>
        <div className="flex-1 card-elevated p-5 text-center">
          <p className="text-sm text-ink-600 mb-3">Prefer a form?</p>
          <Link to="/contact" className="btn-primary text-xs py-2 px-5">Contact Page</Link>
        </div>
      </div>
    ),
  },
]

export default function Terms() {
  const [activeSection, setActiveSection] = useState('acceptance')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-cream via-white to-forest-50">
        <div className="absolute top-16 left-0 w-72 h-72 bg-forest-100 rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-terra-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="text-xs font-accent font-semibold tracking-widest uppercase text-forest-600 mb-3 block">
              Legal
            </span>
            <h1 className="text-editorial text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.1] mb-4">
              Terms of{' '}
              <span className="italic text-forest-600">Service</span>
            </h1>
            <p className="text-ink-500 text-base md:text-lg leading-relaxed max-w-lg mb-3">
              The rules of the road for using Lystora. Written for humans, not just lawyers.
            </p>
            <p className="text-xs text-ink-400 font-accent">Last updated: April 1, 2026</p>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-10 md:h-16">
            <path
              d="M0,60 C150,20 350,80 600,50 C850,20 1050,70 1200,40 L1200,80 L0,80 Z"
              fill="#F5F0EB"
            />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="lg:sticky lg:top-28 space-y-1">
                <p className="text-[10px] font-accent font-semibold tracking-widest uppercase text-ink-400 mb-3 px-3">
                  On this page
                </p>
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveSection(s.id)
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-accent font-medium transition-all text-left ${
                      activeSection === s.id
                        ? 'bg-forest-600 text-white shadow-sm'
                        : 'text-ink-600 hover:bg-white hover:text-ink-800'
                    }`}
                  >
                    <span className="text-base">{s.icon}</span>
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main */}
            <div className="lg:col-span-3 space-y-10">
              {sections.map((s, idx) => (
                <div key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 text-lg">
                      {s.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-accent text-ink-400 uppercase tracking-wider">Section {idx + 1}</span>
                      <h2 className="font-accent font-semibold text-lg text-ink-800">{s.title}</h2>
                    </div>
                  </div>
                  <div className="text-sm text-ink-600 leading-relaxed">
                    {s.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom wave + CTA */}
      <section className="relative">
        <div className="bg-sand-50">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-10 md:h-16">
            <path
              d="M0,40 C200,0 400,80 600,40 C800,0 1000,80 1200,40 L1200,80 L0,80 Z"
              fill="#2A2520"
            />
          </svg>
        </div>
        <div className="bg-ink-900 py-12 text-center">
          <p className="text-ink-400 text-sm mb-4">Also check out our</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/privacy" className="inline-flex items-center justify-center gap-2 bg-transparent text-terra-400 px-5 py-2.5 rounded-xl font-accent font-semibold text-xs border-2 border-ink-600 hover:bg-terra-500 hover:text-white hover:border-terra-500 transition-all duration-200">Privacy Policy</Link>
            <Link to="/cookies" className="inline-flex items-center justify-center gap-2 bg-transparent text-terra-400 px-5 py-2.5 rounded-xl font-accent font-semibold text-xs border-2 border-ink-600 hover:bg-terra-500 hover:text-white hover:border-terra-500 transition-all duration-200">Cookie Policy</Link>
          </div>
        </div>
      </section>
    </>
  )
}
