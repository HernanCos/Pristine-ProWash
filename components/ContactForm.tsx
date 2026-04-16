"use client";
import { useState } from "react";

const FORMSPREE_ID = "xnjopbvb";

export default function ContactForm() {
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
    <div className="md:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
      <h2 className="text-xl font-bold text-brand-dark mb-1">Request a Free Estimate</h2>
      <p className="text-sm text-gray-500 mb-6">We&apos;ll respond within the hour during business hours.</p>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <svg className="w-10 h-10 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-bold text-green-800 mb-1">Request Received!</p>
          <p className="text-green-700 text-sm">Thanks , we&apos;ll be in touch within the hour. You can also call or text us at (971) 280-6104.</p>
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
  );
}
