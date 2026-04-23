import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HiOutlineInformationCircle,
  HiOutlineChartBar,
  HiOutlineAdjustments,
  HiOutlineSpeakerphone,
  HiOutlineCog,
  HiOutlineGlobe,
  HiOutlineRefresh,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineExclamation,
} from 'react-icons/hi'

const cookieTypes = [
  {
    icon: <HiOutlineLockClosed className="text-xl" />,
    color: 'forest',
    name: 'Essential',
    required: true,
    desc: 'Required for the Platform to function. These handle authentication, security, and basic functionality. They cannot be disabled.',
  },
  {
    icon: <HiOutlineChartBar className="text-xl" />,
    color: 'terra',
    name: 'Analytics',
    required: false,
    desc: 'Help us understand how visitors use Lystora — which pages are popular, how people navigate, and where they drop off. This data is anonymised.',
  },
  {
    icon: <HiOutlineAdjustments className="text-xl" />,
    color: 'ink',
    name: 'Preference',
    required: false,
    desc: 'Remember your settings like language preference, search filters, and display preferences so you don\'t have to set them each visit.',
  },
  {
    icon: <HiOutlineSpeakerphone className="text-xl" />,
    color: 'terra',
    name: 'Marketing',
    required: false,
    desc: 'Used to deliver relevant content and measure the effectiveness of our campaigns. These may be set by third-party partners. You can opt out at any time.',
  },
]

const sections = [
  {
    id: 'what-are-cookies',
    icon: <HiOutlineInformationCircle />,
    title: 'What Are Cookies',
    content: (
      <div className="bg-white border border-ink-100 rounded-xl p-5">
        <p className="text-sm text-ink-600 leading-relaxed">
          Cookies are small text files stored on your device when you visit a website.
          They help the site remember your preferences and improve your experience.
          Lystora uses cookies and similar technologies to operate effectively.
        </p>
      </div>
    ),
  },
  {
    id: 'cookies-we-use',
    icon: <HiOutlineChartBar />,
    title: 'Cookies We Use',
    content: null, // rendered separately with the card grid
  },
  {
    id: 'managing',
    icon: <HiOutlineCog />,
    title: 'Managing Cookies',
    content: (
      <>
        <p className="text-sm text-ink-600 mb-4">Most browsers let you control cookies through their settings. You can:</p>
        <div className="space-y-2 mb-4">
          {[
            'View and delete existing cookies.',
            'Block all cookies or only third-party cookies.',
            'Set your browser to notify you when a cookie is set.',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-lg bg-white border border-ink-100">
              <span className="text-forest-500 mt-0.5 font-bold">{i + 1}</span>
              <span className="text-sm text-ink-600">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-terra-50 border border-terra-200 rounded-xl p-4">
          <p className="text-xs text-terra-700 leading-relaxed flex items-center gap-2">
            <HiOutlineExclamation className="text-base flex-shrink-0" /> Blocking essential cookies may prevent parts of Lystora from working correctly.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'third-party',
    icon: <HiOutlineGlobe />,
    title: 'Third-Party Cookies',
    content: (
      <div className="bg-white border border-ink-100 rounded-xl p-5">
        <p className="text-sm text-ink-600 leading-relaxed">
          Some cookies are placed by services we use, such as analytics providers.
          These third parties have their own privacy policies. We do not control
          the cookies they set, but we only work with partners who meet our privacy standards.
        </p>
      </div>
    ),
  },
  {
    id: 'updates',
    icon: <HiOutlineRefresh />,
    title: 'Updates to This Policy',
    content: (
      <div className="bg-white border border-ink-100 rounded-xl p-5">
        <p className="text-sm text-ink-600 leading-relaxed">
          We may update this cookie policy as our practices or regulations change.
          The "last updated" date at the top reflects the most recent revision.
        </p>
      </div>
    ),
  },
  {
    id: 'contact',
    icon: <HiOutlineMail />,
    title: 'Questions?',
    content: (
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 card-elevated p-5 text-center">
          <p className="text-sm text-ink-600 mb-3">Email us directly</p>
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

export default function Cookies() {
  const [activeSection, setActiveSection] = useState('what-are-cookies')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-cream via-white to-terra-50">
        <div className="absolute top-20 right-0 w-72 h-72 bg-terra-100 rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-forest-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-3 block">
              Legal
            </span>
            <h1 className="text-editorial text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.1] mb-4">
              Cookie{' '}
              <span className="italic text-terra-500">Policy</span>
            </h1>
            <p className="text-ink-500 text-base md:text-lg leading-relaxed max-w-lg mb-3">
              How we use cookies to keep Lystora running smoothly — and how you stay in control.
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

            {/* Main */}
            <div className="lg:col-span-3 space-y-10">
              {sections.map((s, idx) => (
                <div key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-terra-50 flex items-center justify-center text-terra-500 text-lg">
                      {s.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-accent text-ink-400 uppercase tracking-wider">Section {idx + 1}</span>
                      <h2 className="font-accent font-semibold text-lg text-ink-800">{s.title}</h2>
                    </div>
                  </div>

                  {s.id === 'cookies-we-use' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cookieTypes.map((c) => (
                        <div key={c.name} className="relative overflow-hidden bg-white border border-ink-100 rounded-xl p-5">
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-9 h-9 rounded-lg bg-ink-50 flex items-center justify-center text-ink-600">
                              {c.icon}
                            </div>
                            {c.required && (
                              <span className="text-[10px] font-accent font-semibold bg-forest-100 text-forest-700 px-2 py-0.5 rounded-full">
                                Required
                              </span>
                            )}
                          </div>
                          <h3 className="font-accent font-semibold text-sm text-ink-800 mb-1">{c.name}</h3>
                          <p className="text-xs text-ink-500 leading-relaxed">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm text-ink-600 leading-relaxed">
                      {s.content}
                    </div>
                  )}
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
            <Link to="/terms" className="inline-flex items-center justify-center gap-2 bg-transparent text-terra-400 px-5 py-2.5 rounded-xl font-accent font-semibold text-xs border-2 border-ink-600 hover:bg-terra-500 hover:text-white hover:border-terra-500 transition-all duration-200">Terms of Service</Link>
          </div>
        </div>
      </section>
    </>
  )
}
