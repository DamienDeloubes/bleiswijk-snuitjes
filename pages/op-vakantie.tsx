import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ServiceDetailsSec4 from "@/components/sections/innerpages/ServiceDetailsSec4";
import { WaaromVakantieOpvang } from "@/components/sections/op-vakantie/waarom-vakantie-opvang";
import { VakantiePrijzen } from "@/components/sections/op-vakantie/vakantie-prijzen";

export default function Page() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle
          customClass="service-style"
          pageName="Op vakantie?"
          floatImage="/images/breadcrumb/breadcrumb_img_4.png"
          pageText="Ga zorgeloos weg terwijl jouw hond persoonlijke 1-op-1 aandacht krijgt, vaste routines behoudt en liefdevol wordt verzorgd."
        />
        <WaaromVakantieOpvang />
        <VakantiePrijzen />
        <ServiceDetailsSec4 />
      </Layout>
    </>
  );
}
