import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewsDetails from "@/components/sections/innerpages/NewsDetails"
export default function PageNewsDetails() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="news-style" pageName="SINGLE POST" floatImage="/images/breadcrumb/breadcrumb_img_5.png" pageText="Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Amet purus gravida quis blandit turpis" />
    <NewsDetails />
    </Layout>
    </>
    )
}