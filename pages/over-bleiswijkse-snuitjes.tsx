import { Layout, PageTitle } from "@/components/layout";

import { OverBleiswijkseSnuitjes } from "@/components/sections/over-bleiswijkse-snuitjes/over-bleiswijkse-snuitjes";
import { ZoWerktHet } from "@/components/sections/over-bleiswijkse-snuitjes/zo-werkt-het";
import { WieZitErAchter } from "@/components/sections/home/wie-zit-erachter";

export default function Page() {
  return (
    <Layout headerStyle={2}>
      <PageTitle
        pageName={
          <span>
            Over
            <br />
            Bleiswijkse
            <br />
            Snuitjes
          </span>
        }
        pageText="Bij Bleiswijkse Snuitjes krijgt jouw hond alle aandacht die hij verdient. Van wandelingen tot oppas en thuisbezoeken, altijd 1-op-1 en volledig afgestemd op jouw viervoeter."
        floatImage="/images/breadcrumb/breadcrumb_img_1.png"
        customClass="about-style"
      />
      <WieZitErAchter includeBottomPadding />
      <ZoWerktHet />
      <OverBleiswijkseSnuitjes />
    </Layout>
  );
}
