import { Layout } from "@/components/layout/layout";
import { PageTitle } from "@/components/layout/page-title";
import { StrippenkaartPrijzen } from "@/components/sections/strippenkaart/strippenkaart-prijzen";
import ServiceDetailsSec5 from "@/components/sections/innerpages/ServiceDetailsSec5";
import ServiceDetailsSec4 from "@/components/sections/innerpages/ServiceDetailsSec4";

export default function Page() {
  return (
    <Layout headerStyle={2}>
      <PageTitle
        customClass="service-style"
        pageName="Strippenkaart"
        floatImage="/images/breadcrumb/breadcrumb_img_4.png"
        pageText="Met een strippenkaart koop je vooraf meerdere opvang of uitlaat momenten tegen een goedkopere prijs. Ideaal als je regelmatig gebruik wilt maken van mijn 1-op-1 hondenopvang."
      />
      <ServiceDetailsSec5 />
      <StrippenkaartPrijzen />
      <ServiceDetailsSec4 />
    </Layout>
  );
}
