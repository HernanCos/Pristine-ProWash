"use client"

import { Phone, FileText } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function MobileNav() {
  const isMobile = useMobile()

  if (!isMobile) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.05)] py-3 px-4 z-50">
      <div className="flex items-center justify-between">
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 bg-cta text-white py-3 rounded-l-md font-semibold"
        >
          <FileText size={20} />
          <span>Get a Free Quote</span>
        </a>
        <a
          href="tel:9712806104"
          className="flex-1 flex items-center justify-center gap-2 bg-white text-navy border border-navy py-3 rounded-r-md font-semibold"
          onClick={() => {
            if (typeof window.gtag === "function") {
              window.gtag("event", "conversion", {
                send_to: "AW-17289761916/O-RxCOT-u-0aEPyos7RA",
              })
            }
          }}
        >
          <Phone size={20} />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  )
}
