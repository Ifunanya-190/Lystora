import { Routes, Route } from 'react-router-dom'
import { HiOutlineMap } from 'react-icons/hi'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Categories from './pages/Categories'
import CategoryPage from './pages/CategoryPage'
import ListingDetail from './pages/ListingDetail'
import Resources from './pages/Resources'
import ArticleDetail from './pages/ArticleDetail'
import About from './pages/About'
import SubmitListing from './pages/SubmitListing'
import CityPage from './pages/CityPage'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Partner from './pages/Partner'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<ArticleDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit-listing" element={<SubmitListing />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="pt-32 pb-20 text-center">
                <HiOutlineMap className="text-6xl text-ink-300 mx-auto mb-4" />
                <h1 className="text-editorial text-4xl text-ink-900 mb-2">
                  Page not found
                </h1>
                <p className="text-ink-500 text-sm">
                  The page you're looking for doesn't exist or has been moved.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
