import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopCart from "@/components/sections/innerpages/ShopCart"
export default function PageShopCart() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="shop-style" pageName="Shipping Info" floatImage="/images/breadcrumb/breadcrumb_img_9.png" pageText="Adipiscing diam donec adipiscing tristique risus nec feugiat. Duis convallis convallis tellus id interdum velit" />
    <ShopCart />
    </Layout>
    </>
    )
}