import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ServiceGrid from "@/components/sections/innerpages/ServiceGrid"
import Features from "@/components/sections/home/Features"
import PriceService from "@/components/sections/innerpages/PriceService"

import Team from "@/components/sections/innerpages/Team"
import ServiceGallery from "@/components/sections/innerpages/ServiceGallery"

export default function PageService() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="service-style" pageName="Our Services" floatImage="/images/breadcrumb/breadcrumb_img_2.png" pageText="Blandit cursus risus at ultrices. Enim sit amet venenatis urna cursus eget nunc scelerisque" />
    <ServiceGrid />
    <Features />
    <PriceService />
    <Team />    
    <ServiceGallery />

    </Layout>
    </>
    )
}