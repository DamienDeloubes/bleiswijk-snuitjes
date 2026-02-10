import Link from "next/link";

export const VakantiePrijzen = () => {
  return (
    <>
      <section
        className="service_section bg_gray section_space_lg pb-0"
        style={{ backgroundImage: "url(images/shape/shape_paws_bg_2.svg)" }}
      >
        <div className="container">
          <div className="section_title text-center mb-2">
            <div className="row justify-content-center">
              <div className="col col-lg-5">
                <h2 className="title_text">
                  <span className="sub_title">Eerlijke prijzen</span>
                  Speciaal voor vakanties
                </h2>
                <p className="mb-0">
                  Bundels met opvang, wandelingen en aandacht, voor korte
                  tripjes tot langere vakanties.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col col-lg-6">
              <div className="services_price_items_wrap">
                <div className="service_price_item">
                  <div className="item_image">
                    <img
                      src="/images/about/oppashond-die-netjes-luistert-naar-zit-commando.jpg"
                      alt="Oppashond wordt voor 2 dagen opgevangen"
                    />
                  </div>
                  <div className="item_content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="service_time">Weekendje Weg</div>
                      <div className="item_price">
                        <del className="discount">€104,00</del>
                        <span>€95,00</span>
                      </div>
                    </div>
                    <h3 className="item_title mb-0">
                      Voor een korte break met complete zorg.
                      <br />
                      {"(10 dagen + 10 nachten opvang)"}
                    </h3>
                  </div>
                </div>

                <div className="service_price_item">
                  <div className="item_image">
                    <img
                      src="/images/about/oppashond-die-netjes-luistert-naar-zit-commando.jpg"
                      alt="Oppashond wordt voor 5 dagen opgevangen"
                    />
                  </div>
                  <div className="item_content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="service_time">Weekje Weg</div>
                      <div className="item_price">
                        <del className="discount">€260,00</del>
                        <span>€225,00</span>
                      </div>
                    </div>
                    <h3 className="item_title mb-0">
                      Ideaal voor een volle werkweek of vakantie.
                      <br />
                      {"(5 dagen + 5 nachten opvang)"}
                    </h3>
                  </div>
                </div>

                <div className="service_price_item">
                  <div className="item_image">
                    <img
                      src="/images/about/oppashond-die-netjes-luistert-naar-zit-commando.jpg"
                      alt="Oppashond wordt voor 10 dagen opgevangen"
                    />
                  </div>
                  <div className="item_content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="service_time">Lang Weg</div>
                      <div className="item_price">
                        <del className="discount">€520,00</del>
                        <span>€450,00</span>
                      </div>
                    </div>
                    <h3 className="item_title mb-0">
                      Voor langere vakanties met maximale rust.
                      <br />
                      {"(10 dagen + 10 nachten opvang)"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col col-lg-4">
              <div className="section_title text-center">
                <p>
                  Stuur gerust een WhatsAppje om te checken of er plek is, dan
                  denk ik graag met je mee!
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col col-lg-4 text-center">
              <Link href="/contact" className="btn btn_primary">
                Contact opnemen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
