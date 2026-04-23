import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiX, HiOutlineGlobe, HiOutlineUserCircle, HiOutlineLogout } from 'react-icons/hi'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { label: 'Explore', path: '/explore' },
  { label: 'Categories', path: '/categories' },
  { label: 'Resources', path: '/resources' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, profile, signOut } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-ink-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-lg bg-terra-500 flex items-center justify-center">
            <HiOutlineGlobe className="text-white text-xl" />
          </span>
          <span className="font-heading text-2xl text-ink-900 tracking-tight">
            Lystora
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-accent font-medium transition-colors duration-200 ${
                location.pathname === link.path || location.pathname.startsWith(link.path + '/')
                  ? 'text-terra-600 bg-terra-50'
                  : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link
                to="/submit-listing"
                className="btn-secondary text-xs py-2 px-4"
              >
                List Your Business
              </Link>
              <div className="flex items-center gap-2 pl-2 border-l border-ink-200">
                <HiOutlineUserCircle className="text-xl text-ink-500" />
                <span className="text-sm font-accent font-medium text-ink-700 max-w-[120px] truncate">
                  {profile?.full_name || user.email?.split('@')[0]}
                </span>
                <button
                  onClick={async () => { await signOut(); navigate('/') }}
                  className="p-1.5 rounded-lg text-ink-400 hover:text-terra-600 hover:bg-terra-50 transition-colors"
                  title="Sign out"
                >
                  <HiOutlineLogout className="text-lg" />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn-secondary text-xs py-2 px-4"
              >
                Sign In
              </Link>
              <Link to="/signup" className="btn-primary text-xs py-2 px-4">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-ink-50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <HiX className="text-2xl text-ink-700" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl text-ink-700" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-ink-100 animate-fade-in">
          <div className="container-wide py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-accent font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-terra-600 bg-terra-50'
                    : 'text-ink-700 hover:bg-ink-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-ink-100 flex flex-col gap-2">
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2">
                    <HiOutlineUserCircle className="text-xl text-ink-500" />
                    <span className="text-sm font-accent font-medium text-ink-700 truncate">
                      {profile?.full_name || user.email?.split('@')[0]}
                    </span>
                  </div>
                  <Link to="/submit-listing" className="btn-secondary text-xs py-2.5 text-center">
                    List Your Business
                  </Link>
                  <button
                    onClick={async () => { await signOut(); navigate('/') }}
                    className="btn-primary text-xs py-2.5 text-center bg-ink-700 hover:bg-ink-800"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn-secondary text-xs py-2.5 text-center">
                    Sign In
                  </Link>
                  <Link to="/signup" className="btn-primary text-xs py-2.5 text-center">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
