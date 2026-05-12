import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

export default function CityCarousel({ cities }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate cities every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [cities.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cities.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length)
  }

  const currentCity = cities[currentIndex]

  return (
    <div className="relative">
      {/* Main carousel container */}
      <div className="relative overflow-hidden">
        <Link
          to={`/city?loc=${currentCity.name}`}
          className="block group"
        >
          <div className="bg-gradient-to-br from-terra-50 to-forest-50 rounded-2xl p-8 sm:p-12 md:p-16 text-center min-h-80 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500"
          >
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-terra-100 rounded-full opacity-30" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-forest-100 rounded-full opacity-30" />

            {/* Content */}
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl mb-4">{currentCity.flag}</div>
              <h3 className="font-editorial text-3xl md:text-4xl text-ink-900 mb-2 group-hover:text-terra-600 transition-colors">
                {currentCity.name}
              </h3>
              <p className="text-lg text-ink-600 mb-4">{currentCity.country}</p>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-terra-200 group-hover:border-terra-400 transition-colors">
                <span className="font-accent font-semibold text-terra-600">
                  {currentCity.listingCount}
                </span>
                <span className="text-sm text-ink-500">listings</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md hover:shadow-lg hover:bg-terra-50 transition-all"
      >
        <HiOutlineChevronLeft className="text-xl text-ink-900" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md hover:shadow-lg hover:bg-terra-50 transition-all"
      >
        <HiOutlineChevronRight className="text-xl text-ink-900" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {cities.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-terra-500 w-8'
                : 'bg-ink-300 hover:bg-ink-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
