import type { Metadata } from "next"
import RoofSoftWashHero from "@/components/roof-soft-wash/hero"
import WhyRoofSoftWashing from "@/components/roof-soft-wash/why-roof-soft-washing"
import WhatHappensWithoutWashing from "@/components/roof-soft-wash/what-happens-without-washing"
import HowPristineProWashDoesIt from "@/components/roof-soft-wash/how-pristine-prowash-does-it"
import BeforeAfterGallery from "@/components/roof-soft-wash/before-after-gallery"
import RoofFAQ from "@/components/roof-soft-wash/roof-faq"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Roof Soft Washing Portland | Safe Moss Removal | Pristine ProWash",
  description:
    "Professional roof soft washing in Portland. Safe moss removal without roof damage. Plant-safe solutions, licensed & insured. Free quotes available.",
}

export default function RoofSoftWashPage() {
  return (
    <main>
      <RoofSoftWashHero />
      <WhyRoofSoftWashing />
      <WhatHappensWithoutWashing />
      <HowPristineProWashDoesIt />
      <BeforeAfterGallery />
      <RoofFAQ />
      <Contact />
    </main>
  )
}
