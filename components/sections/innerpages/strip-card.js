
const StripCard = () => {
  return (
  <>
    <section className="service_section bg_gray section_space_lg pb-0" style={{ backgroundImage: 'url(images/shape/shape_paws_bg_2.svg)' }}>
      <div className="container">
        <div className="section_title text-center mb-2">
          <div className="row justify-content-center">
            <div className="col col-lg-5">
              <h2 className="title_text">
                <span className="sub_title">Eerlijke prijzen</span>
               Strippenkaarten
              </h2>
              <p className="mb-0">
                Een goedkopere optie voor vaste klanten die regelmatig gebruik willen maken van mijn diensten.
              </p>
            </div>
          </div>
        </div>

		{/* 
		Los: €125 → €118
		👉 ±5,5% korting
		= €11,80 per wandeling

		15x kaart

		Los: €187,50 → €170
		👉 ±9% korting
		= €11,33 per wandeling

		20x kaart

		Los: €250 → €215
		👉 ±14% korting
		= €10,75 per wandeling 
		*/}
        <div className="row justify-content-center">
		  <div className="col col-lg-6">
			<h3>Uitlaten {"(30 minuten)"}</h3>
            <div className="services_price_items_wrap">
              <div className="service_price_item">
                <div className="item_image">
                    <img src="/images/gallery/oppashond-pommeraan-wordt-uitgelaten.jpg" alt="Oppashond wordt 10x uitgelaten"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">10x Uitlaten</div>
                    <div className="item_price">
                      <del className="discount">€125,00</del>
                      <span>€118,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Voor wie af en toe vaste momenten nodig heeft.
                  </h3>
                </div>
              </div>

              <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/gallery/oppashond-pommeraan-wordt-uitgelaten.jpg" alt="Oppashond wordt 15x uitgelaten"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">15x Uitlaten</div>
                    <div className="item_price">
                     <del className="discount">€187,50</del>
                      <span>€170,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Ideaal voor vaste werkdagen.
                  </h3>
                </div>
              </div>

			    <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/gallery/oppashond-pommeraan-wordt-uitgelaten.jpg" alt="Oppashond wordt 20x uitgelaten"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">20x Uitlaten</div>
                    <div className="item_price">
                 	   <del className="discount">€250,00</del>
                      <span>€215,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Voor baasjes die wekelijks meerdere keren boeken.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
		
			{/* 
		10x kaart

		Los: €175 → €165
		👉 ±6% korting
		= €16,50 per wandeling

		15x kaart

		Los: €262,50 → €240
		👉 ±8,5% korting
		= €16,00 per wandeling

		20x kaart

		Los: €350 → €305
		👉 ±13% korting
		= €15,25 per wandeling 
		*/}
		<div className="row justify-content-center mt-3">
        <div className="col col-lg-6">
			<h3>Uitlaten {"(60 minuten)"}</h3>
            <div className="services_price_items_wrap">
              <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/gallery/oppashond-wordt-uitgelaten-terwijl-hij-stok-in-zijn-mond-heeft.jpg" alt="Oppashond wordt 10x uitgelaten"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">10x Uitlaten</div>
                    <div className="item_price">
                      <del className="discount">€175,00</del>
                      <span>€165,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Voor actieve honden die langere wandelingen nodig hebben.
                  </h3>
                </div>
              </div>

              <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/gallery/oppashond-wordt-uitgelaten-terwijl-hij-stok-in-zijn-mond-heeft.jpg" alt="Oppashond wordt 15x uitgelaten"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">15x Uitlaten</div>
                    <div className="item_price">
                      <del className="discount">€262,50</del>
                      <span>€240,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Voor structurele lange wandelingen.
                  </h3>
                </div>
              </div>

			    <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/gallery/oppashond-wordt-uitgelaten-terwijl-hij-stok-in-zijn-mond-heeft.jpg" alt="Oppashond wordt 20x uitgelaten"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">20x Uitlaten</div>
                    <div className="item_price">
                     <del className="discount">€350,00</del>
                      <span>€305,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Voor sportieve honden met veel energie.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
		

			{/*
			 ⭐ 5x Dagopvang

			Los: €125 → €119
			👉 ±5% korting
			= €23,80 per keer

			Kleine bundel met voordeel.

			⭐ 10x Dagopvang

			Los: €250 → €227
			👉 ±9% korting
			= €22,70 per keer

			Voor regelmatige opvangmomenten.

			⭐ 15x Dagopvang

			Los: €375 → €325
			👉 ±13% korting
			= €21,70 per keer

			Meeste voordeel per dag.
			 */}
		  <div className="row justify-content-center mt-3">
		  <div className="col col-lg-6">
			<h3>Dagopvang</h3>
            <div className="services_price_items_wrap">
              <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/service/oppashond-wordt-overdag-uitgelaten.jpg" alt="Oppashond 5x dagopvang"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">5x Dagopvang</div>
                    <div className="item_price">
                      <del className="discount">€125,00</del>
                      <span>€119,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Voor een weekje weg, lange werkdagen of incidentele opvang.
                  </h3>
                </div>
              </div>

              <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/service/oppashond-wordt-overdag-uitgelaten.jpg" alt="Oppashond 10x dagopvang"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">10x Dagopvang</div>
                    <div className="item_price">
                     <del className="discount">€250,00</del>
                      <span>€227,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Voor baasjes die hun hond vaker willen laten opvangen.
                  </h3>
                </div>
              </div>

			    <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/service/oppashond-wordt-overdag-uitgelaten.jpg" alt="Oppashond 15x dagopvang"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">15x Dagopvang</div>
                    <div className="item_price">
                 	   <del className="discount">€375,00</del>
                      <span>€325,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Voor terugkerende opvangmomenten.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

			{/*
			⭐ 5x Logeren

			Los: €135 → €128
			👉 ±5% korting
			= €25,60 per nacht

			Voor af en toe een overnachting met voordeel.

			⭐ 10x Logeren

			Los: €270 → €245
			👉 ±9% korting
			= €24,50 per nacht

			Ideaal voor terugkerende logeerafspraken.

			⭐ 15x Logeren

			Los: €405 → €350
			👉 ±13–14% korting
			= €23,33 per nacht

			Het meeste voordeel per verblijf.
			 */}
		  <div className="row justify-content-center mt-3">
		  <div className="col col-lg-6">
			<h3>Logeren</h3>
            <div className="services_price_items_wrap">
              <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/service/oppashond-ligt-te-slapen.jpg" alt="Oppashond ligt te slapen"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">5x Logeren</div>
                    <div className="item_price">
                      <del className="discount">€135,00</del>
                      <span>€128,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Voor af en toe een overnachting met voordeel.
                  </h3>
                </div>
              </div>

              <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/service/oppashond-ligt-te-slapen.jpg" alt="Oppashond ligt te slapen"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">10x Logeren</div>
                    <div className="item_price">
                     <del className="discount">€270,00</del>
                      <span>€245,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Ideaal voor terugkerende logeerafspraken.
                  </h3>
                </div>
              </div>

			    <div className="service_price_item">
                <div className="item_image">
                  <img src="/images/service/oppashond-ligt-te-slapen.jpg" alt="Oppashond ligt te slapen"/>
                </div>
                <div className="item_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="service_time">15x Logeren</div>
                    <div className="item_price">
                 	   <del className="discount">€405,00</del>
                      <span>€350,00</span>
                    </div>
                  </div>
                  <h3 className="item_title mb-0">
                    Het meeste voordeel per verblijf.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};
export default StripCard
