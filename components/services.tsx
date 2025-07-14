import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Roof Soft Washing",
      description: "Safe moss removal without roof damage. Plant-safe solutions perfect for Portland's climate.",
      image: "/Roof.jpg",
      link: "/services/roof-soft-wash",
    },
    {
      title: "House Soft Washing",
      description: "Gentle siding cleaning that removes mildew and algae without damaging paint or materials.",
      image: "/images/house-cleaning.jpg",
      link: "/services/house-soft-wash",
    },
    {
      title: "Driveway & Concrete Cleaning",
      description: "Professional surface cleaning to remove oil stains, moss, and grime from concrete surfaces.",
      image: "/Driveway.jpg",
      link: "/services/driveway-concrete-cleaning",
    },
    {
      title: "Gutter Cleaning & Brightening",
      description: "Complete debris removal and exterior brightening to restore gutters and improve drainage.",
      image: "/Gutter.jpg",
      link: "/services/gutter-cleaning",
    },
    {
      title: "Deck & Fence Cleaning",
      description: "Wood-safe cleaning that restores natural color and prevents algae damage to outdoor structures.",
      image: "/Deck&Fence.png",
      link: "/services/deck-fence-cleaning",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional exterior cleaning services designed for Portland's unique climate and your home's specific
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild className="w-full bg-cyan hover:bg-cyan/90 text-navy font-bold">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
