import type { Metadata } from "next"
import DeckFenceHero from "@/components/deck-fence/hero"
import WhyDeckFenceCleaning from "@/components/deck-fence/why-deck-fence-cleaning"
import HowPristineProWashDoesIt from "@/components/deck-fence/how-pristine-prowash-does-it"
import ServiceBundles from "@/components/deck-fence/service-bundles"
import DeckFenceFAQ from "@/components/deck-fence/deck-fence-faq"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Deck & Fence Cleaning Portland | Pristine ProWash",
  description:
    "Professional deck and fence cleaning in Portland. Restore natural wood color, prevent algae damage, and protect your outdoor spaces with safe, gentle cleaning methods.",
  keywords: "deck cleaning Portland, fence cleaning, wood restoration, soft washing, outdoor cleaning",
}

export default function DeckFenceCleaningPage() {
  return (
    <main>
      <DeckFenceHero />
      <WhyDeckFenceCleaning />
      <HowPristineProWashDoesIt />
      <ServiceBundles />
      <DeckFenceFAQ />
      <Contact />
    </main>
  )
}
