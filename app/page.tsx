import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import Testimonials from "@/components/testimonials"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Benefits from "@/components/benefits"
import WhyChooseUs from "@/components/why-choose-us"
import Process from "@/components/process"
import AboutUs from "@/components/about-us"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Testimonials />
      <Services />
      <Gallery />
      <Benefits />
      <WhyChooseUs />
      <Process />
      <AboutUs />
      <Contact />
    </main>
  )
}
