import Link from "next/link";

const Service = () => {
  return (
  <>
  <section className="service_section section_space_lg pb-0">
    <div className="container">

      <div className="section_title text-center">
        <h2 className="title_text mb-0"><span className="sub_title">Mijn diensten</span> Zorg en plezier voor jouw hond</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col col-lg-4 col-sm-6">
          <div className="service_item" style={{ backgroundImage: 'url(images/shape/shape_path_1.svg)' }}>
            <div className="title_wrap">
              <div className="item_icon">
              <img src="/images/icon/icon_pet_walking.svg" alt="Pet Walking"/>
              </div>
              <h3 className="item_title mb-0">Honden uitlaten</h3>
            </div>
            <p>Ik haal je hond op bij je huis en zorg voor een fijne wandeling op zijn eigen tempo. Zowel eenmalig als meerdere keren per dag.</p>
            <div className="item_price"><span>Vanaf €12 per wandeling</span></div>
            <Link className="btn_unfill" href="page-service-details">
              <span>Meer over uitlaten</span>
              <i className="far fa-long-arrow-right"></i>
            </Link>
            <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws"/></div>
          </div>
        </div>

 		<div className="col col-lg-4 col-sm-6">
          <div className="service_item" style={{ backgroundImage: 'url(images/shape/shape_path_1.svg)' }}>
            <div className="title_wrap">
              <div className="item_icon">
              <img src="/images/icon/icon_pet_hotel.svg" alt="Pet Hotel"/>
              </div>
              <h3 className="item_title mb-0">Honden oppassen</h3>
            </div>
            <p>Voor een paar uur of een weekend weg - jouw hond wordt met liefde verzorgd, in een vertrouwde omgeving.</p>
            <div className="item_price"><span>Vanaf €18 per oppasmoment</span></div>
            <Link className="btn_unfill" href="page-service-details">
              <span>Meer over oppassen</span>
              <i className="far fa-long-arrow-right"></i>
            </Link>
            <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws"/></div>
          </div>
        </div>

       

        <div className="col col-lg-4 col-sm-6">
          <div className="service_item" style={{ backgroundImage: 'url(images/shape/shape_path_1.svg)' }}>
            <div className="title_wrap">
              <div className="item_icon">
				<img src="/images/icon/icon_pet_taxi.svg" alt="Pet Taxi"/>
              </div>
              <h3 className="item_title mb-0">Strippenkaart & abonnement</h3>
            </div>
            <p>Besparen en gemak! Plan meerdere wandelingen vooruit of kies een abonnement voor vaste zorg en beweging.</p>
            <div className="item_price hidden"><span>-</span></div>
            <Link className="btn_unfill" href="page-service-details">
              <span>Bekijken</span>
              <i className="far fa-long-arrow-right"></i>
            </Link>
            <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws"/></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </>
  );
};
export default Service