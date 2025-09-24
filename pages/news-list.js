import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewsList from "@/components/sections/innerpages/NewsList"
export default function PageNewsList() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="News List" />
    <NewsList />
    </Layout>
    </>
    )
}