import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import StripCard from "@/components/sections/innerpages/strip-card";
import ServiceDetailsSec5 from "@/components/sections/innerpages/ServiceDetailsSec5";
import ServiceDetailsSec4 from "@/components/sections/innerpages/ServiceDetailsSec4";

export default function PageServiceDetails() {
  return (
    <>
      <Layout headerStyle={3}>
        <PageTitle
          customClass="service-style"
          pageName="Strippenkaart"
          floatImage="/images/breadcrumb/breadcrumb_img_4.png"
          pageText="Met een strippenkaart koop je vooraf meerdere opvang of uitlaat momenten tegen een goedkopere prijs. Ideaal als je regelmatig gebruik wilt maken van mijn 1-op-1 hondenopvang."
        />
        <ServiceDetailsSec5 />
        <StripCard />
        <ServiceDetailsSec4 />
      </Layout>
    </>
  );
}
