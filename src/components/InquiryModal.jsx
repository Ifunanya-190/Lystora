import { useState } from 'react'
import { HiOutlineX, HiOutlineMail, HiOutlinePhone, HiOutlineCheckCircle } from 'react-icons/hi'

export default function InquiryModal({ isOpen, onClose, businessName }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const handleClose = () => {
    setSent(false)
    setForm({ name: '', email: '', phone: '', message: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md animate-fade-in-up overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-0">
          <h3 className="font-accent font-semibold text-lg text-ink-800">
            {sent ? 'Inquiry Sent!' : `Contact ${businessName}`}
          </h3>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg hover:bg-ink-50 transition-colors"
          >
            <HiOutlineX className="text-xl text-ink-500" />
          </button>
        </div>

        {sent ? (
          <div className="px-6 py-10 text-center">
            <HiOutlineCheckCircle className="text-5xl text-forest-500 mx-auto mb-3" />
            <p className="text-sm text-ink-600 mb-1">
              Your message has been sent to <strong>{businessName}</strong>.
            </p>
            <p className="text-xs text-ink-400">
              They typically respond within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="btn-primary text-xs py-2 px-6 mt-6"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <p className="text-xs text-ink-500">
              Send a message directly to this business. They'll receive your
              contact details and respond via email.
            </p>

            <div>
              <label className="text-xs font-accent font-medium text-ink-600 mb-1 block">
                Your Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={update('name')}
                placeholder="Full name"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1 block">
                  Email *
                </label>
                <div className="relative">
                  <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@email.com"
                    required
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-accent font-medium text-ink-600 mb-1 block">
                  Phone
                </label>
                <div className="relative">
                  <HiOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 text-sm" />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+234..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-accent font-medium text-ink-600 mb-1 block">
                Message *
              </label>
              <textarea
                value={form.message}
                onChange={update('message')}
                rows={3}
                placeholder={`Hi ${businessName}, I'd like to inquire about your services...`}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full text-xs py-3"
            >
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
