import Image from "next/image"

export default function WhatHappensWithoutWashing() {
  return (
    <section className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">
          What Happens When You Don't Wash Your Roof
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofNeglected-PmvalujquWZn6S32qNVspuBugHkHst.png"
              alt="Severely neglected roof with heavy moss growth and potential structural damage"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Neglecting your roof leads to more than just unsightly stains. Moss anchors itself beneath shingles,
              lifting them and trapping moisture against the roof deck. This constant dampness causes shingles to
              degrade faster, promotes wood rot, and can lead to internal leaks and mold issues inside your home.
              Especially in Portland's wet environment, unchecked moss growth dramatically shortens roof life.
            </p>
            <p>
              Excess moss and debris also add unnecessary weight to your roof structure, contributing to sagging and
              potential long-term damage, especially on older homes. From a financial perspective, insurance companies
              and home inspectors view moss-covered roofs as a major red flag, reducing property value and making future
              sales more difficult.
            </p>
            <p>
              Homeowners associations across Portland often issue fines for visible roof moss, citing neighborhood
              upkeep and safety concerns. Regular roof soft washing is a simple, cost-effective way to avoid premature
              roof replacement, prevent structural damage, and maintain both the beauty and functionality of your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
