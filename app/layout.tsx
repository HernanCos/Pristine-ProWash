import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import Script from "next/script"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Pristine ProWash – Roof, Gutter & Driveway Cleaning | Portland & Eugene",
  description:
    "Premium soft-wash roof cleaning, gutter oxidation removal & driveway oil-spot treatment. Free online quotes. Fully insured.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} bg-page text-[#111]`}>
        <Header />
        <main className="flex min-h-screen flex-col pt-24 bg-lightband">{children}</main>
        <Footer />
        <MobileNav />
        {/* Google tag (gtag.js) */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-17289761916" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17289761916');
          `}
        </Script>
      </body>
    </html>
  )
}
