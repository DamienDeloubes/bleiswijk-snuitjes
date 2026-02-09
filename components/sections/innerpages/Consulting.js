import Link from "next/link";

const Consulting = () => {
  return (
    <>

    <section className="consultation_section section_space_lg decoration_wrap">
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title_text">
            <span className="sub_title">Geen gedoe</span>
            Zo werkt het
          </h2>
          <p className="mb-0">
            Eenvoudig, persoonlijk en afgestemd op jouw hond
          </p>
        </div>
      </div>
      <div className="consultation_wrap" style={{ backgroundImage: 'url(images/shape/shape_path_6.svg)' }}>
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_item iconbox_centericon">
                <div className="item_icon" style={{ backgroundImage: 'url(images/shape/shape_outline.svg)' }}><i className="fas fa-comment-dots"></i></div>
                <div className="item_content"><h3 className="item_title">Kennismaking</h3>
                  <p className="mb-0">We plannen een kort bezoek bij jou thuis om jouw hond, routines en wensen te leren kennen.</p>
                </div>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_item iconbox_centericon">
                <div className="item_icon" style={{ backgroundImage: 'url(images/shape/shape_outline.svg)' }}><i className="fas fa-calendar-check"></i></div>
                <div className="item_content">
                  <h3 className="item_title">Plan maken</h3>
                  <p className="mb-0">Samen stemmen we af wanneer de wandelingen, oppas of thuisbezoeken plaatsvinden.</p>
                </div>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_item iconbox_centericon">
                <div className="item_icon" style={{ backgroundImage: 'url(images/shape/shape_outline.svg)' }}><i className="fas fa-paw"></i></div>
                <div className="item_content">
                  <h3 className="item_title">1-op-1 verzorging</h3>
                  <p className="mb-0">Elke wandeling of opvang is individueel, zodat jouw hond alle aandacht krijgt en zich veilig voelt.</p>
                </div>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_item iconbox_centericon">
                <div className="item_icon" style={{ backgroundImage: 'url(images/shape/shape_outline.svg)' }}><i className="fas fa-camera-retro"></i></div>
                <div className="item_content">
                  <h3 className="item_title">Updates & feedback</h3>
                  <p className="mb-0">Je ontvangt foto's, korte updates en tips, zodat je altijd weet hoe het gaat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="decoration_item paw_shape_1">
        <img src="/images/shape/shape_paw_1.png" alt="Pet Paw"/>
      </div>

      <div className="decoration_item paw_shape_2">
        <img src="/images/shape/shape_paw_2.png" alt="Pet Paw"/>
      </div>
    </section>

    </>
  );
};
export default Consulting
