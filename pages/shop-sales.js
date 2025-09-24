import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopSales from "@/components/sections/innerpages/ShopSales"
export default function PageShopSales() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="shop-style" pageName="Shop Sales" floatImage="/images/breadcrumb/breadcrumb_img_9.png" pageText="Adipiscing diam donec adipiscing tristique risus nec feugiat. Duis convallis convallis tellus id interdum velit" />
    <ShopSales />
    </Layout>
    </>
    )
}