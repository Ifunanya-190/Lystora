import { useState, useEffect } from 'react'

export default function TableOfContents({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hidden lg:block fixed left-0 top-32 w-64 h-fit">
      <div className="sticky top-32 bg-white rounded-lg border border-ink-100 p-6 shadow-sm">
        <h3 className="text-xs font-accent font-semibold tracking-widest uppercase text-ink-600 mb-4">
          On this page
        </h3>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block text-sm transition-all duration-200 py-1 px-3 rounded-lg w-full text-left ${
                activeSection === section.id
                  ? 'bg-terra-50 text-terra-600 font-medium border-l-2 border-terra-500'
                  : 'text-ink-600 hover:text-terra-600 hover:bg-terra-50'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
