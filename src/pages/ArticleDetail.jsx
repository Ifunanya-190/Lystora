import { useParams, Link } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineClock, HiOutlineShare, HiOutlineDocumentText } from 'react-icons/hi'
import { articles } from '../data/sampleData'

// Full article content keyed by ID
const articleContent = {
  'how-to-register-business-nigeria': {
    sections: [
      {
        heading: 'Why Proper Registration Matters',
        body: `Registering your business in Nigeria isn't just a legal formality — it's the foundation of trust. Without registration, you can't open a corporate bank account, sign contracts, or bid for government projects. More importantly, customers and partners take registered businesses more seriously.\n\nThe Corporate Affairs Commission (CAC) is the body responsible for business registration in Nigeria. The process has been significantly simplified in recent years, and you can now complete most of it online.`,
      },
      {
        heading: 'Step 1: Choose Your Business Structure',
        body: `Before you register, decide what type of business entity suits you:\n\n• **Business Name** — Best for solo entrepreneurs and small operations. Simpler to register and maintain.\n• **Limited Liability Company (LLC)** — Best for businesses that want to raise investment, hire employees, or limit personal liability.\n• **Limited Liability Partnership (LLP)** — Best for professional firms like law practices or consultancies.\n\nMost small businesses start as a Business Name and upgrade to an LLC as they grow.`,
      },
      {
        heading: 'Step 2: Reserve Your Business Name',
        body: `Go to the CAC portal (pre.cac.gov.ng) and create an account. Then:\n\n1. Search to make sure your preferred name isn't already taken\n2. Submit two name options (in case your first choice is unavailable)\n3. Pay the name reservation fee (currently ₦500)\n4. Wait for approval — usually within 24 hours\n\nTip: Avoid generic names like "Best Services Ltd" — they're likely taken and harder to brand.`,
      },
      {
        heading: 'Step 3: Complete Registration',
        body: `Once your name is approved:\n\n1. Fill in the registration form with business details, address, and nature of business\n2. Upload required documents (valid ID, passport photo, signature)\n3. Pay the registration fee (₦10,000 for Business Name, ₦15,000+ for LLC)\n4. Submit and wait for your certificate\n\nThe entire process takes 3–7 business days if everything is in order.`,
      },
      {
        heading: 'Step 4: Get Your TIN (Tax Identification Number)',
        body: `After registration, you need a TIN from the Federal Inland Revenue Service (FIRS). This is required for:\n\n• Opening a corporate bank account\n• Filing tax returns\n• Invoicing clients properly\n\nYou can apply for a TIN at any FIRS office or through the JTB portal online. It's free.`,
      },
      {
        heading: 'What Comes Next',
        body: `With your CAC certificate and TIN, you can:\n\n• Open a business bank account at any Nigerian bank\n• Register for VAT if your turnover exceeds ₦25 million/year\n• Apply for sector-specific licenses (NAFDAC, SON, etc.)\n• List your business on Lystora to start getting discovered by customers worldwide\n\nDon't let paperwork paralyse you. The process is simpler than it looks — and the benefits of being a registered business far outweigh the cost.`,
      },
    ],
    relatedArticles: ['top-fintech-apps-africa', 'remote-work-cities-2026'],
  },
  'top-fintech-apps-africa': {
    sections: [
      {
        heading: 'The Fintech Revolution in Africa',
        body: `Africa's fintech sector has exploded. In 2025 alone, African fintech startups raised over $3.5 billion in funding. But beyond the headlines, these apps are solving real, everyday problems — from sending money across borders to saving for school fees.\n\nHere are the apps making the biggest impact right now.`,
      },
      {
        heading: 'Mobile Money & Payments',
        body: `• **OPay** — Nigeria's leading mobile money platform with over 35 million users. Pay bills, transfer money, and save.\n• **M-Pesa** — The OG of African fintech, still dominant in Kenya, Tanzania, and beyond. Over 50 million active users.\n• **Chipper Cash** — Free peer-to-peer payments across 7 African countries.\n• **Flutterwave** — Powers payments for businesses across Africa with global reach.\n• **Paystack** — Now part of Stripe, powering online payments for businesses of all sizes.`,
      },
      {
        heading: 'Savings & Investment',
        body: `• **PiggyVest** — Nigeria's most popular savings app. Lock money away, earn interest, invest in mutual funds.\n• **Cowrywise** — Automated savings and investment with as little as ₦100.\n• **Risevest** — Invest in US stocks, real estate, and fixed income from Nigeria.\n• **Bamboo** — Buy fractional shares of US stocks from your phone.`,
      },
      {
        heading: 'Lending & Credit',
        body: `• **Carbon** — Instant loans, bill payments, and a virtual dollar card.\n• **FairMoney** — AI-powered lending with instant approval.\n• **Branch** — Loans disbursed to your bank account in minutes.`,
      },
      {
        heading: 'What This Means for You',
        body: `Whether you're a business owner looking for payment solutions or an individual trying to save smarter, there's an app built specifically for your needs. The best part? Most of these apps were built by Africans, for Africans — they understand the realities of our markets.\n\nStart with one. See how it fits your life. Then explore more.`,
      },
    ],
    relatedArticles: ['how-to-register-business-nigeria', 'scholarship-guide-international'],
  },
  'remote-work-cities-2026': {
    sections: [
      {
        heading: 'How We Ranked These Cities',
        body: `We looked at 5 key factors across 50 cities worldwide:\n\n1. **Internet Speed** — Average download speed and reliability\n2. **Cost of Living** — Monthly expenses for a comfortable lifestyle\n3. **Safety** — Crime rates and political stability\n4. **Coworking Spaces** — Availability and quality of work environments\n5. **Community** — Size and activity of the remote work community\n\nEach city was scored out of 100. Here are the top performers.`,
      },
      {
        heading: 'Top 5 Cities for Remote Workers',
        body: `**1. Lisbon, Portugal (Score: 92)**\nAffordable by European standards, incredible food, strong expat community, and reliable 200+ Mbps internet.\n\n**2. Bali, Indonesia (Score: 89)**\nThe OG digital nomad hub. Low cost of living, beautiful scenery, and coworking spaces everywhere. Internet has improved dramatically.\n\n**3. Medellín, Colombia (Score: 87)**\nPerfect weather year-round, affordable living, and a booming startup scene. The Poblado neighbourhood is a remote work paradise.\n\n**4. Bangkok, Thailand (Score: 85)**\nIncredibly affordable, world-class food, excellent internet, and a well-established nomad community.\n\n**5. Lagos, Nigeria (Score: 82)**\nAfrica's tech capital is rising fast. Coworking spaces like Zone Tech Park, affordable local living, and the energy of a city that never stops. Internet can be inconsistent, but Starlink is changing the game.`,
      },
      {
        heading: 'Honourable Mentions',
        body: `• **Cape Town, South Africa** — Beautiful, creative, but load shedding remains an issue\n• **Tbilisi, Georgia** — Ultra affordable with 1-year visa-free for many nationalities\n• **Mexico City, Mexico** — Rich culture, great food, growing remote scene\n• **Dubai, UAE** — Expensive but offers official remote work visas and zero income tax\n• **Kigali, Rwanda** — Africa's cleanest city with growing tech infrastructure`,
      },
      {
        heading: 'Finding Your Fit',
        body: `The best city for you depends on your priorities. Want adventure? Try Bali or Medellín. Want stability? Lisbon or Dubai. Want to stay close to home and build local connections? Lagos or Nairobi.\n\nWherever you choose, Lystora can help you find coworking spaces, apartments, and local services in that city. Just search your destination.`,
      },
    ],
    relatedArticles: ['top-fintech-apps-africa', 'scholarship-guide-international'],
  },
  'scholarship-guide-international': {
    sections: [
      {
        heading: 'Why Scholarships Matter More Than Ever',
        body: `Education costs keep rising globally, but opportunities to study for free — or close to it — have never been more abundant. You just need to know where to look.\n\nThis guide focuses on fully-funded scholarships, meaning they cover tuition, living expenses, and often travel costs too.`,
      },
      {
        heading: 'Scholarships for Undergraduate Students',
        body: `• **MasterCard Foundation Scholars Program** — Full funding at top universities across Africa and worldwide. Covers tuition, accommodation, books, travel, and a stipend.\n• **NNPC/SNEPCo National University Scholarship** — For Nigerian students in engineering, geosciences, and related fields.\n• **Aga Khan Foundation Scholarship** — For students from developing countries studying at top institutions worldwide.\n• **Turkish Government Scholarships** — Fully-funded undergraduate programs in Turkey with monthly stipend.`,
      },
      {
        heading: 'Scholarships for Postgraduate Students',
        body: `• **Chevening Scholarships (UK)** — The UK government's global scholarship program. Fully funded Master's degree at any UK university.\n• **Commonwealth Scholarships** — For students from Commonwealth countries to study in the UK.\n• **DAAD Scholarships (Germany)** — Various programs for Master's and PhD studies in Germany.\n• **Fulbright Foreign Student Program (USA)** — Fully funded graduate study and research in the United States.\n• **Australia Awards** — Full scholarships for students from developing countries to study in Australia.`,
      },
      {
        heading: 'How to Improve Your Chances',
        body: `1. **Start early** — Most scholarships have deadlines 6–12 months before the program starts\n2. **Write a genuine personal statement** — Don't copy templates. Tell YOUR story.\n3. **Get strong references** — Ask people who know your work well, not just important-sounding names\n4. **Apply to multiple scholarships** — Don't put all your eggs in one basket\n5. **Show community impact** — Most scholarships want leaders who will give back\n\nScholarships aren't just for geniuses. They're for people who demonstrate drive, purpose, and potential. That could be you.`,
      },
    ],
    relatedArticles: ['how-to-register-business-nigeria', 'remote-work-cities-2026'],
  },
}

