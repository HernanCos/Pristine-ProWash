import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "About Pristine ProWash | Owner-Operated Pressure Washing in Portland, OR",
  },
  description:
    "Meet Hernan , owner and operator of Pristine ProWash. Every job handled personally. Licensed, insured, and serving all of Oregon with professional exterior cleaning.",
  alternates: {
    canonical: "https://pristineprowash.net/about",
  },
  openGraph: {
    title: "About Pristine ProWash | Owner-Operated Pressure Washing in Portland, OR",
    description:
      "Meet Hernan , owner and operator of Pristine ProWash. Every job handled personally. Licensed, insured, and serving all of Oregon with professional exterior cleaning.",
    url: "https://pristineprowash.net/about",
    images: [{ url: "/logo.jpg", alt: "Pristine ProWash logo" }],
  },
  twitter: {
    card: "summary",
    title: "About Pristine ProWash | Owner-Operated Pressure Washing in Portland, OR",
    description:
      "Meet Hernan , owner and operator of Pristine ProWash. Every job handled personally. Licensed, insured, and serving all of Oregon with professional exterior cleaning.",
    images: ["/logo.jpg"],
  },
};

const values = [
  {
    title: "The Owner Does the Work",
    desc: "There's no call center and no rotating crew. I handle every job personally , from the estimate to the walkthrough to the final rinse. You know exactly who's on your property and you can talk to them directly if anything comes up.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Licensed & Fully Insured",
    desc: "I carry full liability insurance. Your property is protected the entire time I'm on it, and you're never on the hook for anything that happens during the job.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "100% Satisfaction Guarantee",
    desc: "If you look at the finished work and something isn't right, I come back and re-do it at no charge. No argument, no runaround. I built this business on referrals and repeat clients , that doesn't happen by leaving people unsatisfied.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly, Not Watered Down",
    desc: "The detergents I use are biodegradable and safe for landscaping, pets, and Oregon's waterways. Eco-friendly doesn't mean weak , it means I've found commercial-grade products that do the job without doing damage to everything around it.",
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
            Owner-operated. Every job handled personally. Built on doing the work right , not just doing it fast.
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
              <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">Why I started Pristine ProWash</h3>
                  <p>
                    I started Pristine ProWash because I saw a gap. Plenty of companies in Oregon offer pressure washing, but most of them operate the same way , show up, blast everything at the same pressure, and move on to the next job. I watched homeowners pay for work that left streaks on their driveways, damaged their siding, or put their roof warranty at risk because someone couldn&apos;t be bothered to adjust the PSI.
                  </p>
                  <p className="mt-3">
                    I knew I could build something better if I just did the basics right: show up on time, use the correct method for every surface, communicate clearly, and stand behind the results.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">Who I am</h3>
                  <p>
                    I&apos;m Hernan. Before starting this business, I studied computer science at the University of Wisconsin and spent my freshman year working in rebar fabrication , long hours, physical work, and zero tolerance for doing things halfway. That combination shaped how I operate now: I think in systems and repeatable processes, and I&apos;m not afraid to put in the work.
                  </p>
                  <p className="mt-3">
                    I&apos;m currently studying finance at the University of Oregon and running Pristine ProWash alongside school as the sole owner and operator. When you book a job, I&apos;m the person who answers the phone, shows up at your door, does the work, and doesn&apos;t leave until it&apos;s done right.
                  </p>
                </div>
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

      {/* How I Work + Character */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="relative w-full md:w-2/5 shrink-0 h-[28rem] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/owner-truck.jpg"
                alt="Owner of Pristine ProWash with work truck"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="flex-1 space-y-6 text-gray-600 text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-2">How I Work</h3>
                <p>
                  Every job starts with a walkthrough. I look at the surfaces, assess the condition, and explain exactly what I&apos;m going to do and why. Before any chemicals touch the property, I protect your landscaping and any sensitive areas. I use true soft-wash methods on roofs and delicate surfaces , never high pressure where it doesn&apos;t belong. And I&apos;d rather take an extra ten minutes to rinse thoroughly than leave streaks or risk plant damage.
                </p>
                <p className="mt-3">
                  Communication is part of the service, not an afterthought. I give fast estimates, set clear expectations upfront, and send photo updates when it helps. No surprises, no guesswork.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-2">When things go wrong</h3>
                <p>
                  Things go wrong sometimes on any job. What matters is how you handle it. On one job, my hose accidentally knocked over a vase and it broke. I told the homeowner immediately, cleaned everything up, and replaced the vase with a brand new one. No excuses, no dodging , just fixed it.
                </p>
                <p className="mt-3">
                  That&apos;s how I run this business. If there&apos;s a problem, I own it and I make it right. Every job comes with a 100% satisfaction guarantee, and that&apos;s not a line on a website. It&apos;s a commitment I take personally, because my name is on this business and my reputation is built one job at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-20">
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
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">Serving All of Oregon</h2>
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
