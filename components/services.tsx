import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"

const services = [
  {
    name: "Roof Soft Wash",
    desc: "Low-pressure, eco-safe removal of moss & algae that extends shingle life.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <path d="M9 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2z"></path>
        <path d="M7 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
        <path d="M18 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
      </svg>
    ),
    slug: "roof-soft-wash",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roof.jpg-7GiK0AyKqKkFAQJoVFxqIYbqeu6PbO.jpeg",
  },
  {
    name: "House Soft Wash",
    desc: "Gentle soft wash to remove dirt and mildew from all exterior surfaces.",
    icon: <Home className="mb-4" size={32} />,
    slug: "house-soft-wash",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/House.jpg-77nYd4w4gbBPlEbE69fem3YaYAjrRH.webp",
  },
  {
    name: "Driveway & Concrete Cleaning",
    desc: "Surface-cleaner wash for driveways, patios, and sidewalks, no streaks.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="3" y1="15" x2="21" y2="15"></line>
        <line x1="9" y1="3" x2="9" y2="21"></line>
        <line x1="15" y1="3" x2="15" y2="21"></line>
      </svg>
    ),
    slug: "driveway-cleaning",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Concrete2.jpg-7ju4Zs8kxzUpKxbxfIeNkEYwGmtNaV.jpeg",
  },
  {
    name: "Gutter Cleaning & Brightening",
    desc: "Debris removal, downspout flush, and oxidation rinse for like-new gutters.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4"
      >
        <path d="M4 5h16v4H4z" />
        <path d="M12 9v5" />
        <path d="M12 18a2 2 0 0 1-2-2c0-1.1.8-2 2-2s2 .9 2 2a2 2 0 0 1-2 2z" />
      </svg>
    ),
    slug: "gutter-cleaning",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gutter.jpg-bFA29F1coFtrq5NX2CMasGgX9l6ciZ.jpeg",
  },
  {
    name: "Deck & Fence Cleaning",
    desc: "Gentle wood wash restores color and preps surfaces for stain or sealant.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4"
      >
        <rect width="20" height="4" x="2" y="6" rx="1"></rect>
        <rect width="20" height="4" x="2" y="11" rx="1"></rect>
        <rect width="20" height="4" x="2" y="16" rx="1"></rect>
      </svg>
    ),
    slug: "deck-fence-cleaning",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Deck%26Fence-IeCszb8eOs8tR31fbArxUVKfWe02q0.png",
  },
]

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
  <div
    className="relative bg-cover bg-center rounded-lg shadow-lg h-80 w-full max-w-xs flex flex-col justify-between text-white overflow-hidden"
    style={{ backgroundImage: `url(${service.image})` }}
  >
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 p-6 flex flex-col items-center text-center flex-grow justify-center">
      <div className="text-cyan">{service.icon}</div>
      <h3 className="text-xl font-bold mb-3">{service.name}</h3>
      <p className="text-sm">{service.desc}</p>
    </div>
    <div className="relative z-10 p-4 text-center">
      <Link
        href={service.slug === "roof-soft-wash" ? "/services/roof-soft-wash" : "#contact"}
        className="font-semibold hover:text-cyan transition-colors inline-flex items-center gap-1"
      >
        <span>Learn More</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  </div>
)

export default function Services() {
  return (
    <section id="services" className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Our Services</h2>

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-8">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.slice(3, 5).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
