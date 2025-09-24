import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home/Banner"
import Service from "@/components/sections/home/Service"
import Faq from "@/components/sections/home/Faq"
import Gallery from "@/components/sections/home/Gallery"
import Pricing from "@/components/sections/home/Pricing"
import Testimonial from "@/components/sections/home/Testimonial"
import Features from "@/components/sections/home/Features"
import Team from "@/components/sections/home/Team"
import Contact from "@/components/sections/home/Contact"

export default function Home() {

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Service />
        <Faq />
        <Gallery />
        <Pricing />
        <Testimonial />
        <Features />
        <Team />
        <Contact />
      </Layout>
    </>
  )
}