export default function ArticleDetail() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === id)
  const content = articleContent[id]

  if (!article || !content) {
    return (
      <div className="pt-32 pb-20 text-center">
        <HiOutlineDocumentText className="text-5xl text-ink-300 mx-auto mb-4" />
        <h1 className="text-editorial text-3xl text-ink-900 mb-2">Article not found</h1>
        <p className="text-ink-500 text-sm mb-6">
          This article may have been moved or doesn't exist yet.
        </p>
        <Link to="/resources" className="btn-primary">
          Browse Resources
        </Link>
      </div>
    )
  }

  const relatedArticles = content.relatedArticles
    .map((rid) => articles.find((a) => a.id === rid))
    .filter(Boolean)

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-narrow">
        {/* Back */}
        <Link
          to="/resources"
          className="inline-flex items-center gap-1.5 text-xs font-accent font-medium text-ink-500 hover:text-terra-500 transition-colors mb-6"
        >
          <HiOutlineArrowLeft /> All Resources
        </Link>

        {/* Hero image */}
        <div className="h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="badge-terra text-[10px]">{article.category}</span>
          <span className="flex items-center gap-1 text-xs text-ink-400">
            <HiOutlineClock className="text-sm" />
            {article.readTime}
          </span>
          <span className="text-xs text-ink-400">{article.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-editorial text-2xl sm:text-3xl md:text-4xl text-ink-900 leading-tight mb-3">
          {article.title}
        </h1>
        <p className="text-ink-500 text-base leading-relaxed mb-10 max-w-2xl">
          {article.excerpt}
        </p>

        {/* Content */}
        <div className="space-y-8 mb-16">
          {content.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-accent font-semibold text-lg md:text-xl text-ink-800 mb-3">
                {section.heading}
              </h2>
              <div className="text-sm text-ink-600 leading-relaxed whitespace-pre-line">
                {section.body.split('**').map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="text-ink-800 font-semibold">
                      {part}
                    </strong>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Share */}
        <div className="border-t border-b border-ink-100 py-5 mb-12 flex items-center justify-between">
          <p className="text-xs font-accent text-ink-500">Found this useful?</p>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ink-50 text-xs font-accent font-medium text-ink-600 hover:bg-ink-100 transition-colors">
            <HiOutlineShare /> Share Article
          </button>
        </div>

        {/* Related */}
        {relatedArticles.length > 0 && (
          <div>
            <h3 className="font-accent font-semibold text-lg text-ink-800 mb-5">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedArticles.map((ra) => (
                <Link
                  key={ra.id}
                  to={`/resources/${ra.id}`}
                  className="group card-elevated overflow-hidden flex flex-col"
                >
                  <div className="h-40 bg-ink-100 overflow-hidden">
                    <img
                      src={ra.image}
                      alt={ra.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-accent font-medium uppercase tracking-wider text-terra-500">
                      {ra.category} · {ra.readTime}
                    </span>
                    <h4 className="font-accent font-semibold text-sm text-ink-800 group-hover:text-terra-600 transition-colors mt-1 leading-snug">
                      {ra.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
