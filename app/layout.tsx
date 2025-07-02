import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700"],
})

export const metadata: Metadata = {
  title: "Pristine ProWash – Roof, Gutter & Driveway Cleaning | Portland & Eugene",
  description:
    "Premium soft-wash roof cleaning, gutter oxidation removal & driveway oil-spot treatment. Free online quotes. Fully insured.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-charcoal text-white`}>
        <Header />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  )
}
