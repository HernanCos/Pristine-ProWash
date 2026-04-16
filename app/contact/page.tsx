import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "Get a Free Pressure Washing Quote | Pristine ProWash | (971) 280-6104",
  },
  description:
    "Request a free, no-obligation pressure washing estimate. We respond within the hour. Serving Portland, Eugene, Salem, Bend, and all of Oregon.",
  alternates: {
    canonical: "https://pristineprowash.net/contact",
  },
  openGraph: {
    title: "Get a Free Pressure Washing Quote | Pristine ProWash | (971) 280-6104",
    description:
      "Request a free, no-obligation pressure washing estimate. We respond within the hour. Serving Portland, Eugene, Salem, Bend, and all of Oregon.",
    url: "https://pristineprowash.net/contact",
    images: [{ url: "/logo.jpg", alt: "Pristine ProWash logo" }],
  },
  twitter: {
    card: "summary",
    title: "Get a Free Pressure Washing Quote | Pristine ProWash | (971) 280-6104",
    description:
      "Request a free, no-obligation pressure washing estimate. We respond within the hour. Serving Portland, Eugene, Salem, Bend, and all of Oregon.",
    images: ["/logo.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <Image
          src="/images/hero-contact.jpg"
          alt="Wooden logs background"
          fill
          className="object-cover opacity-25"
          preload
          sizes="100vw"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get a Free Quote</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Fill out the form, call, or text us. We respond within the hour and provide a no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* Contact options sidebar */}
            <div className="md:col-span-2 space-y-5">
              <h2 className="text-xl font-bold text-brand-dark">Contact Us Directly</h2>

              <a
                href="tel:+19712806104"
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Call or Text</p>
                  <p className="font-bold text-brand-dark">(971) 280-6104</p>
                </div>
              </a>

              <a
                href="sms:+19712806104"
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Text Us</p>
                  <p className="font-bold text-brand-dark">(971) 280-6104</p>
                </div>
              </a>

              <a
                href="mailto:info@pristineprowash.net"
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <p className="font-bold text-brand-dark text-sm">info@pristineprowash.net</p>
                </div>
              </a>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-brand-dark mb-1">Our Guarantee</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  100% satisfaction guaranteed. If you&apos;re not happy with the results, we&apos;ll come back and re-clean for free , no questions asked.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-brand-dark mb-1">Service Area</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We serve all of Oregon. Portland, Eugene, Salem, Bend, Medford, and everywhere in between.
                </p>
              </div>
            </div>

            {/* Quote form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
