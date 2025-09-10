"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Hero() {
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
    <section className="relative min-h-[50vh] md:min-h-screen flex items-center -mt-px">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Main.jpg"
          alt="Pristine ProWash background image of a clean house exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-4 md:gap-12 items-center px-2 md:px-4">
        {/* Left side - Heading and subheading */}
        <div className="text-white text-center lg:text-left lg:pl-8">
          <h1 className="text-lg md:text-5xl lg:text-[3.2rem] font-bold mb-2 md:mb-4 leading-tight">
            Pristine ProWash
          </h1>
          <p className="text-sm md:text-2xl lg:text-3xl mb-4 md:mb-8 max-w-2xl">
            Top-Rated Pressure Washing & Exterior Cleaning in Your Area
          </p>
          <div className="lg:hidden mb-4 md:mb-8">
            <Button
              asChild
              size="sm"
              className="bg-cyan hover:bg-cyan/90 text-navy font-bold text-xs md:text-base py-2 md:py-3 px-3 md:px-6"
            >
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Quote form */}
        <div
          className="p-3 md:p-6 rounded-lg shadow-lg text-white max-w-xs md:max-w-md mx-auto lg:mx-0"
          style={{ backgroundColor: "rgba(63, 63, 70, 0.5)" }}
        >
          <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-4 text-white">Get a Free Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
            <input type="hidden" name="_subject" value="New Quote Request from PristineProWash" />

            <div>
              <label htmlFor="hero-name" className="block mb-1 text-xs md:text-sm font-medium text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                id="hero-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 md:p-3 rounded-md bg-white text-gray-900 border border-gray-300 text-sm md:text-base"
                placeholder="Your name"
                required
                disabled={formState === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="hero-email" className="block mb-1 text-xs md:text-sm font-medium text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                id="hero-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 md:p-3 rounded-md bg-white text-gray-900 border border-gray-300 text-sm md:text-base"
                placeholder="your@email.com"
                required
                disabled={formState === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="hero-phone" className="block mb-1 text-xs md:text-sm font-medium text-gray-200">
                Phone Number
              </label>
              <input
                type="tel"
                id="hero-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 md:p-3 rounded-md bg-white text-gray-900 border border-gray-300 text-sm md:text-base"
                placeholder="(555) 555-5555"
                required
                disabled={formState === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="hero-service" className="block mb-1 text-xs md:text-sm font-medium text-gray-200">
                Service Needed
              </label>
              <select
                id="hero-service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full p-2 md:p-3 rounded-md bg-white text-gray-900 border border-gray-300 text-sm md:text-base"
                required
                disabled={formState === "submitting"}
              >
                <option value="">Select a service</option>
                <option value="roof">Roof Soft Washing</option>
                <option value="house">House Soft Washing</option>
                <option value="driveway">Driveway & Concrete Cleaning</option>
                <option value="gutter">Gutter Cleaning & Brightening</option>
                <option value="deck">Deck & Fence Cleaning</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan text-navy font-bold py-2 md:py-3 px-4 md:px-6 rounded-md transition-all duration-300 hover:bg-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              disabled={formState === "submitting"}
            >
              {formState === "submitting" ? "Submitting..." : "Get Free Quote"}
            </button>
          </form>

          {formState === "error" && (
            <div className="mt-2 md:mt-4 p-2 md:p-3 bg-red-100 text-red-800 rounded-lg text-center text-xs md:text-sm">
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
