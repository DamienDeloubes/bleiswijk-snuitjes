import Link from "next/link";

const Contact = () => {
  return (
  <>

  <section className="contact_section bg_gray section_space_lg decoration_wrap">
    <div className="container">
      <div className="section_title text-center">
        <h2 className="title_text"> <span className="sub_title">Kennismaken?</span>Laten we praten</h2>
        <p className="mb-0">Stuur gerust een berichtje via WhatsApp of een belletje, dan plannen we samen een kennismaking en kijken we wat het beste past bij jou en jouw hond.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="iconbox_item iconbox_overicon">
            <div className="item_icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="item_content">
              <h3 className="item_title">Telefoon</h3>
              <ul className="item_info_list unorder_list_block">
                <li>
                  <a href="tel:+31627195985">+31 6 271 959 85</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="iconbox_item iconbox_overicon">
            <div className="item_icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="item_content">
              <h3 className="item_title">Email</h3>
              <ul className="item_info_list unorder_list_block">
                <li>
					<a href="mailto:bleiswijksesnuitjes@gmail.com?subject=Kennismaking%20aanvragen%20-%20Bleiswijk%20Snuitjes">bleiswijksesnuitjes@gmail.com</a>
				</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="iconbox_item iconbox_overicon">
            <div className="item_icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="item_content">
              <h3 className="item_title">Adres</h3>
              <ul className="item_info_list unorder_list_block">
                <li>Piet Heinstraat 2, 2665 AP Bleiswijk</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="iconbox_item iconbox_overicon">
            <div className="item_icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="item_content">
              <h3 className="item_title">Openingstijden</h3>
              <ul className="item_info_list unorder_list_block">
                <li>24/7 opvangen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="decoration_item shape_image_1">
      <img src="/images/shape/shape_purr.svg" alt="Pet Purr"/>
    </div>
    <div className="decoration_item shape_image_2">
      <img src="/images/shape/shape_cat.svg" alt="Cat"/>
    </div>
  </section>

  </>
  );
};
export default Contact
