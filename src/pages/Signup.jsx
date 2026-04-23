import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineGlobe, HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlineExclamationCircle, HiOutlineCheckCircle } from 'react-icons/hi'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const navigate = useNavigate()
  const { signUp } = useAuth()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    // Validate
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)

    const { data, error: authError } = await signUp(email, password, fullName)

    if (authError) {
      setError(authError.message)
      setLoading(false)
    } else if (data?.user?.identities?.length === 0) {
      // User already exists
      setError('An account with this email already exists')
      setLoading(false)
    } else {
      // Supabase may require email confirmation
      // If email confirmation is OFF, the user is logged in immediately
      setSuccess(true)
      setLoading(false)
      // Redirect after a short delay
      setTimeout(() => navigate('/'), 2000)
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
            <h1 className="font-heading text-2xl text-ink-900 mb-1">Create your account</h1>
            <p className="text-ink-500 text-sm">Join Lystora to list businesses and leave reviews</p>
          </div>

          {/* Success */}
          {success && (
            <div className="mb-4 p-3 rounded-lg bg-forest-50 border border-forest-200 flex items-start gap-2">
              <HiOutlineCheckCircle className="text-forest-600 text-lg flex-shrink-0 mt-0.5" />
              <p className="text-forest-700 text-sm">Account created! Redirecting you now…</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2">
              <HiOutlineExclamationCircle className="text-red-500 text-lg flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {!success && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">
                  Full name
                </label>
                <div className="relative">
                  <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 text-lg" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="Your full name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-ink-200 text-sm text-ink-900
                      placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-terra-300 focus:border-terra-400
                      transition-colors"
                  />
                </div>
              </div>

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
                    placeholder="At least 6 characters"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-ink-200 text-sm text-ink-900
                      placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-terra-300 focus:border-terra-400
                      transition-colors"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">
                  Confirm password
                </label>
                <div className="relative">
                  <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 text-lg" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Re-enter your password"
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
                {loading ? 'Creating account…' : 'Create Account'}
              </button>
            </form>
          )}

          {/* Footer link */}
          <p className="text-center text-sm text-ink-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-terra-600 font-medium hover:text-terra-700 transition-colors">
              Sign in
            </Link>
          </p>
        </div>

        {/* Terms note */}
        <p className="text-center text-xs text-ink-400 mt-6 leading-relaxed">
          By creating an account, you agree to our{' '}
          <Link to="/terms" className="underline hover:text-ink-600">Terms of Service</Link>
          {' '}and{' '}
          <Link to="/privacy" className="underline hover:text-ink-600">Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
}
