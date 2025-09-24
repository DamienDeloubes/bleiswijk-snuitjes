import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Shop from "@/components/sections/innerpages/Shop"
export default function PageGallery() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="shop-style" pageName="Shop" floatImage="/images/breadcrumb/breadcrumb_img_4.png" pageText="Nisl rhoncus mattis rhoncus urna neque. Montes nascetur ridiculus mus mauris vitae ultricies" />
    <Shop />
    </Layout>
    </>
    )
}