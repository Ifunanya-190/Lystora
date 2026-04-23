import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineSearch, HiOutlineLocationMarker } from 'react-icons/hi'

export default function SearchBar({ size = 'lg', className = '' }) {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (location) params.set('loc', location)
    navigate(`/explore?${params.toString()}`)
  }

  if (size === 'sm') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <div className="relative flex-1">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search businesses, services..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-ink-200 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-all"
          />
        </div>
        <button type="submit" className="btn-primary text-xs py-2.5 px-5">
          Search
        </button>
      </form>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl p-2 shadow-lg border border-ink-100 ${className}`}
    >
      <div className="flex flex-col sm:flex-row gap-2">
        {/* Search input */}
        <div className="relative flex-1">
          <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 text-lg" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search businesses, professionals, resources..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl text-ink-800 text-sm placeholder:text-ink-400 focus:outline-none bg-ink-50/50 focus:bg-white transition-colors"
          />
        </div>

        {/* Location input */}
        <div className="relative flex-1 sm:max-w-[240px]">
          <HiOutlineLocationMarker className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 text-lg" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, Country..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl text-ink-800 text-sm placeholder:text-ink-400 focus:outline-none bg-ink-50/50 focus:bg-white transition-colors"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-primary py-3.5 px-8 rounded-xl text-sm"
        >
          Search
        </button>
      </div>
    </form>
  )
}
