"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DrivewayFAQ() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
              Will high-pressure cleaning damage my concrete?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              No. We use surface cleaners that apply controlled, even pressure designed for concrete surfaces. This
              avoids streaks, gouges, or premature wear, while still removing tough grime and stains.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
              How often should I clean my driveway in Portland?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Most driveways in Portland benefit from annual cleaning due to algae, moss, and oil buildup. Homes in
              shaded areas or with heavy tree cover may need more frequent service to prevent slipping hazards and
              stains.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
              Can you remove oil stains?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              Yes. We offer an optional oil spot treatment that targets tough automotive stains. While older stains may
              lighten rather than fully disappear, our treatment significantly improves appearance and reduces
              discoloration.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
