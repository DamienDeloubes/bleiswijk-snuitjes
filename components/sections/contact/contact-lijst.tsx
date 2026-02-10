import { email } from "@/utils/email";
import { openWhatsapp, phoneNumber } from "@/utils/whatsapp";

export const ContactLijst = () => {
  return (
    <section className="contact_section section_space_lg decoration_wrap">
      <div className="container">
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
                    <button onClick={openWhatsapp} style={{ color: "#0d6efd" }}>
                      {phoneNumber.readable}
                    </button>
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
                    <a
                      href={`mailto:${email}?subject=Kennismaking%20aanvragen%20-%20Bleiswijk%20Snuitjes`}
                    >
                      {email}
                    </a>
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
        <img src="/images/shape/shape_paws.svg" alt="Pet Purr" />
      </div>
      <div className="decoration_item shape_image_2">
        <img src="/images/shape/shape_group_1.svg" alt="hond" />
      </div>
    </section>
  );
};
