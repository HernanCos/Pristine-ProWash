"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Will soft washing damage my paint or siding?",
    answer:
      "No. Soft washing uses low pressure combined with eco-friendly detergents to safely clean without peeling paint or damaging delicate materials like stucco, wood, or vinyl.",
  },
  {
    question: "How often should I have my house soft washed in Portland?",
    answer:
      "We recommend once every 12 to 18 months, depending on tree cover and shade. Portland's wet climate causes faster algae and mildew build-up on siding, especially on shaded walls.",
  },
  {
    question: "Is it safe around pets and plants?",
    answer:
      "Yes. We thoroughly soak nearby landscaping before and after application and use neutralizing agents to prevent harm to plants. Pets should be kept indoors during service and can return outside after the area is rinsed.",
  },
]

export default function HouseFAQ() {
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
