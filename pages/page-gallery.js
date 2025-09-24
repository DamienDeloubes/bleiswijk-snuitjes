import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Gallery from "@/components/sections/innerpages/Gallery"
export default function PageGallery() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="gallery-style" pageName="Our Gallery" floatImage="/images/breadcrumb/breadcrumb_img_7.png" pageText="Arcu non odio euismod lacinia at. Pretium vulputate sapien nec sagittis aliquam malesuada" />
    <Gallery />
    </Layout>
    </>
    )
}