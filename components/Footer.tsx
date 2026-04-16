import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Roof Soft Wash", href: "/services/roof-soft-wash" },
  { label: "House Wash", href: "/services/house-wash" },
  { label: "Driveway & Concrete", href: "/services/driveway-concrete" },
  { label: "Deck Cleaning", href: "/services/deck-cleaning" },
  { label: "Fence Cleaning", href: "/services/fence-cleaning" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact / Quote", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Pristine ProWash logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-white">
                Pristine <span className="text-brand-blue">ProWash</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Professional pressure washing serving all of Oregon. Licensed &amp; insured. 100% satisfaction guaranteed.
            </p>
            <div className="space-y-1 text-sm">
              <a href="tel:+19712806104" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-brand-blue shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                (971) 280-6104
              </a>
              <a href="mailto:info@pristineprowash.net" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@pristineprowash.net
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Service Area */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Service Area</h3>
            <p className="text-sm text-gray-400">Proudly serving all of Oregon including Portland, Eugene, Salem, Bend, Medford, and surrounding areas.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Pristine ProWash. All rights reserved.</span>
          <span>Licensed &amp; Insured · Serving All of Oregon</span>
        </div>
      </div>
    </footer>
  );
}
