import Layout from "@/components/layout/Layout";

import About from "@/components/sections/innerpages/About";
import Consulting from "@/components/sections/innerpages/Consulting";
import Faq from "@/components/sections/home/Faq";

export default function PageAbout() {
  return (
    <>
      <Layout headerStyle={3}>
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

        <Faq includeBottomPadding />
        <Consulting />
        <About />
      </Layout>
    </>
  );
}
