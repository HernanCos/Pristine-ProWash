"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function QuoteForm() {
  const router = useRouter()
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
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
          email: "not-provided@hero-form.com", // Email is not in this form
          _subject: "New Quote Request from Hero Form",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="bg-gray-50/20 backdrop-blur-sm p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4" method="POST">
        <div>
          <label htmlFor="name-hero" className="block mb-2 text-sm font-medium text-white">
            Full Name
          </label>
          <input
            type="text"
            id="name-hero"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-white/90 text-gray-900 border border-gray-300"
            placeholder="Your name"
            required
            disabled={formState === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="phone-hero" className="block mb-2 text-sm font-medium text-white">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-hero"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-white/90 text-gray-900 border border-gray-300"
            placeholder="(555) 555-5555"
            required
            disabled={formState === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="address-hero" className="block mb-2 text-sm font-medium text-white">
            Address
          </label>
          <input
            type="text"
            id="address-hero"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-white/90 text-gray-900 border border-gray-300"
            placeholder="Your address"
            required
            disabled={formState === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="service-hero" className="block mb-2 text-sm font-medium text-white">
            Service Needed
          </label>
          <select
            id="service-hero"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-white/90 text-gray-900 border border-gray-300"
            required
            disabled={formState === "submitting"}
          >
            <option value="">Select a service</option>
            <option value="roof">Roof Soft Washing</option>
            <option value="gutter">Gutter Cleaning & Brightening</option>
            <option value="driveway">Driveway & Concrete Cleaning</option>
            <option value="deck-fence">Deck & Fence Cleaning</option>
            <option value="multiple">Multiple Services</option>
          </select>
        </div>

        <button type="submit" className="w-full btn-primary" disabled={formState === "submitting"}>
          {formState === "submitting" ? "Submitting..." : "Get a Free Quote"}
        </button>
      </form>
      {formState === "error" && (
        <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-center text-sm">
          ⚠️ Oops! Something went wrong. Please try again.
        </div>
      )}
    </div>
  )
}
