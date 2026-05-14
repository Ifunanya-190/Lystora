import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

export default function CityCarousel({ cities }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto-rotate cities every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [cities.length, isAutoPlay])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cities.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length)
  }

  const handleDotClick = (index) => {
    setIsAutoPlay(false)
    setCurrentIndex(index)
  }

  // Get previous, current, and next cities for the three-panel view
  const getPrevIndex = () => (currentIndex === 0 ? cities.length - 1 : currentIndex - 1)
  const getNextIndex = () => (currentIndex + 1) % cities.length

  const prevCity = cities[getPrevIndex()]
  const currentCity = cities[currentIndex]
  const nextCity = cities[getNextIndex()]

  return (
    <div className="relative w-full">
      {/* Three-Panel Carousel Container */}
      <div className="relative overflow-hidden w-full">
        <div className="flex items-center justify-center gap-4 md:gap-6 px-4">
          {/* Previous City (Left) - Peek View */}
          <div className="hidden md:flex flex-shrink-0 w-1/4 opacity-50 transform scale-90 transition-all duration-500 hover:opacity-70 hover:scale-95">
            <div className="w-full bg-gradient-to-br from-ink-50 to-ink-100 rounded-2xl p-5 text-center border border-ink-200 shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl mb-3 filter drop-shadow">{prevCity.flag}</div>
              <h4 className="font-accent font-semibold text-sm text-ink-800 truncate">
                {prevCity.name}
              </h4>
              <p className="text-xs text-ink-600">{prevCity.country}</p>
            </div>
          </div>

          {/* Current City (Center) - Main Focus */}
          <Link
            to={`/city?loc=${currentCity.name}`}
            className="flex-1 md:flex-shrink-0 md:w-2/5 group transition-transform duration-500"
          >
            <div className="bg-gradient-to-br from-terra-50 via-white to-forest-50 rounded-2xl p-8 sm:p-12 text-center min-h-80 flex flex-col items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 transform group-hover:scale-105"
            >
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-terra-100 rounded-full opacity-30" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-forest-100 rounded-full opacity-30" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl mb-4 animate-bounce-slow">
                  {currentCity.flag}
                </div>
                <h3 className="font-editorial text-3xl md:text-4xl text-ink-900 mb-2 group-hover:text-terra-600 transition-colors">
                  {currentCity.name}
                </h3>
                <p className="text-lg text-ink-600 mb-4">{currentCity.country}</p>
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-terra-200 group-hover:border-terra-400 shadow-sm transition-all">
                  <span className="font-accent font-semibold text-terra-600">
                    {currentCity.listingCount}
                  </span>
                  <span className="text-sm text-ink-500">listings</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Next City (Right) - Peek View */}
          <div className="hidden md:flex flex-shrink-0 w-1/4 opacity-50 transform scale-90 transition-all duration-500 hover:opacity-70 hover:scale-95">
            <div className="w-full bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl p-5 text-center border border-forest-200 shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl mb-3 filter drop-shadow">{nextCity.flag}</div>
              <h4 className="font-accent font-semibold text-sm text-forest-800 truncate">
                {nextCity.name}
              </h4>
              <p className="text-xs text-forest-700">{nextCity.country}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-6 md:-ml-8 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-terra-50 transition-all duration-200 transform hover:scale-110"
        aria-label="Previous city"
      >
        <HiOutlineChevronLeft className="text-2xl text-ink-900" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-6 md:-mr-8 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-terra-50 transition-all duration-200 transform hover:scale-110"
        aria-label="Next city"
      >
        <HiOutlineChevronRight className="text-2xl text-ink-900" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {cities.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? 'bg-terra-500 w-8 h-2.5 rounded-full'
                : 'bg-ink-300 hover:bg-ink-400 w-2 h-2 rounded-full'
            }`}
            aria-label={`Go to city ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      {isAutoPlay && (
        <div className="text-center mt-4">
          <span className="text-xs text-ink-400">Auto-rotating • Click to control</span>
        </div>
      )}
    </div>
  )
}
