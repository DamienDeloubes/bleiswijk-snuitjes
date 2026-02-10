import { Layout, PageTitle } from "@/components/layout";
import { PersoonlijkeZorg } from "@/components/sections/diensten/persoonlijke-zorg";
import { PrijzenLijst } from "@/components/sections/diensten/prijzen-lijst";
import { FlexibelGeregeld } from "@/components/sections/diensten/flexibel-geregeld";
import { Getuigenissen } from "@/components/shared/sections/getuigenissen";

export default function Page() {
  return (
    <Layout headerStyle={2}>
      <PageTitle
        customClass="service-style"
        pageName="Mijn diensten"
        floatImage="/images/breadcrumb/breadcrumb_img_2.png"
        pageText="Van persoonlijke wandelingen tot oppas en thuisbezoeken: bij Bleiswijkse Snuitjes krijgt jouw hond rust, zorg en aandacht, volledig afgestemd op zijn behoeften."
      />
      <PersoonlijkeZorg />
      <PrijzenLijst />
      <FlexibelGeregeld />
      <Getuigenissen />
    </Layout>
  );
}
