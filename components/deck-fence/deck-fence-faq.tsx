"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function DeckFenceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Will soft washing damage my deck or fence?",
      answer:
        "No. We use a gentle low-pressure wash and wood-safe detergents that clean without splintering or harming wood fibers.",
    },
    {
      question: "How often should I clean my deck or fence in Portland?",
      answer:
        "Once per year is recommended to prevent algae and moss buildup, with more frequent cleanings for heavily shaded or tree-covered areas.",
    },
    {
      question: "Can I stain my deck after cleaning?",
      answer:
        "Yes. Our method prepares wood for sealing or staining by removing dirt, algae, and oxidation, creating a clean surface ready for treatment.",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-navy">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
