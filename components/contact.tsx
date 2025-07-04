"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    try {
      // Simulate form submission - replace with actual endpoint
      const response = await fetch("https://formspree.io/f/yourFormID", {
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
        setFormState("success")
        setFormData({ name: "", phone: "", address: "", service: "", message: "" })
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
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Request a Free Quote</h3>

            {/* Quote Request Form */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {/* 
                FORM SETUP INSTRUCTIONS:
                
                For Webflow hosting:
                - Ensure form has: method="post" data-name="Quote Request Form" id="quote-form" name="wf-form-Quote-Request-Form"
                - Go to Webflow Dashboard → Forms → set recipient to: info@pristineprowash.net
                - If no emails received, upgrade to paid Site Plan or connect Zapier > Email by Zapier
                
                For external hosting:
                - Sign up free at Formspree.io
                - Replace 'yourFormID' below with actual Formspree form ID
                - Verify recipient address = info@pristineprowash.net
              */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                method="POST"
                data-name="Quote Request Form"
                id="quote-form"
                name="wf-form-Quote-Request-Form"
              >
                <input type="hidden" name="_subject" value="New Quote Request from PristineProWash" />

                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-md"
                    placeholder="Your name"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-md"
                    placeholder="(555) 555-5555"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-md"
                    placeholder="Your address"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-md"
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
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded-md"
                    placeholder="Tell us more about your needs..."
                    disabled={formState === "submitting"}
                  ></textarea>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">Upload Photos (optional)</label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">PNG, JPG or JPEG (MAX. 5MB)</p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        multiple
                        disabled={formState === "submitting"}
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? "Submitting..." : "Submit Quote Request"}
                </button>
              </form>

              {/* Success Message */}
              {formState === "success" && (
                <div
                  className="mt-4 p-6 bg-green-900 text-white rounded-lg text-center"
                  style={{ background: "#0f0f0f" }}
                >
                  ✅ Request sent successfully! We'll be in touch within 24 hours.
                </div>
              )}

              {/* Error Message */}
              {formState === "error" && (
                <div
                  className="mt-4 p-6 bg-red-900 text-white rounded-lg text-center"
                  style={{ background: "#330000" }}
                >
                  ⚠️ Oops! Something went wrong. Please email{" "}
                  <a href="mailto:info@pristineprowash.net" className="text-white underline hover:text-cyan">
                    info@pristineprowash.net
                  </a>
                  .
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Service Area</h3>

            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
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
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a href="tel:9712806104" className="text-gray-300 hover:text-cyan transition-colors">
                    (971) 280-6104
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:info@pristineprowash.net" className="text-gray-300 hover:text-cyan transition-colors">
                    info@pristineprowash.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Service Areas</h4>
                  <p className="text-gray-300">Portland, Eugene, and surrounding areas within a 30-mile radius</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
