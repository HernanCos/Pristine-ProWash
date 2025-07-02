import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import WhyChooseUs from "@/components/why-choose-us"
import Process from "@/components/process"
import AboutUs from "@/components/about-us"
import CtaBanner from "@/components/cta-banner"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Process />
      <AboutUs />
      <CtaBanner />
      <Contact />
    </>
  )
}
