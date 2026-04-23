import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineGlobe, HiOutlineMail, HiOutlineLockClosed, HiOutlineExclamationCircle } from 'react-icons/hi'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error: authError } = await signIn(email, password)

    if (authError) {
      setError(authError.message)
      setLoading(false)
    } else {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sand-50 flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
          <span className="w-10 h-10 rounded-xl bg-terra-500 flex items-center justify-center shadow-md">
            <HiOutlineGlobe className="text-white text-2xl" />
          </span>
          <span className="font-heading text-3xl text-ink-900 tracking-tight">
            Lystora
          </span>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-ink-100 p-8">
          <div className="text-center mb-6">
            <h1 className="font-heading text-2xl text-ink-900 mb-1">Welcome back</h1>
            <p className="text-ink-500 text-sm">Sign in to manage your listings and reviews</p>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2">
              <HiOutlineExclamationCircle className="text-red-500 text-lg flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">
                Email address
              </label>
              <div className="relative">
                <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 text-lg" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-ink-200 text-sm text-ink-900
                    placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-terra-300 focus:border-terra-400
                    transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 text-lg" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-ink-200 text-sm text-ink-900
                    placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-terra-300 focus:border-terra-400
                    transition-colors"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-terra-500 text-white text-sm font-accent font-semibold
                hover:bg-terra-600 focus:outline-none focus:ring-2 focus:ring-terra-400 focus:ring-offset-2
                transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          {/* Footer link */}
          <p className="text-center text-sm text-ink-500 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-terra-600 font-medium hover:text-terra-700 transition-colors">
              Create one
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <p className="text-center text-xs text-ink-400 mt-6">
          <Link to="/" className="hover:text-ink-600 transition-colors">
            ← Back to Lystora
          </Link>
        </p>
      </div>
    </div>
  )
}
