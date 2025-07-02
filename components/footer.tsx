import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start relative">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Pristine ProWash logo"
                width={180}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-white font-source-sans-pro font-normal text-lg tracking-wide">
                Pristine ProWash
              </span>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-[320px]">
              Professional pressure washing services
              <br />
              for residential properties
              <br />
              in Portland and Eugene, Oregon.
            </p>
            {/* Right border - trimmed */}
            <div className="hidden md:block absolute right-0 top-0 h-[90%] w-px bg-gray-800"></div>
          </div>

          <div className="mb-6 md:mb-0 relative">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-cyan transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-cyan transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Right border - trimmed */}
            <div className="hidden md:block absolute right-0 top-0 h-[90%] w-px bg-gray-800"></div>
          </div>

          <div className="relative">
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#roof-details" className="text-gray-400 hover:text-cyan transition-colors">
                  Roof Soft Washing
                </Link>
              </li>
              <li>
                <Link href="#gutter-details" className="text-gray-400 hover:text-cyan transition-colors">
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link href="#driveway-details" className="text-gray-400 hover:text-cyan transition-colors">
                  Driveway Cleaning
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pristine ProWash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
