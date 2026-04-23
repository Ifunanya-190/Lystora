import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineDatabase,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
  HiOutlineClock,
  HiOutlineMail,
} from 'react-icons/hi'

const sections = [
  {
    id: 'collect',
    icon: <HiOutlineEye />,
    title: 'Information We Collect',
    content: (
      <>
        <p className="mb-4">When you use Lystora, we may collect the following types of information:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Account information', desc: 'Name, email address, and password when you create an account.' },
            { label: 'Business listing data', desc: 'Business name, category, location, contact details, description, and images you submit.' },
            { label: 'Usage data', desc: 'Pages visited, search queries, clicks, and time spent on the platform.' },
            { label: 'Device data', desc: 'Browser type, operating system, IP address, and device identifiers.' },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-xl bg-white border border-ink-100">
              <h4 className="font-accent font-semibold text-xs text-ink-800 mb-1">{item.label}</h4>
              <p className="text-xs text-ink-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'use',
    icon: <HiOutlineDatabase />,
    title: 'How We Use Your Information',
    content: (
      <div className="space-y-3">
        {[
          'To display and manage your business listings on the platform.',
          'To process inquiries and facilitate communication between users and businesses.',
          'To improve our services, personalise your experience, and develop new features.',
          'To send service-related communications and, with your consent, marketing emails.',
          'To detect and prevent fraud, abuse, and security threats.',
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-ink-100">
            <span className="w-6 h-6 rounded-full bg-terra-50 flex items-center justify-center text-terra-600 text-[10px] font-bold flex-shrink-0 mt-0.5">
              {i + 1}
            </span>
            <p className="text-sm text-ink-600">{item}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'sharing',
    icon: <HiOutlineUserCircle />,
    title: 'Information Sharing',
    content: (
      <>
        <div className="bg-forest-50 border border-forest-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-forest-800 font-medium">We do not sell your personal information. Ever.</p>
        </div>
        <p className="mb-4 text-sm text-ink-600">We may share data with:</p>
        <div className="space-y-3">
          {[
            { label: 'Service providers', desc: 'Hosting, analytics, and payment processors that help us operate the platform.' },
            { label: 'Business contacts', desc: 'When you send an inquiry, the business receives your name, email, and message.' },
            { label: 'Legal compliance', desc: 'When required by law, regulation, or valid legal process.' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terra-400 mt-2 flex-shrink-0" />
              <div>
                <span className="text-sm font-semibold text-ink-800">{item.label}: </span>
                <span className="text-sm text-ink-600">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'retention',
    icon: <HiOutlineClock />,
    title: 'Data Retention',
    content: (
      <div className="bg-white border border-ink-100 rounded-xl p-5">
        <p className="text-sm text-ink-600 leading-relaxed">
          We retain your data for as long as your account is active or as needed to provide services.
          Business listings remain visible until you request removal. You can delete your account
          and associated data at any time by contacting us.
        </p>
      </div>
    ),
  },
  {
    id: 'rights',
    icon: <HiOutlineShieldCheck />,
    title: 'Your Rights',
    content: (
      <>
        <p className="text-sm text-ink-600 mb-4">Depending on your location, you may have the right to:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Access the personal data we hold about you',
            'Request correction of inaccurate data',
            'Request deletion of your data',
            'Opt out of marketing communications at any time',
            'Port your data to another service',
          ].map((right) => (
            <div key={right} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-ink-100">
              <span className="text-forest-500 text-sm">✓</span>
              <span className="text-sm text-ink-600">{right}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'security',
    icon: <HiOutlineLockClosed />,
    title: 'Security',
    content: (
      <div className="relative overflow-hidden rounded-xl bg-ink-900 p-6">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-terra-500/10 rounded-full blur-2xl" />
        <p className="text-sm text-ink-300 leading-relaxed relative z-10">
          We use industry-standard security measures including encryption, access controls,
          and regular audits to protect your data. However, no system is 100% secure and we
          cannot guarantee absolute security.
        </p>
      </div>
    ),
  },
  {
    id: 'contact',
    icon: <HiOutlineMail />,
    title: 'Contact Us',
    content: (
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 card-elevated p-5 text-center">
          <p className="text-sm text-ink-600 mb-3">Questions about your data?</p>
          <span className="text-terra-500 font-accent font-semibold text-sm">privacy@lystora.com</span>
        </div>
        <div className="flex-1 card-elevated p-5 text-center">
          <p className="text-sm text-ink-600 mb-3">Prefer a form?</p>
          <Link to="/contact" className="btn-primary text-xs py-2 px-5">Contact Page</Link>
        </div>
      </div>
    ),
  },
]

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('collect')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-cream via-white to-terra-50">
        <div className="absolute top-20 right-0 w-80 h-80 bg-terra-100 rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-forest-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-3 block">
              Legal
            </span>
            <h1 className="text-editorial text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.1] mb-4">
              Privacy{' '}
              <span className="italic text-terra-500">Policy</span>
            </h1>
            <p className="text-ink-500 text-base md:text-lg leading-relaxed max-w-lg mb-3">
              Your data belongs to you. Here's exactly how we handle it — no legal fog, just clarity.
            </p>
            <p className="text-xs text-ink-400 font-accent">Last updated: April 1, 2026</p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-10 md:h-16">
            <path
              d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z"
              fill="#F5F0EB"
            />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sticky sidebar nav */}
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
                        ? 'bg-terra-500 text-white shadow-sm'
                        : 'text-ink-600 hover:bg-white hover:text-ink-800'
                    }`}
                  >
                    <span className="text-base">{s.icon}</span>
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3 space-y-10">
              {sections.map((s, idx) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-terra-50 flex items-center justify-center text-terra-600 text-lg">
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
            <Link to="/terms" className="inline-flex items-center justify-center gap-2 bg-transparent text-terra-400 px-5 py-2.5 rounded-xl font-accent font-semibold text-xs border-2 border-ink-600 hover:bg-terra-500 hover:text-white hover:border-terra-500 transition-all duration-200">Terms of Service</Link>
            <Link to="/cookies" className="inline-flex items-center justify-center gap-2 bg-transparent text-terra-400 px-5 py-2.5 rounded-xl font-accent font-semibold text-xs border-2 border-ink-600 hover:bg-terra-500 hover:text-white hover:border-terra-500 transition-all duration-200">Cookie Policy</Link>
          </div>
        </div>
      </section>
    </>
  )
}
