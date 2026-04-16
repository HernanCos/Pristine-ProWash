import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "Professional Pressure Washing in Oregon | Pristine ProWash",
  },
  description:
    "Licensed & insured pressure washing serving all of Oregon. Roof soft wash, house wash, driveway cleaning, deck and fence restoration. 100% satisfaction guarantee. Call (971) 280-6104.",
  alternates: {
    canonical: "https://pristineprowash.net",
  },
  openGraph: {
    title: "Professional Pressure Washing in Oregon | Pristine ProWash",
    description:
      "Licensed & insured pressure washing serving all of Oregon. Roof soft wash, house wash, driveway cleaning, deck and fence restoration. 100% satisfaction guarantee. Call (971) 280-6104.",
    url: "https://pristineprowash.net",
    images: [{ url: "/logo.jpg", alt: "Pristine ProWash logo" }],
  },
  twitter: {
    card: "summary",
    title: "Professional Pressure Washing in Oregon | Pristine ProWash",
    description:
      "Licensed & insured pressure washing serving all of Oregon. Roof soft wash, house wash, driveway cleaning, deck and fence restoration. 100% satisfaction guarantee. Call (971) 280-6104.",
    images: ["/logo.jpg"],
  },
};

const services = [
  {
    id: "house-wash",
    slug: "house-wash",
    title: "House Wash",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    desc: "Safe, thorough exterior cleaning that removes algae, mildew, and grime from your siding without damage.",
  },
  {
    id: "roof-soft-wash",
    slug: "roof-soft-wash",
    title: "Roof Soft Wash",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M4 11v9a1 1 0 001 1h4v-5h6v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
    desc: "Low-pressure soft-wash method that kills moss and algae at the root , no damage to shingles, guaranteed.",
  },
  {
    id: "driveway-concrete",
    slug: "driveway-concrete",
    title: "Driveway & Concrete",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    desc: "Surface cleaning that strips years of oil stains, moss, and grime from driveways, sidewalks, and patios.",
  },
  {
    id: "deck",
    slug: "deck-cleaning",
    title: "Deck Cleaning",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    desc: "Restore your wood or composite deck to like-new condition, prepped and ready for stain or sealant.",
  },
  {
    id: "fence",
    slug: "fence-cleaning",
    title: "Fence Cleaning",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    desc: "Wood, vinyl, or chain-link , we remove green algae, mildew, and discoloration for a fresh, clean finish.",
  },
];

const beforeAfters = [
  {
    before: "/images/ba-driveway-before.jpg",
    after: "/images/ba-driveway-after.jpg",
    label: "Driveway , Years of moss & staining removed",
    beforeAlt: "Driveway before pressure washing",
    afterAlt: "Driveway after pressure washing",
  },
  {
    before: "/images/ba-deck-before.jpg",
    after: "/images/ba-deck-after.jpg",
    label: "Deck , Algae and weathering stripped away",
    beforeAlt: "Deck before pressure washing",
    afterAlt: "Deck after pressure washing",
  },
  {
    before: "/images/ba-hotel-before.jpg",
    after: "/images/ba-hotel-after.jpg",
    label: "Commercial Exterior , Full property wash",
    beforeAlt: "Commercial property before pressure washing",
    afterAlt: "Commercial property after pressure washing",
  },
];

