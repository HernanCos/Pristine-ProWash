import type { Metadata } from "next"
import GutterHero from "@/components/gutter-cleaning/hero"
import WhyGutterCleaning from "@/components/gutter-cleaning/why-gutter-cleaning"
import HowPristineProWashDoesIt from "@/components/gutter-cleaning/how-pristine-prowash-does-it"
import ServiceBundles from "@/components/gutter-cleaning/service-bundles"
import GutterFAQ from "@/components/gutter-cleaning/gutter-faq"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Gutter Cleaning & Brightening Portland | Pristine ProWash",
  description:
    "Professional gutter cleaning and brightening services in Portland. Prevent water damage with safe debris removal and gutter restoration. No ladder required!",
  keywords:
    "gutter cleaning Portland, gutter brightening, debris removal, water damage prevention, professional gutter service",
}

export default function GutterCleaningPage() {
  return (
    <main>
      <GutterHero />
      <WhyGutterCleaning />
      <HowPristineProWashDoesIt />
      <ServiceBundles />
      <GutterFAQ />
      <Contact />
    </main>
  )
}
