import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pristine ProWash is a locally owned, licensed and insured pressure washing business serving all of Oregon. Learn about our story, values, and guarantee.",
};

const values = [
  {
    title: "We Do the Job Right",
    desc: "No rushed work, no cutting corners. We use the correct method for every surface — whether that's soft-wash for a roof or high-pressure for concrete.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Licensed & Insured",
    desc: "You're protected every step of the way. We carry full liability insurance so you never have to worry about what happens on your property.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "100% Satisfaction Guarantee",
    desc: "If you're not completely satisfied with the results, we'll come back and re-clean the area for free — no questions, no hassle.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Approach",
    desc: "We use biodegradable, environmentally responsible detergents. Effective cleaning that's safe for your landscaping, pets, and Oregon's waterways.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <Image
          src="/images/hero-about.jpg"
          alt="Clean driveway after pressure washing"
          fill
          className="object-cover opacity-25"
          preload
          sizes="100vw"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Pristine ProWash</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Locally owned and operated. Built on doing quality work and standing behind every job.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="relative w-full md:w-2/5 shrink-0 h-[28rem] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/owner.jpg"
                alt="Owner of Pristine ProWash"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4">
                Oregon&apos;s Exterior, Done Right
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Pristine ProWash was built on a simple idea: Oregon homeowners deserve professional-grade exterior cleaning done safely, thoroughly, and with real care for their property.
                </p>
                <p>
                  As the owner and operator, I handle every job personally. That means you&apos;re not dealing with a franchise or a crew you&apos;ve never met — you&apos;re working directly with the person who shows up, does the work, and stands behind it.
                </p>
                <p>
                  Oregon&apos;s climate — the rain, the moss, the algae — is hard on exterior surfaces. I&apos;ve learned what works for Pacific Northwest homes and I bring that knowledge to every job, from a quick driveway clean to a full house wash and roof soft wash.
                </p>
                <p className="font-semibold text-brand-dark">
                  Licensed, insured, and 100% satisfaction guaranteed. That&apos;s the Pristine ProWash standard.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <Link href="/contact" className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors text-center">
                  Get a Free Quote
                </Link>
                <a href="tel:+19712806104" className="border border-gray-300 hover:border-brand-blue text-brand-dark px-6 py-3 rounded-xl font-bold text-sm transition-colors text-center">
                  Call (971) 280-6104
                </a>
                {/* UO Badge */}
                <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                  <Image
                    src="/images/uo-logo.png"
                    alt="University of Oregon"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                  <div>
                    <p className="text-xs text-gray-500">Currently studying at</p>
                    <p className="text-sm font-semibold text-brand-dark">University of Oregon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-brand-dark mb-3">Why Customers Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ title, desc, icon }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-200 flex gap-4">
                <div className="text-brand-blue shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">Serving All of Oregon</h2>
            <p className="text-gray-500">Wherever you are in Oregon, we come to you.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* City list */}
            <div className="md:w-72 shrink-0 bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
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
                <p className="text-xs text-gray-500">Not on this list? <a href="tel:+19712806104" className="text-brand-blue font-semibold hover:underline">Call us</a> — we likely cover your area.</p>
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
                title="Pristine ProWash service area — all of Oregon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-blue text-white py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Let&apos;s Get Your Property Looking Its Best</h2>
          <p className="text-blue-100 mb-6">Reach out today for a free, no-obligation estimate.</p>
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
