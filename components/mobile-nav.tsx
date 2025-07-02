"use client"

import { Phone, FileText } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function MobileNav() {
  const isMobile = useMobile()

  if (!isMobile) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-charcoal shadow-lg py-3 px-4 z-50">
      <div className="flex items-center justify-between">
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 bg-cyan text-white py-3 rounded-l-md"
        >
          <FileText size={20} />
          <span className="font-medium">Get a Free Quote</span>
        </a>
        <a
          href="tel:9712806104"
          className="flex-1 flex items-center justify-center gap-2 bg-white text-charcoal py-3 rounded-r-md"
        >
          <Phone size={20} />
          <span className="font-medium">Call Now</span>
        </a>
      </div>
    </div>
  )
}
