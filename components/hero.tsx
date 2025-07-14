import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative h-[60vh] min-h-[400px] md:h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/Main.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Pristine ProWash</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
          Top-Rated Pressure Washing & Exterior Cleaning in Your Area
        </p>
        <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold">
          <Link href="#contact">Get a Free Quote</Link>
        </Button>
      </div>
    </section>
  )
}
