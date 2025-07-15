import type { Metadata } from "next"
import Hero from "@/components/driveway-concrete/hero"
import WhyDrivewayCleaning from "@/components/driveway-concrete/why-driveway-cleaning"
import WhatHappensWithoutCleaning from "@/components/driveway-concrete/what-happens-without-cleaning"
import HowPristineProWashDoesIt from "@/components/driveway-concrete/how-pristine-prowash-does-it"
import BeforeAfterGallery from "@/components/driveway-concrete/before-after-gallery"
import ServiceBundles from "@/components/driveway-concrete/service-bundles"
import DrivewayFAQ from "@/components/driveway-concrete/driveway-faq"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Driveway & Concrete Cleaning Portland | Professional Surface Cleaning | Pristine ProWash",
  description:
    "Professional driveway and concrete cleaning in Portland. Remove oil stains, moss, and grime safely. Surface cleaner technology, licensed & insured. Free quotes available.",
}

export default function DrivewayConcreteCleaningPage() {
  return (
    <main>
      <Hero />
      <WhyDrivewayCleaning />
      <WhatHappensWithoutCleaning />
      <HowPristineProWashDoesIt />
      <BeforeAfterGallery />
      <ServiceBundles />
      <DrivewayFAQ />
      <Contact />
    </main>
  )
}
