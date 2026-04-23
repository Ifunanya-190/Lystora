import {
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlineScale,
  HiOutlineBriefcase,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineDesktopComputer,
  HiOutlineCog,
  HiOutlineLocationMarker,
  HiOutlineUserCircle,
} from 'react-icons/hi'

// Placeholder images — replace with real data from backend later
const PLACEHOLDER = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
const PLACEHOLDER_2 = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop'
const PLACEHOLDER_3 = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
const PLACEHOLDER_4 = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
const PLACEHOLDER_5 = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop'
const PLACEHOLDER_6 = 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop'

export const categories = [
  { title: 'Health & Wellness', slug: 'health', count: '2,340', icon: <HiOutlineHeart />, color: 'forest', description: 'Find verified clinics, doctors, pharmacies, and wellness centres near you.' },
  { title: 'Education', slug: 'education', count: '1,870', icon: <HiOutlineAcademicCap />, color: 'terra', description: 'Schools, universities, tutoring services, scholarships, and online courses.' },
  { title: 'Finance & Banking', slug: 'finance', count: '1,450', icon: <HiOutlineCurrencyDollar />, color: 'sand', description: 'Banks, fintech, insurance, loans, investment advisors, and tax consultants.' },
  { title: 'Legal Services', slug: 'legal', count: '980', icon: <HiOutlineScale />, color: 'ink', description: 'Lawyers, notaries, business registration, immigration, and contract help.' },
  { title: 'Jobs & Careers', slug: 'jobs', count: '3,200', icon: <HiOutlineBriefcase />, color: 'terra', description: 'Job boards, recruiters, HR consultants, career coaches, and freelance gigs.' },
  { title: 'Real Estate', slug: 'real-estate', count: '2,100', icon: <HiOutlineHome />, color: 'forest', description: 'Property listings, agents, property management, and relocation services.' },
  { title: 'Food & Dining', slug: 'food', count: '4,500', icon: <HiOutlineShoppingBag />, color: 'terra', description: 'Restaurants, cafés, catering, food delivery, and street food guides.' },
  { title: 'Technology', slug: 'technology', count: '1,680', icon: <HiOutlineDesktopComputer />, color: 'sand', description: 'IT services, software companies, startups, and tech training centres.' },
  { title: 'Local Services', slug: 'local-services', count: '5,100', icon: <HiOutlineCog />, color: 'ink', description: 'Plumbers, electricians, cleaning, logistics, and everything in between.' },
]

export const featuredListings = [
  {
    id: 'greenleaf-clinic',
    name: 'Greenleaf Medical Centre',
    category: 'Health & Wellness',
    location: 'Lagos, Nigeria',
    rating: 4.8,
    reviewCount: 124,
    image: PLACEHOLDER_4,
    verified: true,
    featured: true,
  },
  {
    id: 'nova-academy',
    name: 'Nova International Academy',
    category: 'Education',
    location: 'London, UK',
    rating: 4.6,
    reviewCount: 89,
    image: PLACEHOLDER_5,
    verified: true,
    featured: true,
  },
  {
    id: 'vertex-legal',
    name: 'Vertex Legal Partners',
    category: 'Legal Services',
    location: 'São Paulo, Brazil',
    rating: 4.9,
    reviewCount: 56,
    image: PLACEHOLDER,
    verified: true,
    featured: false,
  },
  {
    id: 'sahara-fintech',
    name: 'Sahara Fintech Solutions',
    category: 'Finance & Banking',
    location: 'Dubai, UAE',
    rating: 4.7,
    reviewCount: 203,
    image: PLACEHOLDER_2,
    verified: true,
    featured: true,
  },
  {
    id: 'urban-bites',
    name: 'Urban Bites Restaurant',
    category: 'Food & Dining',
    location: 'Nairobi, Kenya',
    rating: 4.5,
    reviewCount: 312,
    image: PLACEHOLDER_3,
    verified: false,
    featured: false,
  },
  {
    id: 'techbridge-hub',
    name: 'TechBridge Innovation Hub',
    category: 'Technology',
    location: 'Bangalore, India',
    rating: 4.8,
    reviewCount: 178,
    image: PLACEHOLDER_6,
    verified: true,
    featured: true,
  },
]

export const cities = [
  { name: 'Lagos', country: 'Nigeria', listingCount: '8,400+', flag: <HiOutlineLocationMarker /> },
  { name: 'London', country: 'United Kingdom', listingCount: '12,300+', flag: <HiOutlineLocationMarker /> },
  { name: 'Nairobi', country: 'Kenya', listingCount: '5,100+', flag: <HiOutlineLocationMarker /> },
  { name: 'Dubai', country: 'UAE', listingCount: '6,800+', flag: <HiOutlineLocationMarker /> },
  { name: 'São Paulo', country: 'Brazil', listingCount: '9,200+', flag: <HiOutlineLocationMarker /> },
  { name: 'Bangalore', country: 'India', listingCount: '11,500+', flag: <HiOutlineLocationMarker /> },
  { name: 'Toronto', country: 'Canada', listingCount: '7,600+', flag: <HiOutlineLocationMarker /> },
  { name: 'Singapore', country: 'Singapore', listingCount: '4,900+', flag: <HiOutlineLocationMarker /> },
]

export const articles = [
  {
    id: 'how-to-register-business-nigeria',
    title: 'How to Register a Business in Nigeria: Complete 2026 Guide',
    excerpt: 'A step-by-step walkthrough covering CAC registration, tax IDs, permits, and everything you need to legally start your business.',
    category: 'Legal',
    readTime: '8 min read',
    date: 'Mar 28, 2026',
    image: PLACEHOLDER,
  },
  {
    id: 'top-fintech-apps-africa',
    title: 'The 15 Best Fintech Apps Transforming Africa Right Now',
    excerpt: 'From mobile money to investment platforms — discover the apps solving real financial problems across the continent.',
    category: 'Finance',
    readTime: '6 min read',
    date: 'Mar 22, 2026',
    image: PLACEHOLDER_2,
  },
  {
    id: 'remote-work-cities-2026',
    title: 'Best Cities for Remote Workers in 2026: A Global Ranking',
    excerpt: 'We ranked 50 cities worldwide based on internet speed, cost of living, safety, and coworking spaces.',
    category: 'Jobs & Careers',
    readTime: '10 min read',
    date: 'Mar 15, 2026',
    image: PLACEHOLDER_5,
  },
  {
    id: 'scholarship-guide-international',
    title: 'International Scholarships You Can Apply for Right Now',
    excerpt: 'A curated list of fully-funded scholarships for students from developing countries, updated monthly.',
    category: 'Education',
    readTime: '7 min read',
    date: 'Mar 10, 2026',
    image: PLACEHOLDER_6,
  },
]

export const testimonials = [
  {
    name: 'Adaeze Okonkwo',
    role: 'Business Owner, Lagos',
    text: 'Lystora helped my catering business get found by international clients. The first month alone brought 20+ new inquiries.',
    avatar: <HiOutlineUserCircle />,
  },
  {
    name: 'James Oduya',
    role: 'Software Developer, Nairobi',
    text: "I found my current job through Lystora's listings. The platform is clean, fast, and actually useful — unlike most directories.",
    avatar: <HiOutlineUserCircle />,
  },
  {
    name: 'Maria Santos',
    role: 'Legal Consultant, São Paulo',
    text: 'As a lawyer, being listed on Lystora gave me credibility. Clients trust the verified badge and the review system.',
    avatar: <HiOutlineUserCircle />,
  },
]
