import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewsGrid from "@/components/sections/innerpages/NewsGrid"
export default function PageNews() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="news-style" pageName="Our Blog" floatImage="/images/breadcrumb/breadcrumb_img_5.png" pageText="Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Amet purus gravida quis blandit turpis" />
    <NewsGrid />
    </Layout>
    </>
    )
}