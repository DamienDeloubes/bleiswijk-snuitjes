import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ProductDetails from "@/components/sections/innerpages/ProductDetails"
import ProductDetails2 from "@/components/sections/innerpages/ProductDetails2"
import ProductDetails3 from "@/components/sections/innerpages/ProductDetails3"
export default function PageProductDetails() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="shop-style" pageName="Product Page" floatImage="/images/breadcrumb/breadcrumb_img_9.png" pageText="Adipiscing diam donec adipiscing tristique risus nec feugiat. Duis convallis convallis tellus id interdum velit" />
    <ProductDetails />
    <ProductDetails2 />
    <ProductDetails3 />
    </Layout>
    </>
    )
}