const faqs = [
  {
    q: "Do you use high pressure on roofs?",
    a: "No. We use a low-pressure soft-wash method for all roof cleaning. High pressure can crack shingles and void manufacturer warranties. Our soft-wash approach kills moss and algae at the root using eco-friendly detergents , no damage, guaranteed.",
  },
  {
    q: "Is pressure washing safe for my siding and paint?",
    a: "Yes, when done correctly. We adjust pressure levels based on surface type and always pre-test. We use soft-wash techniques on painted wood and vinyl siding to prevent any damage.",
  },
  {
    q: "How long does a typical job take?",
    a: "Most residential jobs take between 1–4 hours depending on property size and services needed. We'll give you an accurate time estimate with your free quote.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not necessarily. As long as we have access to an outdoor water spigot and the areas to be cleaned, you don't need to be present. We'll communicate with you before and after the job.",
  },
  {
    q: "How often should I have my home pressure washed?",
    a: "In Oregon's damp climate, we recommend once a year , especially for roofs, north-facing siding, and driveways where moss and algae grow fastest. Annual cleaning also protects your surfaces from long-term deterioration.",
  },
  {
    q: "What areas of Oregon do you serve?",
    a: "We serve all of Oregon, including Portland, Eugene, Salem, Bend, Medford, Corvallis, and all surrounding areas. Not sure if we cover your area? Just call or send us a message.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Pristine ProWash is fully licensed and insured in Oregon. You're protected every step of the way.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How It Works , Pristine ProWash",
  description: "Three simple steps from first contact to a spotless property.",
  step: [
    {
      "@type": "HowToStep",
      name: "Request a Free Quote",
      text: "Call, text, or fill out our form. We respond within the hour with a no-obligation estimate.",
    },
    {
      "@type": "HowToStep",
      name: "We Show Up Ready",
      text: "We arrive on time, walk the property with you, and get to work with commercial-grade equipment matched to your surfaces.",
    },
    {
      "@type": "HowToStep",
      name: "Guaranteed Results",
      text: "We don't leave until the job is done right. If you're not fully satisfied, we come back and re-clean for free.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* ── HERO ── */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <Image
          src="/images/hero-home.jpg"
          alt="Mossy house exterior before pressure washing"
          fill
          className="object-cover opacity-25"
          preload
          sizes="100vw"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-blue inline-block" />
            Licensed &amp; Insured · Serving All of Oregon
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Professional Pressure Washing<br className="hidden md:block" />{" "}
            <span className="text-brand-blue">Across Oregon</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            House washes, roof soft wash, driveways, decks, and fences. Safe methods, real results, and a 100% satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl text-base font-bold transition-colors shadow-lg"
            >
              Request a Free Estimate
            </Link>
            <a
              href="tel:+19712806104"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-base font-bold transition-colors"
            >
              Call (971) 280-6104
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-brand-blue text-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-white/90">
            {["Licensed & Insured", "Soft-Wash Roof Specialist", "Serving All of Oregon", "100% Satisfaction Guarantee"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white/70 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SNAPSHOT ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">What We Clean</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From rooftops to driveways, we handle the full exterior of your home with the right method for every surface.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <Link
                key={svc.id}
                href={`/services/${svc.slug}`}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-brand-blue hover:shadow-md transition-all"
              >
                <div className="text-brand-blue mb-3 group-hover:scale-110 transition-transform">{svc.icon}</div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
            <Link
              href="/contact"
              className="border-2 border-dashed border-brand-blue/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-brand-blue hover:bg-blue-50 transition-all"
            >
              <span className="text-brand-blue font-bold text-base mb-1">Not sure what you need?</span>
              <span className="text-gray-400 text-sm">Get a free, no-obligation quote →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">See the Difference</h2>
            <p className="text-gray-500">Real results from Oregon properties , before and after one visit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfters.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <div className="flex">
                  <div className="flex-1 relative">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={item.before}
                        alt={item.beforeAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 17vw"
                      />
                    </div>
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded">
                      BEFORE
                    </span>
                  </div>
                  <div className="w-0.5 bg-white shrink-0" />
                  <div className="flex-1 relative">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={item.after}
                        alt={item.afterAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 17vw"
                      />
                    </div>
                    <span className="absolute top-2 left-2 bg-brand-blue/80 text-white text-xs font-bold px-2 py-0.5 rounded">
                      AFTER
                    </span>
                  </div>
                </div>
                <p className="px-4 py-3 text-sm text-gray-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">What Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TODO: Replace placeholder text with real testimonials when collected */}
            {[
              {
                quote: "Absolutely incredible work. My driveway looks brand new after years of moss buildup. Professional, on time, and thorough.",
                name: "Michael, Portland, OR",
              },
              {
                quote: "Had our roof soft washed and couldn't believe the difference. They were careful, explained everything, and cleaned up perfectly.",
                name: "Jennifer, Portland, OR",
              },
              {
                quote: "Best money I've spent on home maintenance. The house wash made our whole exterior look years younger.",
                name: "Christopher, Eugene, OR",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-dashed border-gray-300">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-400">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-brand-dark text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">How It Works</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Three simple steps from first contact to a spotless property.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Request a Free Quote", desc: "Call, text, or fill out our form. We respond within the hour and provide a no-obligation estimate." },
              { step: "02", title: "We Show Up on Time", desc: "We arrive at the scheduled time, do a quick walkthrough, and get to work with professional-grade equipment." },
              { step: "03", title: "Guaranteed Results", desc: "We clean thoroughly, tidy up, and only leave when you're fully satisfied. 100% satisfaction, every time." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white font-extrabold text-lg mb-4 shrink-0">
                  {step}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none font-semibold text-brand-dark hover:bg-gray-50 transition-colors">
                  {q}
                  <svg className="faq-icon w-5 h-5 text-brand-blue shrink-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">Proudly Serving All of Oregon</h2>
            <p className="text-gray-500">Wherever you are in Oregon, we come to you.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* City list */}
            <div className="md:w-72 shrink-0 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Cities We Serve</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Portland", "Eugene", "Salem", "Bend", "Medford",
                  "Corvallis", "Springfield", "Gresham", "Hillsboro",
                  "Beaverton", "Lake Oswego", "Tigard", "Ashland",
                  "Grants Pass", "Klamath Falls",
                ].map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-brand-blue shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {city}
                  </li>
                ))}
                <li className="text-gray-400 italic text-xs pt-1">…and all surrounding areas</li>
              </ul>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Not on this list? <a href="tel:+19712806104" className="text-brand-blue font-semibold hover:underline">Call us</a> , we likely cover your area.</p>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1 rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[380px]">
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Oregon%2C+USA&ie=UTF8&t=&z=6&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pristine ProWash service area , all of Oregon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-blue text-white py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Ready for a Cleaner Home?</h2>
          <p className="text-blue-100 mb-7 text-lg">Get your free, no-obligation estimate today. We respond within the hour.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white text-brand-blue hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-base transition-colors shadow"
            >
              Request My Free Estimate
            </Link>
            <a
              href="tel:+19712806104"
              className="w-full sm:w-auto border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-base transition-colors"
            >
              Call (971) 280-6104
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
