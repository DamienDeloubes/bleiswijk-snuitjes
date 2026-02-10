import { Layout } from "@/components/layout/layout";
import { PageTitle } from "@/components/layout/page-title";
import { StrippenkaartPrijzen } from "@/components/sections/strippenkaart/strippenkaart-prijzen";
import { WaaromEenStrippenkaart } from "@/components/sections/strippenkaart/waarom-een-strippenkaart";
import { Getuigenissen } from "@/components/shared/sections/getuigenissen";

export default function Page() {
  return (
    <Layout headerStyle={2}>
      <PageTitle
        customClass="service-style"
        pageName="Strippenkaart"
        floatImage="/images/banner/dogs_img_3.png"
        pageText="Met een strippenkaart koop je vooraf meerdere opvang of uitlaat momenten tegen een goedkopere prijs. Ideaal als je regelmatig gebruik wilt maken van mijn 1-op-1 hondenopvang."
      />
      <WaaromEenStrippenkaart />
      <StrippenkaartPrijzen />
      <Getuigenissen />
    </Layout>
  );
}
