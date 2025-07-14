"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DeckFenceFAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-gray-50 rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
              Will soft washing damage my deck or fence?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              No. We use a gentle low-pressure wash and wood-safe detergents that clean without splintering or harming
              wood fibers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-gray-50 rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
              How often should I clean my deck or fence in Portland?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Once per year is recommended to prevent algae and moss buildup, with more frequent cleanings for heavily
              shaded or tree-covered areas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-gray-50 rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
              Can I stain my deck after cleaning?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Yes. Our method prepares wood for sealing or staining by removing dirt, algae, and oxidation, creating a
              clean surface ready for treatment.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
