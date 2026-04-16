import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "./data";

export const metadata: Metadata = {
  title: "Pressure Washing Services | Roof, House, Driveway, Deck",
  description:
    "Full exterior cleaning services for Oregon homes. Soft-wash roofs, house wash, driveway & concrete, deck cleaning, fence cleaning. Eco-friendly detergents. Free estimates.",
  alternates: {
    canonical: "https://pristineprowash.net/services",
  },
  openGraph: {
    title: "Pressure Washing Services | Roof, House, Driveway, Deck | Pristine ProWash",
    description:
      "Full exterior cleaning services for Oregon homes. Soft-wash roofs, house wash, driveway & concrete, deck cleaning, fence cleaning. Eco-friendly detergents. Free estimates.",
    url: "https://pristineprowash.net/services",
    images: [{ url: "/logo.jpg", alt: "Pristine ProWash logo" }],
  },
  twitter: {
    card: "summary",
    title: "Pressure Washing Services | Roof, House, Driveway, Deck | Pristine ProWash",
    description:
      "Full exterior cleaning services for Oregon homes. Soft-wash roofs, house wash, driveway & concrete, deck cleaning, fence cleaning. Eco-friendly detergents. Free estimates.",
    images: ["/logo.jpg"],
  },
};

const serviceSchemas = services.map((svc) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: svc.title,
  description: svc.description,
  url: `https://pristineprowash.net/services/${svc.slug}`,
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Pristine ProWash",
    url: "https://pristineprowash.net",
  },
}));

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

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

      {/* Service cards */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-blue hover:shadow-md transition-all"
              >
                {svc.image ? (
                  <div className="relative h-44">
                    <Image
                      src={svc.image}
                      alt={svc.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="h-44 bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-400">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">Photo Coming Soon</span>
                  </div>
                )}
                <div className="p-5">
                  <h2 className="font-bold text-brand-dark text-lg mb-1 group-hover:text-brand-blue transition-colors">
                    {svc.title}
                  </h2>
                  <p className="text-brand-blue text-sm font-semibold mb-2">{svc.tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {svc.description}
                  </p>
                  <span className="inline-block mt-3 text-brand-blue text-sm font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-blue text-white py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">Call us, text us, or fill out a quick form , we respond within the hour.</p>
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
