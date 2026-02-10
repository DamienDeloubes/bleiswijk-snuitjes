export const PrijzenLijst = () => {
  return (
    <section
      className="service_section bg_gray section_space_lg"
      style={{ backgroundImage: "url(images/shape/shape_paws_bg_2.svg)" }}
    >
      <div className="container">
        <div className="section_title text-center mb-2">
          <div className="row justify-content-center">
            <div className="col col-lg-5">
              <h2 className="title_text">
                <span className="sub_title">Eerlijke prijzen</span>
                Diensten & tarieven
              </h2>
              <p className="mb-0">
                Kies voor losse momenten of een strippenkaart. Zo is er altijd
                een optie die past bij jouw planning en jouw hond.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col-lg-6">
            <div className="services_price_items_wrap">
              <div className="service_price_item">
                <div className="item_image">
                  <img
                    src="/images/service/oppashond-wordt-overdag-uitgelaten.jpg"
                    alt="Pet Care Service"
                  />
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">Dagopvang</div>
                    <div className="item_price">
                      <span>€25,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Persoonlijke 1-op-1 opvang overdag in huiselijke sfeer.
                  </h3>
                </div>
              </div>

              <div className="service_price_item">
                <div className="item_image">
                  <img
                    src="/images/service/oppashond-ligt-te-slapen.jpg"
                    alt="Pet Care Service"
                  />
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">Logeren</div>
                    <div className="item_price">
                      <span>€27,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Overnachting met volledige aandacht en vaste routines.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-lg-6">
            <div className="services_price_items_wrap">
              <div className="service_price_item">
                <div className="item_image">
                  <img
                    src="/images/gallery/oppashond-wordt-uitgelaten-terwijl-hij-stok-in-zijn-mond-heeft.jpg"
                    alt="Pet Care Service"
                  />
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">
                      <i className="fas fa-clock"></i>Uitlaten {"(30 minuten)"}
                    </div>
                    <div className="item_price">
                      <span>€12,50</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Individuele wandeling zonder groepen, afgestemd op jouw
                    hond.
                  </h3>
                </div>
              </div>

              <div className="service_price_item">
                <div className="item_image">
                  <img
                    src="/images/gallery/oppashond-pommeraan-wordt-uitgelaten.jpg"
                    alt="Pet Care Service"
                  />
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">
                      <i className="fas fa-clock"></i>Uitlaten {"(60 minuten)"}
                    </div>
                    <div className="item_price">
                      <span>€17,50</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Lange, rustige wandeling met extra tijd en aandacht.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
