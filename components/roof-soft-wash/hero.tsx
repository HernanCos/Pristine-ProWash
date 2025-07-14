"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RoofSoftWashHero() {
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
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofHero.jpg-tVCxYBtrFIOZUBtcCKNvvGu4S1MqHs.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container grid lg:grid-cols-5 gap-12 items-center">
        {/* Left side - Heading and subheading */}
        <div className="text-center lg:text-left lg:col-span-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Soft Wash Roof Cleaning That Protects Your Home
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Safe, effective moss removal with zero roof damage, perfect for Portland's rainy climate.
          </p>
          <div className="lg:hidden mb-8">
            <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold">
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Quote form */}
        <div className="lg:col-span-2 lg:ml-8">
          <div
            className="p-6 rounded-lg shadow-lg text-white max-w-md mx-auto lg:mx-0"
            style={{ backgroundColor: "rgba(63, 63, 70, 0.5)" }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Get a Free Roof Cleaning Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="New Roof Soft Wash Quote Request" />

              <div>
                <label htmlFor="hero-name" className="block mb-1 text-sm font-medium text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="hero-name"
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
                <label htmlFor="hero-email" className="block mb-1 text-sm font-medium text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  id="hero-email"
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
                <label htmlFor="hero-phone" className="block mb-1 text-sm font-medium text-gray-200">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="hero-phone"
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
                <label htmlFor="hero-address" className="block mb-1 text-sm font-medium text-gray-200">
                  Address
                </label>
                <input
                  type="text"
                  id="hero-address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                  placeholder="Your address"
                  required
                  disabled={formState === "submitting"}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan text-navy font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formState === "submitting"}
              >
                {formState === "submitting" ? "Submitting..." : "Get Free Roof Quote"}
              </button>
            </form>

            {/* Error Message */}
            {formState === "error" && (
              <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-center text-sm">
                ⚠️ Something went wrong. Please try again or call{" "}
                <a href="tel:9712806104" className="underline">
                  (971) 280-6104
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
