import { createContext, useContext, useState, useCallback } from 'react'
import { featuredListings as sampleListings } from '../data/sampleData'

const ListingsContext = createContext()

// Random placeholder images for user-submitted listings
const PLACEHOLDERS = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop',
]

// Seed reviews for sample listings
const SEED_REVIEWS = {
  'greenleaf-clinic': [
    { name: 'Sarah M.', date: 'March 2026', rating: 5, text: 'Excellent service! Professional team and very responsive. Would definitely recommend to anyone looking for quality.' },
    { name: 'David K.', date: 'February 2026', rating: 4, text: 'Great experience overall. The process was smooth and the results exceeded my expectations. Minor delays in communication.' },
    { name: 'Amara O.', date: 'January 2026', rating: 5, text: 'Found them on Lystora and so glad I did. Top-notch quality and very fair pricing. A hidden gem.' },
  ],
  'nova-academy': [
    { name: 'Liam T.', date: 'March 2026', rating: 5, text: 'World-class curriculum and incredibly supportive staff. My daughter thrived here.' },
    { name: 'Priya S.', date: 'February 2026', rating: 4, text: 'Great programs but the admissions process is a bit slow. Worth the wait though.' },
  ],
  'vertex-legal': [
    { name: 'Ricardo F.', date: 'March 2026', rating: 5, text: 'Handled my business registration flawlessly. Very professional and transparent with fees.' },
  ],
  'sahara-fintech': [
    { name: 'Khalid A.', date: 'March 2026', rating: 5, text: 'Their mobile payment platform is game-changing for our business. Highly recommend.' },
    { name: 'Nina W.', date: 'January 2026', rating: 4, text: 'Great fintech solutions. Support response time could be faster but the product is solid.' },
  ],
  'urban-bites': [
    { name: 'Grace M.', date: 'March 2026', rating: 5, text: 'Best jollof in Nairobi, hands down. The ambiance is fantastic too.' },
    { name: 'Brian O.', date: 'February 2026', rating: 4, text: 'Delicious food and great service. Gets crowded on weekends so book ahead.' },
    { name: 'Wanjiku K.', date: 'January 2026', rating: 5, text: 'Our go-to spot for team lunches. Never disappoints!' },
  ],
  'techbridge-hub': [
    { name: 'Ravi P.', date: 'March 2026', rating: 5, text: 'An incredible innovation space. Met my co-founder here. The community is unmatched.' },
    { name: 'Deepa N.', date: 'February 2026', rating: 4, text: 'Great facilities and mentorship programs. Wish they had more evening events.' },
  ],
}

export function ListingsProvider({ children }) {
  const [userListings, setUserListings] = useState([])
  const [reviewsMap, setReviewsMap] = useState(SEED_REVIEWS)

  const addListing = useCallback((formData) => {
    const id = formData.businessName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const newListing = {
      id,
      name: formData.businessName,
      category: formData.category,
      categoryLabel: formData.categoryLabel || formData.category,
      location: `${formData.city}, ${formData.country}`,
      rating: 0,
      reviewCount: 0,
      image: formData.coverImage || PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)],
      verified: false,
      featured: false,
      description: formData.description,
      phone: formData.phone,
      email: formData.email,
      website: formData.website,
      hours: formData.hours,
      address: formData.address,
      services: formData.services || '',
      userSubmitted: true,
    }

    setUserListings((prev) => [newListing, ...prev])
    return newListing
  }, [])

  const getReviews = useCallback((listingId) => {
    return reviewsMap[listingId] || []
  }, [reviewsMap])

  const addReview = useCallback((listingId, review) => {
    setReviewsMap((prev) => ({
      ...prev,
      [listingId]: [review, ...(prev[listingId] || [])],
    }))
  }, [])

  const deleteReview = useCallback((listingId, reviewIndex) => {
    setReviewsMap((prev) => ({
      ...prev,
      [listingId]: (prev[listingId] || []).filter((_, i) => i !== reviewIndex),
    }))
  }, [])

  const updateReview = useCallback((listingId, reviewIndex, updatedReview) => {
    setReviewsMap((prev) => ({
      ...prev,
      [listingId]: (prev[listingId] || []).map((r, i) =>
        i === reviewIndex ? { ...r, ...updatedReview } : r
      ),
    }))
  }, [])

  // All listings = sample + user submitted
  const allListings = [...userListings, ...sampleListings]

  return (
    <ListingsContext.Provider value={{ allListings, userListings, addListing, getReviews, addReview, deleteReview, updateReview }}>
      {children}
    </ListingsContext.Provider>
  )
}

export function useListings() {
  const ctx = useContext(ListingsContext)
  if (!ctx) throw new Error('useListings must be used within ListingsProvider')
  return ctx
}
