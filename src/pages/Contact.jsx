import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from 'react-icons/hi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    window.scrollTo(0, 0)
  }

  if (sent) {
    return (
      <div className="pt-32 pb-20">
        <div className="container-narrow text-center">
          <HiOutlineCheckCircle className="text-6xl text-forest-500 mx-auto mb-4" />
          <h1 className="text-editorial text-3xl md:text-4xl text-ink-900 mb-3">
            Message Sent!
          </h1>
          <p className="text-ink-500 text-sm max-w-md mx-auto mb-8">
            We've received your message and will get back to you within 1–2 business days.
          </p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-narrow">
        <span className="text-xs font-accent font-semibold tracking-widest uppercase text-terra-500 mb-2 block">
          Contact Us
        </span>
        <h1 className="text-editorial text-3xl md:text-4xl text-ink-900 mb-3">
          We'd love to hear from you
        </h1>
        <p className="text-ink-500 text-sm leading-relaxed mb-10 max-w-lg">
          Have a question, suggestion, or partnership inquiry? Drop us a line and our team will respond promptly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card-elevated p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">Subject *</label>
                <select
                  value={form.subject}
                  onChange={update('subject')}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="listing">Listing Issue</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1.5 block">Message *</label>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-primary text-xs py-3 px-8">
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-terra-50 flex items-center justify-center text-terra-600 flex-shrink-0">
                  <HiOutlineMail className="text-lg" />
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-sm text-ink-800 mb-0.5">Email</h3>
                  <p className="text-xs text-ink-500">hello@lystora.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-terra-50 flex items-center justify-center text-terra-600 flex-shrink-0">
                  <HiOutlineLocationMarker className="text-lg" />
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-sm text-ink-800 mb-0.5">Office</h3>
                  <p className="text-xs text-ink-500">Lagos, Nigeria (Remote-first team)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-terra-50 flex items-center justify-center text-terra-600 flex-shrink-0">
                  <HiOutlineClock className="text-lg" />
                </div>
                <div>
                  <h3 className="font-accent font-semibold text-sm text-ink-800 mb-0.5">Response Time</h3>
                  <p className="text-xs text-ink-500">1–2 business days</p>
                </div>
              </div>
            </div>

            <div className="bg-sand-50 border border-sand-200 rounded-xl p-5">
              <h4 className="font-accent font-semibold text-sm text-ink-800 mb-2">Looking for something else?</h4>
              <ul className="space-y-2 text-xs text-ink-600">
                <li>
                  <Link to="/submit-listing" className="text-terra-500 hover:text-terra-600 transition-colors font-medium">
                    Submit a business listing →
                  </Link>
                </li>
                <li>
                  <Link to="/partner" className="text-terra-500 hover:text-terra-600 transition-colors font-medium">
                    Become a partner →
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-terra-500 hover:text-terra-600 transition-colors font-medium">
                    View open positions →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
