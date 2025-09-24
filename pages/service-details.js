import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ServiceDetailsSec1 from "@/components/sections/innerpages/ServiceDetailsSec1"
import ServiceDetailsSec2 from "@/components/sections/innerpages/ServiceDetailsSec2"
import ServiceDetailsSec3 from "@/components/sections/innerpages/ServiceDetailsSec3"
import ServiceDetailsSec4 from "@/components/sections/innerpages/ServiceDetailsSec4"
import ServiceDetailsSec5 from "@/components/sections/innerpages/ServiceDetailsSec5"
import ServiceDetailsSec6 from "@/components/sections/innerpages/ServiceDetailsSec6"

export default function PageServiceDetails() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="servicedetails-style" pageName="Pet Sitting" floatImage="/images/breadcrumb/breadcrumb_img_3.png" pageText="Blandit cursus risus at ultrices. Enim sit amet venenatis urna cursus eget nunc scelerisque" />
    <ServiceDetailsSec1 />
    <ServiceDetailsSec2 />
    <ServiceDetailsSec3 />
    <ServiceDetailsSec4 />
    <ServiceDetailsSec5 />
    <ServiceDetailsSec6 />
    
    </Layout>
    </>
    )
}