import Image from "next/image"

export default function Benefits() {
  return (
    <section className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            {/* Benefits image here */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABOUT.jpg-uTZDWXawas4AWqu5ciegbNqVsImD68.jpeg"
              alt="Professional pressure washing service cleaning a brick house exterior"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-navy">Benefit of a Pristine Exterior</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Pressure washing does more than just look good; it revives the integrity of every surface on your home.
                Gentle, eco-safe soft washing removes moss and algae from roofs and siding, preventing rot, leaks, and
                costly repairs before they start.
              </p>
              <p>
                A deep driveway and concrete clean restores curb appeal instantaneously, lifting oil spots, dirt, and
                mildew so that your walkways and patios sparkle like new, making an unforgettable first impression on
                guests and passersby.
              </p>
              <p>
                Beyond aesthetics, regular pressure washing improves safety. Slippery algae and mold on decks, steps,
                and sidewalks can lead to dangerous falls. A pristine exterior means a safer environment for your family
                and visitors alike.
              </p>
              <p>
                Finally, routine cleaning extends the life of your property's materials. Gutter channels flow freely,
                paint stays intact longer, and wood decks are ready for stain or sealant without expensive prep work.
                Invest in a clean today, and your home will thank you for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
