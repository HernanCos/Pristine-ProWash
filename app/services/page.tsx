import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  description:
    "House washing, roof soft wash, driveway & concrete, deck, and fence cleaning across all of Oregon. Licensed & insured. Free estimates.",
};

const services = [
  {
    id: "house-wash",
    title: "House Wash",
    tagline: "Restore your home's curb appeal in one visit.",
    description:
      "Oregon's damp climate means algae, mildew, and green growth build up fast on siding. Our house wash service uses the right pressure and eco-friendly detergents for your specific siding type — vinyl, wood, stucco, or fiber cement — leaving it clean without causing damage.",
    image: "/images/service-house-wash.jpg",
    imageAlt: "House siding covered in algae and mildew before washing",
    imageCaption: "Algae & mildew buildup on siding",
    includes: [
      "Full exterior wall wash from ground to roofline",
      "Soffit and fascia cleaning",
      "Pre-rinse and post-rinse",
      "Eco-friendly, biodegradable detergents",
      "Soft-wash method on painted or delicate surfaces",
    ],
  },
  {
    id: "roof-soft-wash",
    title: "Roof Soft Wash",
    tagline: "Kill moss at the root — without damaging your shingles.",
    description:
      "High-pressure roof cleaning is dangerous and can void your shingle warranty. We use a professional low-pressure soft-wash system combined with a moss-killing treatment that eliminates algae and moss at the root. Results last longer, and your roof stays protected.",
    image: "/images/service-roof-soft-wash.jpg",
    imageAlt: "Roof shingles with heavy moss growth before soft wash",
    imageCaption: "Moss growth across shingles",
    includes: [
      "Low-pressure soft-wash application",
      "Moss and algae treatment at the root",
      "Safe for all shingle types",
      "No risk of shingle cracking or water infiltration",
      "No damage guarantee",
    ],
  },
  {
    id: "driveway-concrete",
    title: "Driveway & Concrete",
    tagline: "Strip years of staining, moss, and grime from hard surfaces.",
    description:
      "Concrete driveways, walkways, and patios accumulate oil, moss, tire marks, and deep-set staining over time. We use professional surface cleaning equipment that removes buildup evenly across the entire surface — no streaking, no missed spots.",
    image: "/images/service-driveway.jpg",
    imageAlt: "Driveway covered in moss and staining before pressure washing",
    imageCaption: "Years of staining & moss on concrete",
    includes: [
      "Rotary surface cleaner for even, streak-free results",
      "Pre-treatment of oil stains and heavy buildup",
      "Driveways, sidewalks, patios, and parking areas",
      "Post-rinse and edge detail",
      "Moss and algae pre-treatment",
    ],
  },
  {
    id: "deck",
    title: "Deck Cleaning",
    tagline: "Bring your deck back to life before sealing or staining.",
    description:
      "Wood and composite decks turn gray, slippery, and algae-covered without regular cleaning. We pressure wash decks at the correct pressure for the material, leaving the surface clean and ready for stain, sealant, or just summer use.",
    image: "/images/service-deck.jpg",
    imageAlt: "Weathered deck with algae and discoloration before cleaning",
    imageCaption: "Weathered deck before restoration",
    includes: [
      "Wood and composite-safe pressure settings",
      "Algae, mildew, and stain removal",
      "Deck boards, railings, and steps",
      "Pre-wash inspection for damaged boards",
      "Ready for immediate stain or sealant application",
    ],
  },
  {
    id: "fence",
    title: "Fence Cleaning",
    tagline: "Remove green algae and discoloration from any fence material.",
    description:
      "Wood, vinyl, and chain-link fences all collect algae and weathering. A clean fence adds to your property's appearance and extends the life of the material. We match our method to your fence type so nothing gets damaged.",
    image: "/images/service-fence.jpg",
    imageAlt: "Fence covered in algae and discoloration before cleaning",
    imageCaption: "Algae & discoloration on fence panels",
    includes: [
      "Wood, vinyl, and chain-link fences",
      "Algae, mildew, and discoloration removal",
      "Full panel cleaning including posts",
      "Soft-wash option for delicate or painted fences",
      "Prepares wood fences for staining or painting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <Image
          src="/images/hero-services.jpg"
          alt="Roof being soft washed"
          fill
          className="object-cover opacity-25"
          preload
          sizes="100vw"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Professional exterior cleaning for Oregon homeowners. Every service is backed by our 100% satisfaction guarantee.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white px-7 py-3 rounded-xl font-bold transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-brand-blue text-white">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm font-semibold text-white/90">
            {["Licensed & Insured", "No Damage Guarantee", "Eco-Friendly Detergents", "100% Satisfaction or We Re-Clean Free"].map((item) => (
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

      {/* Service detail sections — alternating backgrounds */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} py-16 md:py-20`}
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Service image */}
              <div className="w-full md:w-2/5 shrink-0">
                {svc.image ? (
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                    <div className="relative h-52 md:h-64">
                      <Image
                        src={svc.image}
                        alt={svc.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {svc.imageCaption}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl h-52 md:h-64 bg-gray-100 border border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 text-gray-400">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">Photo Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-1">{svc.title}</h2>
                <p className="text-brand-blue font-semibold mb-3">{svc.tagline}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.description}</p>
                <ul className="space-y-2 mb-5">
                  {svc.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  Get a Quote for {svc.title}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-brand-blue text-white py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">Call us, text us, or fill out a quick form — we respond within the hour.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="w-full sm:w-auto bg-white text-brand-blue hover:bg-blue-50 px-7 py-3.5 rounded-xl font-bold transition-colors">
              Request My Free Estimate
            </Link>
            <a href="tel:+19712806104" className="w-full sm:w-auto border-2 border-white/50 hover:border-white text-white px-7 py-3.5 rounded-xl font-bold transition-colors">
              Call (971) 280-6104
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
