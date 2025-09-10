import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="text-navy pt-4 pb-6" style={{ backgroundColor: "#E1E7ED" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/LOGO.png" alt="Pristine ProWash logo" width={140} height={140} />
              <Image src="/uo-logo.png" alt="University of Oregon logo" width={50} height={50} />
            </Link>
            <p className="text-navy/70 text-sm leading-relaxed text-center md:text-left max-w-[380px] mb-4">
              Professional pressure-washing services for residential properties in Portland, Lake Oswego, and Eugene,
              Oregon.
            </p>
            <div className="space-y-2 text-center md:text-left">
              <p className="text-navy font-semibold text-lg">(971) 280-6104</p>
              <p className="text-navy/70 text-sm">info@pristineprowash.net</p>
            </div>
          </div>

          <div className="bg-white/30 rounded-lg p-6 border border-navy/10 -ml-16">
            <h3 className="font-bold mb-3 text-xl text-navy border-b border-navy/20 pb-2">Quick Links</h3>
            <ul className="space-y-2 -ml-3">
              <li>
                <Link
                  href="/"
                  className="text-navy/80 hover:text-cyan transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan/40 rounded-full mr-3 group-hover:bg-cyan transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-navy/80 hover:text-cyan transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan/40 rounded-full mr-3 group-hover:bg-cyan transition-colors"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-navy/80 hover:text-cyan transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan/40 rounded-full mr-3 group-hover:bg-cyan transition-colors"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy/80 hover:text-cyan transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan/40 rounded-full mr-3 group-hover:bg-cyan transition-colors"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white/30 rounded-lg p-6 border border-navy/10 -ml-12">
            <h3 className="font-bold mb-3 text-xl text-navy border-b border-navy/20 pb-2">Services</h3>
            <ul className="space-y-2 -ml-3">
              <li>
                <Link
                  href="/services/roof-soft-wash"
                  className="text-navy/80 hover:text-cyan transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan/40 rounded-full mr-3 group-hover:bg-cyan transition-colors"></span>
                  Roof Soft Washing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/house-soft-wash"
                  className="text-navy/80 hover:text-cyan transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan/40 rounded-full mr-3 group-hover:bg-cyan transition-colors"></span>
                  House Soft Washing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gutter-cleaning"
                  className="text-navy/80 hover:text-cyan transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan/40 rounded-full mr-3 group-hover:bg-cyan transition-colors"></span>
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/driveway-concrete-cleaning"
                  className="text-navy/80 hover:text-cyan transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan/40 rounded-full mr-3 group-hover:bg-cyan transition-colors"></span>
                  Driveway & Concrete
                </Link>
              </li>
              <li>
                <Link
                  href="/services/deck-fence-cleaning"
                  className="text-navy/80 hover:text-cyan transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-cyan/40 rounded-full mr-3 group-hover:bg-cyan transition-colors"></span>
                  Deck & Fence
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-2 pt-4 border-t-2 border-navy/15 text-center">
          <p className="text-navy/70 text-sm font-medium">
            &copy; {new Date().getFullYear()} Pristine ProWash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
