import { Layout } from "@/components/layout/layout";
import { PageTitle } from "@/components/layout/page-title";
import ServiceDetailsSec1 from "@/components/sections/innerpages/ServiceDetailsSec1";
import ServiceDetailsSec2 from "@/components/sections/innerpages/ServiceDetailsSec2";
import ServiceDetailsSec3 from "@/components/sections/innerpages/ServiceDetailsSec3";
import ServiceDetailsSec4 from "@/components/sections/innerpages/ServiceDetailsSec4";

export default function Page() {
  return (
    <Layout headerStyle={2}>
      <PageTitle
        customClass="service-style"
        pageName="Mijn diensten"
        floatImage="/images/breadcrumb/breadcrumb_img_2.png"
        pageText="Van persoonlijke wandelingen tot oppas en thuisbezoeken: bij Bleiswijkse Snuitjes krijgt jouw hond rust, zorg en aandacht, volledig afgestemd op zijn behoeften."
      />
      <ServiceDetailsSec1 />
      <ServiceDetailsSec2 />
      <ServiceDetailsSec3 />
      <ServiceDetailsSec4 />
    </Layout>
  );
}
