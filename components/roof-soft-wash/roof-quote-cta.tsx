"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RoofQuoteCTA() {
  const router = useRouter()
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "roof",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Roof Soft Wash Quote Request",
        }),
      })

      if (response.ok) {
        router.push("/thankyou")
      } else {
        setFormState("error")
      }
    } catch (error) {
      setFormState("error")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-16" style={{ backgroundColor: "#DCE7F7" }}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-navy">Get Your Free Roof Cleaning Quote Today</h2>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="New Roof Soft Wash Quote Request" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cta-name" className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="cta-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                    placeholder="Your name"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="cta-email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="cta-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                    placeholder="your@email.com"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cta-phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="cta-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                    placeholder="(555) 555-5555"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="cta-address" className="block mb-2 text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    id="cta-address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                    placeholder="Your address"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cta-message" className="block mb-2 text-sm font-medium text-gray-700">
                  Additional Details (Optional)
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                  placeholder="Tell us more about your roof cleaning needs..."
                  disabled={formState === "submitting"}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan text-white font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formState === "submitting"}
              >
                {formState === "submitting" ? "Submitting..." : "Get Free Roof Cleaning Quote"}
              </button>
            </form>

            {/* Error Message */}
            {formState === "error" && (
              <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg text-center">
                ⚠️ Oops! Something went wrong. Please email{" "}
                <a href="mailto:info@pristineprowash.net" className="text-red-800 underline hover:text-cyan">
                  info@pristineprowash.net
                </a>
                .
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
