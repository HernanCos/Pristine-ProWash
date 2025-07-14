"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take for my roof to look clean after soft washing?",
    answer:
      "After treatment, moss will die off quickly but may remain visible for a few weeks until it naturally breaks down or washes away. For immediate results, we offer optional debris blow-off after treatment.",
  },
  {
    question: "Will soft washing damage my shingles or roof materials?",
    answer:
      "No. Our soft washing method uses low pressure and plant-safe solutions designed to kill moss without harming your shingles. We never use high pressure or harsh scraping methods, preserving your roof's lifespan.",
  },
  {
    question: "How long will my roof stay clean after a soft wash?",
    answer:
      "On average, Portland roofs stay clean for 12 to 24 months depending on tree cover, roof slope, and local conditions. Optional preventative treatments are available to slow future moss regrowth.",
  },
]

export default function RoofFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Quick FAQ</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-bold text-navy text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-cyan transition-transform ${openIndex === index ? "rotate-180" : ""}`}
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
