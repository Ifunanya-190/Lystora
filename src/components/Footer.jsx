import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineGlobe, HiOutlineCheckCircle } from 'react-icons/hi'

const footerSections = [
  {
    title: 'Discover',
    links: [
      { label: 'Explore All', path: '/explore' },
      { label: 'Health & Wellness', path: '/category/health' },
      { label: 'Education', path: '/category/education' },
      { label: 'Finance', path: '/category/finance' },
      { label: 'Legal Services', path: '/category/legal' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Real Estate', path: '/category/real-estate' },
      { label: 'Jobs & Careers', path: '/category/jobs' },
      { label: 'Food & Dining', path: '/category/food' },
      { label: 'Local Services', path: '/category/local-services' },
      { label: 'Technology', path: '/category/technology' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Lystora', path: '/about' },
      { label: 'Resources', path: '/resources' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
      { label: 'Partner With Us', path: '/partner' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    // Reset back to form after 4 seconds
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <footer className="bg-ink-900 text-ink-300 mt-auto">
      {/* Top wave */}
      <div className="h-16 bg-cream">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,00,321.39,56.44Z"
            fill="#2A2520"
          />
        </svg>
      </div>

      <div className="container-wide pt-12 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-lg bg-terra-500 flex items-center justify-center">
                <HiOutlineGlobe className="text-white text-xl" />
              </span>
              <span className="font-heading text-2xl text-cream tracking-tight">
                Lystora
              </span>
            </Link>
            <p className="text-ink-400 text-sm leading-relaxed max-w-sm mb-6">
              The global directory connecting you with verified businesses, professionals,
              and resources. From Lagos to London, São Paulo to Singapore.
            </p>
            {/* Newsletter */}
            {subscribed ? (
              <div className="flex items-center gap-2 text-forest-400 text-sm">
                <HiOutlineCheckCircle className="text-lg" />
                <span className="font-accent font-medium">Subscribed! Check your inbox.</span>
              </div>
            ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email for updates"
                required
                className="flex-1 pl-4 pr-3 py-2.5 rounded-xl bg-ink-800 border border-ink-700 text-cream text-sm placeholder:text-ink-500 focus:outline-none focus:border-terra-500 transition-colors"
              />
              <button type="submit" className="btn-warm text-xs py-2.5 px-5 rounded-xl">
                Subscribe
              </button>
            </form>
            )}
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-accent font-semibold text-cream text-sm mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-ink-400 hover:text-terra-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-ink-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} Lystora. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-ink-500 hover:text-ink-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-ink-500 hover:text-ink-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-xs text-ink-500 hover:text-ink-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
