import Link from "next/link";

const Service = () => {
  return (
  <>
  <section className="service_section section_space_lg">
    <div className="container">

      <div className="section_title text-center">
        <h2 className="title_text mb-0"><span className="sub_title">Mijn diensten</span>Alles voor een blije viervoeter</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col col-lg-4 col-sm-6">
          <div className="service_item" style={{ backgroundImage: 'url(images/shape/shape_path_1.svg)' }}>
            <div className="title_wrap">
              <div className="item_icon">
              <img src="/images/icon/icon_pet_walking.svg" alt="Pet Walking"/>
              </div>
              <h3 className="item_title mb-0">Wandeling & Uitlaten</h3>
            </div>
            <p>Individuele wandelingen afgestemd op het tempo en karakter van jouw hond, zonder groepsuitjes, met volledige aandacht.</p>
            <div className="item_price"><span>Vanaf €15 / hour</span></div>
            <Link className="btn_unfill" href="page-service-details">
              <span>Bekijk prijzen</span>
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
              <h3 className="item_title mb-0">Oppassen</h3>
            </div>
            <p>Persoonlijke opvang in huiselijke sfeer, waar jouw hond alle rust en aandacht krijgt zolang jij weg bent.</p>
            <div className="item_price"><span>Vanaf €15 / night</span></div>
            <Link className="btn_unfill" href="page-service-details">
              <span>Bekijk prijzen</span>
              <i className="far fa-long-arrow-right"></i>
            </Link>
            <div className="decoration_image"><img src="/images/shape/shape_paws.svg" alt="Pet Paws"/></div>
          </div>
        </div>


        <div className="col col-lg-4 col-sm-6">
          <div className="service_item" style={{ backgroundImage: 'url(images/shape/shape_path_1.svg)' }}>
            <div className="title_wrap">
              <div className="item_icon">
              <img src="/images/icon/icon_pet_health.svg" alt="Pet Health & Wellness"/>
              </div>
              <h3 className="item_title mb-0">Thuisbezoek</h3>
            </div>
            <p>Een bezoek bij jou thuis voor voeding, aandacht, medicatie of een korte ronde, ideaal voor puppy's en oudere honden.</p>
            <div className="item_price"><span>Vanaf €39/ visit</span></div>
            <Link className="btn_unfill" href="page-service-details">
              <span>Bekijk prijzen</span>
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