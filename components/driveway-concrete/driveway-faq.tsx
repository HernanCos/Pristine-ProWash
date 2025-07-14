"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Will high-pressure cleaning damage my concrete?",
    answer:
      "No. We use surface cleaners that apply controlled, even pressure designed for concrete surfaces. This avoids streaks, gouges, or premature wear, while still removing tough grime and stains.",
  },
  {
    question: "How often should I clean my driveway in Portland?",
    answer:
      "Most driveways in Portland benefit from annual cleaning due to algae, moss, and oil buildup. Homes in shaded areas or with heavy tree cover may need more frequent service to prevent slipping hazards and stains.",
  },
  {
    question: "Can you remove oil stains?",
    answer:
      "Yes. We offer an optional oil spot treatment that targets tough automotive stains. While older stains may lighten rather than fully disappear, our treatment significantly improves appearance and reduces discoloration.",
  },
]

export default function DrivewayFAQ() {
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
