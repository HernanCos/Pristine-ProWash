"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function HouseSoftWashHero() {
  const router = useRouter()
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "house",
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
          _subject: "New House Soft Wash Quote Request from PristineProWash",
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
    <section className="relative min-h-screen flex items-center -mt-px">
      <div className="absolute inset-0 z-0">
        <Image
          src="/House.jpg"
          alt="Professional house soft washing service in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Heading and subheading */}
        <div className="text-white text-center lg:text-left lg:pl-8">
          <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold mb-4 leading-tight">
            House Soft Washing That Protects Your Siding
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-2xl">
            Safe siding cleaning without damage. Remove mildew, algae & dirt with plant-safe solutions.
          </p>
          <div className="lg:hidden mb-8">
            <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold">
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Quote form */}
        <div
          className="p-6 rounded-lg shadow-lg text-white max-w-md mx-auto lg:mx-0"
          style={{ backgroundColor: "rgba(63, 63, 70, 0.5)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Get a Free House Washing Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_subject" value="New House Soft Wash Quote Request from PristineProWash" />
            <input type="hidden" name="service" value="house" />

            <div>
              <label htmlFor="house-name" className="block mb-1 text-sm font-medium text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                id="house-name"
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
              <label htmlFor="house-email" className="block mb-1 text-sm font-medium text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                id="house-email"
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
              <label htmlFor="house-phone" className="block mb-1 text-sm font-medium text-gray-200">
                Phone Number
              </label>
              <input
                type="tel"
                id="house-phone"
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
              <label htmlFor="house-address" className="block mb-1 text-sm font-medium text-gray-200">
                Property Address
              </label>
              <input
                type="text"
                id="house-address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 rounded-md bg-white text-gray-900 border border-gray-300"
                placeholder="123 Main St, City, State"
                required
                disabled={formState === "submitting"}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan text-navy font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={formState === "submitting"}
            >
              {formState === "submitting" ? "Submitting..." : "Get Free House Washing Quote"}
            </button>
          </form>

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
    </section>
  )
}
