import Link from "next/link";


const ProductDetails = () => {

  return (
    <>

    <section className="offer_banner_section">
      <div className="container">
        <div className="offer_banner_item banner_big align-items-start d-block" style={{ backgroundImage: 'url(/images/banner/offer_banner_bg_img_1.jpg)' }}>
          <div className="badge_wrap mb-5">
            <div className="badge">Up to 40% Off</div>
          </div>
          <div className="item_content">
            <h3 className="item_title">Сheck Out Our Specials</h3>
            <p>Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis </p>
            <Link className="btn_unfill" href="service-details">
              <span>Shop Now</span>
              <i className="far fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default ProductDetails
