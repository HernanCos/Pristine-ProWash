import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pristine ProWash",
    default: "Pristine ProWash — Professional Pressure Washing in Oregon",
  },
  description:
    "Licensed & insured pressure washing serving all of Oregon. House wash, roof soft wash, driveway, deck, and fence cleaning. 100% satisfaction guaranteed. Call (971) 280-6104.",
  keywords: [
    "pressure washing Oregon",
    "house washing Oregon",
    "roof soft wash Oregon",
    "driveway cleaning Oregon",
    "deck cleaning Oregon",
    "fence cleaning Oregon",
    "Pristine ProWash",
  ],
  openGraph: {
    title: "Pristine ProWash — Professional Pressure Washing in Oregon",
    description:
      "Licensed & insured pressure washing serving all of Oregon. 100% satisfaction guaranteed.",
    url: "https://pristineprowash.net",
    siteName: "Pristine ProWash",
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pristine ProWash",
  description:
    "Licensed and insured professional pressure washing serving all of Oregon. House wash, roof soft wash, driveway, deck, and fence cleaning.",
  url: "https://pristineprowash.net",
  telephone: "+19712806104",
  email: "info@pristineprowash.net",
  areaServed: {
    "@type": "State",
    name: "Oregon",
  },
  serviceType: [
    "House Washing",
    "Roof Soft Wash",
    "Driveway Cleaning",
    "Concrete Cleaning",
    "Deck Cleaning",
    "Fence Cleaning",
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pressure Washing Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        {/* Mobile sticky CTA bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex">
            <a
              href="tel:+19712806104"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-dark text-white text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              Call Now
            </a>
            <a
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-blue text-white text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Free Quote
            </a>
          </div>
        </div>
        {/* Bottom padding on mobile for sticky bar */}
        <div className="md:hidden h-12" />
      </body>
    </html>
  );
}
