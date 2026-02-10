import Link from "next/link";

const ServiceDetailsSec5 = () => {
  return (
  <>
    <section className="about_section section_space_lg decoration_wrap">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col col-lg-5">
            <div className="section_title">
              <h2 className="title_text">Waarom een strippenkaart?</h2>
              <p>Voor wanneer je vaak gebruik wilt maken van mijn diensten ben je voordeliger uit met een strippenkaart.</p>
            </div>

            <ul className="icon_list unorder_list_block mb-0">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Goedkoper dan losse diensten</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Perfect voor vaste klanten</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Geen maandelijkse verplichting</span>
              </li>
            </ul>
          </div>

          <div className="col col-lg-6">
            <div className="about_image_1">
              <div className="image_1 p-0"><img src="/images/about/anouk-die-past-op-oppashond.jpg" alt="Pet Doctor"/></div>
              <div className="image_2"><img src="/images/about/oppashond-die-netjes-luistert-naar-zit-commando.jpg" alt="Cat Image"/></div>
              <div className="image_3"><img src="/images/about/oppashond-finley-die-lacht.jpg" alt="Dog Image"/></div>
              <div className="shape_img_1"><img src="/images/shape/shape_circle_1.svg" alt="Yellow Circle"/></div>
              <div className="shape_img_2"><img src="/images/shape/shape_circle_3.svg" alt="Yellow Circle"/></div>
            </div>
          </div>

        </div>
      </div>

      <div className="decoration_item shape_dot_1"><img src="/images/shape/shape_dot_group_1.svg" alt="Colorful Dots"/></div>
    </section>
  </>
  );
};
export default ServiceDetailsSec5
