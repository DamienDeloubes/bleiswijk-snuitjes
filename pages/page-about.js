import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"

import About from "@/components/sections/innerpages/About"
import Consulting from "@/components/sections/innerpages/Consulting"
import Faq from "@/components/sections/home/Faq"
import Video from "@/components/sections/innerpages/Video"


export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="about-style" pageName="About Us" floatImage="/images/breadcrumb/breadcrumb_img_1.png" pageText="Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus" />

    <About />
    <Consulting />
    <Faq />
    <Video />

    
    </Layout>
    </>
    )
}