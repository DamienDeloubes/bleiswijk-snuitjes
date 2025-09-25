import Link from "next/link";

const Contact = () => {
  return (
  <>

  <section className="contact_section bg_gray section_space_lg decoration_wrap">
    <div className="container">
      <div className="section_title text-center">
        <h2 className="title_text"> <span className="sub_title">Vragen?</span> We horen graag van je </h2>
        <p className="mb-0">
			<span>Heb je vragen of wil je direct een wandeling of oppas plannen?</span>
			<br/>
			<span>Je kunt mij altijd bellen of Whatsappen.</span>
			</p>
      </div>

      <div className="row justify-content-center">
		<div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="iconbox_item iconbox_overicon">
            <div className="item_icon">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div className="item_content">
              <h3 className="item_title">Whatsapp</h3>
              <ul className="item_info_list unorder_list_block">
                <li><Link href="https://wa.me/31627195985">Stuur een berichtje</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col col-lg-3 col-md-6 col-sm-6">
          <div className="iconbox_item iconbox_overicon">
            <div className="item_icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="item_content">
              <h3 className="item_title">Belletje</h3>
              <ul className="item_info_list unorder_list_block">
                <li><Link href={`tel:+31627195985`}>+31 6 271 959 85</Link></li>
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
              <h3 className="item_title">Mailtje</h3>
              <ul className="item_info_list unorder_list_block">
                <li><Link href={`mailto:bleiswijksesnuitjes@gmail.com`}>Bleiswijksesnuitjes@gmail.com</Link></li>
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
