import { Layout } from "@/components/layout/layout";
import { PageTitle } from "@/components/layout/page-title";
import { ContactLijst } from "@/components/sections/contact/contact-lijst";

export default function Page() {
  return (
    <Layout headerStyle={2}>
      <PageTitle
        customClass="contact-style"
        pageName="Neem contact op"
        floatImage="/images/breadcrumb/breadcrumb_img_10.png"
        pageText="Of je nu vragen hebt, een kennismaking wilt plannen of gewoon even wilt overleggen, stuur een berichtje, ik help je met plezier!"
      />
      <ContactLijst />
    </Layout>
  );
}
