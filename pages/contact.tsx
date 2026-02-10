import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Contact from "@/components/sections/innerpages/Contact";

export default function PageContact() {
  return (
    <>
      <Layout headerStyle={3}>
        <PageTitle
          customClass="contact-style"
          pageName="Neem contact op"
          floatImage="/images/breadcrumb/breadcrumb_img_10.png"
          pageText="Of je nu vragen hebt, een kennismaking wilt plannen of gewoon even wilt overleggen, stuur een berichtje, ik help je met plezier!"
        />

        <Contact />
      </Layout>
    </>
  );
}
