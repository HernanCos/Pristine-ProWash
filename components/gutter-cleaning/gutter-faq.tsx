"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GutterFAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-gray-50 rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
              Do I really need gutter cleaning every year in Portland?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Yes. Due to heavy rainfall and frequent leaf buildup, most Portland homes benefit from cleaning twice per
              year, especially after fall and before spring rains.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-gray-50 rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
              Is gutter brightening safe for painted gutters?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Yes. We use gentle, professional-grade cleaning solutions that lift oxidation and streaks without harming
              gutter paint or finishes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-gray-50 rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
              Can I avoid climbing ladders by hiring Pristine ProWash?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Absolutely. Our trained team handles everything safely using professional ladders and stabilizers, so you
              do not need to take the risk.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
