import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamGrid from "@/components/sections/innerpages/TeamGrid"
export default function PageTeam() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="team-style" pageName="Our Team" floatImage="/images/breadcrumb/breadcrumb_img_6.png" pageText="Pharetra pharetra massa massa ultricies mi quis. Phasellus faucibus scelerisque eleifend donec " />
    <TeamGrid />
    </Layout>
    </>
    )
}