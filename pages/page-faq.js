import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Faq from "@/components/sections/innerpages/Faq"
export default function PageFaq() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>

    <PageTitle customClass="faq-style" pageName="FAQ" floatImage="/images/breadcrumb/breadcrumb_img_8.png" pageText="Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt" />
    <Faq />
    </Layout>
    </>
    )
}