import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShippingInfo from "@/components/sections/innerpages/ShippingInfo"
export default function PageShippingpInfo() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="shop-style" pageName="Shipping Info" floatImage="/images/breadcrumb/breadcrumb_img_9.png" pageText="Adipiscing diam donec adipiscing tristique risus nec feugiat. Duis convallis convallis tellus id interdum velit" />
    <ShippingInfo />
    </Layout>
    </>
    )
}