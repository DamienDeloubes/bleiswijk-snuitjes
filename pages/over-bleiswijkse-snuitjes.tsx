import { Layout } from "@/components/layout/layout";

import About from "@/components/sections/innerpages/About";
import Consulting from "@/components/sections/innerpages/Consulting";
import { WieZitErAchter } from "@/components/sections/home/wie-zit-erachter";

export default function Page() {
  return (
    <Layout headerStyle={2}>
      <section className="page-title">
        <div className="container">
          <div className="title-wrapper">
            <h1 className="title">
              Over
              <br />
              Bleiswijkse
              <br />
              Snuitjes
            </h1>
            <p className="text">
              Bij Bleiswijkse Snuitjes krijgt jouw hond alle aandacht die hij
              verdient. Van wandelingen tot oppas en thuisbezoeken, altijd
              1-op-1 en volledig afgestemd op jouw viervoeter.
            </p>
          </div>
        </div>
        <img
          className="about-style"
          src="/images/breadcrumb/breadcrumb_img_1.png"
          alt=""
        />
      </section>

      <WieZitErAchter includeBottomPadding />
      <Consulting />
      <About />
    </Layout>
  );
}
