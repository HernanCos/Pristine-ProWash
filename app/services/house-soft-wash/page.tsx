import type { Metadata } from "next"
import HouseSoftWashHero from "@/components/house-soft-wash/hero"
import WhyHouseSoftWashing from "@/components/house-soft-wash/why-house-soft-washing"
import WhatHappensWithoutWashing from "@/components/house-soft-wash/what-happens-without-washing"
import HowPristineProWashDoesIt from "@/components/house-soft-wash/how-pristine-prowash-does-it"
import BeforeAfterGallery from "@/components/house-soft-wash/before-after-gallery"
import ServiceBundles from "@/components/house-soft-wash/service-bundles"
import HouseFAQ from "@/components/house-soft-wash/house-faq"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "House Soft Washing Portland | Safe Siding Cleaning | Pristine ProWash",
  description:
    "Professional house soft washing in Portland. Safe siding cleaning without damage. Remove mildew, algae & dirt. Plant-safe solutions, licensed & insured. Free quotes available.",
}

export default function HouseSoftWashPage() {
  return (
    <main>
      <HouseSoftWashHero />
      <WhyHouseSoftWashing />
      <WhatHappensWithoutWashing />
      <HowPristineProWashDoesIt />
      <BeforeAfterGallery />
      <ServiceBundles />
      <HouseFAQ />
      <Contact />
    </main>
  )
}
