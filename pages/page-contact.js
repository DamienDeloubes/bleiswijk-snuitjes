import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Contact from "@/components/sections/innerpages/Contact"

export default function PageContact() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle customClass="contact-style" pageName="Contacts" floatImage="/images/breadcrumb/breadcrumb_img_10.png" pageText="Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus" />
    
    <Contact />

    </Layout>
    </>
  )
}