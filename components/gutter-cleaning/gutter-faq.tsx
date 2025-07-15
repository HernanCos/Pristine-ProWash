"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function GutterFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do I really need gutter cleaning every year in Portland?",
      answer:
        "Yes. Due to heavy rainfall and frequent leaf buildup, most Portland homes benefit from cleaning twice per year, especially after fall and before spring rains.",
    },
    {
      question: "Is gutter brightening safe for painted gutters?",
      answer:
        "Yes. We use gentle, professional-grade cleaning solutions that lift oxidation and streaks without harming gutter paint or finishes.",
    },
    {
      question: "Can I avoid climbing ladders by hiring Pristine ProWash?",
      answer:
        "Absolutely. Our trained team handles everything safely using professional ladders and stabilizers, so you do not need to take the risk.",
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
