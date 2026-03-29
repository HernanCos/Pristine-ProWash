"use client";
import { useState } from "react";
import Image from "next/image";

const FORMSPREE_ID = "xnjopbvb";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Page header */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <Image
          src="/images/hero-contact.jpg"
          alt="Wooden logs background"
          fill
          className="object-cover opacity-25"
          preload
          sizes="100vw"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get a Free Quote</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Fill out the form, call, or text us. We respond within the hour and provide a no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* Contact options sidebar */}
            <div className="md:col-span-2 space-y-5">
              <h2 className="text-xl font-bold text-brand-dark">Contact Us Directly</h2>

              <a
                href="tel:+19712806104"
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Call or Text</p>
                  <p className="font-bold text-brand-dark">(971) 280-6104</p>
                </div>
              </a>

              <a
                href="sms:+19712806104"
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Text Us</p>
                  <p className="font-bold text-brand-dark">(971) 280-6104</p>
                </div>
              </a>

              <a
                href="mailto:info@pristineprowash.net"
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 hover:border-brand-blue hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <p className="font-bold text-brand-dark text-sm">info@pristineprowash.net</p>
                </div>
              </a>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-brand-dark mb-1">Our Guarantee</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  100% satisfaction guaranteed. If you&apos;re not happy with the results, we&apos;ll come back and re-clean for free — no questions asked.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-brand-dark mb-1">Service Area</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We serve all of Oregon. Portland, Eugene, Salem, Bend, Medford, and everywhere in between.
                </p>
              </div>
            </div>

            {/* Quote form */}
            <div className="md:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-brand-dark mb-1">Request a Free Estimate</h2>
              <p className="text-sm text-gray-500 mb-6">We&apos;ll respond within the hour during business hours.</p>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <svg className="w-10 h-10 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-bold text-green-800 mb-1">Request Received!</p>
                  <p className="text-green-700 text-sm">Thanks — we&apos;ll be in touch within the hour. You can also call or text us at (971) 280-6104.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot anti-spam field */}
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(503) 555-1234"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@email.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="House Wash">House Wash</option>
                        <option value="Roof Soft Wash">Roof Soft Wash</option>
                        <option value="Driveway & Concrete">Driveway &amp; Concrete</option>
                        <option value="Deck Cleaning">Deck Cleaning</option>
                        <option value="Fence Cleaning">Fence Cleaning</option>
                        <option value="Multiple / Not Sure">Multiple / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City / Zip Code *</label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        placeholder="Portland, OR"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">Timeframe</label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition bg-white"
                    >
                      <option value="">Select timeframe...</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 2 weeks">Within 2 weeks</option>
                      <option value="1-3 months">1–3 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us a bit about what you need cleaned..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      Something went wrong. Please try again or call us at (971) 280-6104.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white py-3.5 rounded-xl font-bold text-sm transition-colors"
                  >
                    {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    No commitment required. We&apos;ll respond within the hour during business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
