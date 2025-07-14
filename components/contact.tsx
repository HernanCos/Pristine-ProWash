"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Contact() {
  const router = useRouter()
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
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
          _subject: "New Quote Request from PristineProWash",
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
    <section id="contact" className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-navy">Request a Free Quote</h3>

            {/* Quote Request Form */}
            <div className="p-6 rounded-lg shadow-lg bg-gray-50">
              <form onSubmit={handleSubmit} className="space-y-4" method="POST">
                <input type="hidden" name="_subject" value="New Quote Request from PristineProWash" />

                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
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
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                    placeholder="your@email.com"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
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
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                    placeholder="Your address"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-700">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                    required
                    disabled={formState === "submitting"}
                  >
                    <option value="">Select a service</option>
                    <option value="roof">Roof Soft Washing</option>
                    <option value="gutter">Gutter Cleaning & Brightening</option>
                    <option value="driveway">Driveway & Concrete Cleaning</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                    placeholder="Tell us more about your needs..."
                    disabled={formState === "submitting"}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? "Submitting..." : "Submit Quote Request"}
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

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-navy">Our Service Area</h3>

            <div className="rounded-lg overflow-hidden shadow-lg mb-8 bg-gray-100">
              <div className="relative h-[300px]">
                <Image
                  src="/images/map.png"
                  alt="Service area map showing Portland and Eugene, Oregon with surrounding neighborhoods"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-navy text-lg md:text-xl">Phone</h4>
                  <a href="tel:9712806104" className="text-gray-600 hover:text-navy transition-colors">
                    (971) 280-6104
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-navy text-lg md:text-xl">Email</h4>
                  <a href="mailto:info@pristineprowash.net" className="text-gray-600 hover:text-navy transition-colors">
                    info@pristineprowash.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-navy text-lg md:text-xl">Service Areas</h4>
                  <p className="text-gray-600 text-base">
                    Portland, Eugene, and surrounding areas within a 30-mile radius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
