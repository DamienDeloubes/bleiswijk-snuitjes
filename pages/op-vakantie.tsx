import { Layout } from "@/components/layout/layout";
import { PageTitle } from "@/components/layout/page-title";
import { Getuigenissen } from "@/components/shared/sections/getuigenissen";
import { WaaromVakantieOpvang } from "@/components/sections/vakantie/waarom-vakantie-opvang";
import { VakantiePrijzen } from "@/components/sections/vakantie/vakantie-prijzen";

export default function Page() {
  return (
    <Layout headerStyle={2}>
      <PageTitle
        customClass="service-style"
        pageName="Op vakantie?"
        floatImage="/images/breadcrumb/breadcrumb_img_4.png"
        pageText="Ga zorgeloos weg terwijl jouw hond persoonlijke 1-op-1 aandacht krijgt, vaste routines behoudt en liefdevol wordt verzorgd."
      />
      <WaaromVakantieOpvang />
      <VakantiePrijzen />
      <Getuigenissen />
    </Layout>
  );
}
