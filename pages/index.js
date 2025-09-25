import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Funfact from "@/components/sections/home2/Funfact"
import PetCategory from "@/components/sections/home2/PetCategory"
import TopProduct from "@/components/sections/home2/TopProduct"
import OfferBanner from "@/components/sections/home2/OfferBanner"
import ShopProduct from "@/components/sections/home2/ShopProduct"
import Subscription from "@/components/sections/home2/Subscription"
import BlogPost from "@/components/sections/home2/BlogPost"
import Instagram from "@/components/sections/home2/Instagram"
import Service from "@/components/sections/home/Service"


export default function Home2() {

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner />
        <Funfact />
        <Service />
        <PetCategory />
        <TopProduct />
        <OfferBanner />
        <ShopProduct />
        <Subscription />
        <BlogPost />
        <Instagram />
      </Layout>
    </>
  )
}