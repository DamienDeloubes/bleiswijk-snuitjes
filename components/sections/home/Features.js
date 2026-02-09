import Link from "next/link";

const Features = () => {
  return (
  <>

  <section className="feature_service decoration_wrap section_space_lg" style={{ backgroundImage: 'url(images/background/shape_bg_2.png)' }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col col-lg-5">
          <div className="feature_image">
            <div className="image_wrap">
              <img src="/images/feature/oppashond-lowietje-kijkt-blij-naar-oppasser.jpg" alt="Pet Grooming Service Image"/>
            </div>
            <div className="shape_image_1">
              <img src="/images/shape/shape_butterfly.svg" alt="Butterfly Shape"/>
            </div>
          </div>
        </div>
		
        <div className="col col-lg-4">
          <div className="feature_content">
            <h2 className="item_title">Bespaar met een abonnement of strippenkaart</h2>
            <ul className="icon_list unorder_list_block">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Vaste momenten per week</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Lagere kosten per keer</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Gegarandeerde plek</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Flexibel aan te passen</span>
              </li>
            </ul>
			<div className="cta-container">
            <Link className="btn btn_primary" href="page-service-details"> <i className="fas fa-paw"></i>Bekijk abonnement</Link>
            <Link className="btn border_primary" href="page-service-details"> <i className="fas fa-paw"></i>Bekijk strippenkaart</Link>
			</div>
          </div>
        </div>
      </div>
    </div>
    <div className="decoration_item shape_image_2">
      <img src="/images/shape/shape_group_1.svg" alt="Pet Tools Box"/>
    </div>
  </section>

  </>
  );
};
export default Features
