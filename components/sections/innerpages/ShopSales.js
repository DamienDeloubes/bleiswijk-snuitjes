import Link from "next/link";
import React from 'react';
import CountDown from '@/components/elements/CountDown';

const ShopSales = () => {
  const fixDate = new Date();
  return (
    <>
    <section className="sales_product_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-sm-6">
            <div className="sales_product_item">
              <Link className="item_image" href="shop-details"><img src="/images/shop/sales_img_1.jpg" alt="Pet Care Service"/></Link>
              <div className="item_content time-countdown">
                <div className="discount_badge">-50%</div>
                <h3 className="item_title"><Link href="shop-details">50% Off Pet Accessories</Link></h3>
                <p>Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Quis viverra nibh </p>
                <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-sm-6">
            <div className="sales_product_item">
              <Link className="item_image" href="shop-details"><img src="/images/shop/sales_img_2.jpg" alt="Pet Care Service"/></Link>
              <div className="item_content time-countdown">
                <div className="discount_badge">-30%</div>
                <h3 className="item_title"><Link href="shop-details">Discount Cat Supplies</Link></h3>
                <p>Sit amet cursus sit amet dictum sit amet. Bibendum at varius vel pharetra vel</p>
                <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-sm-6">
            <div className="sales_product_item">
              <Link className="item_image" href="shop-details"><img src="/images/shop/sales_img_3.jpg" alt="Pet Care Service"/></Link>
              <div className="item_content time-countdown">
                <div className="discount_badge">-20%</div>
                <h3 className="item_title"><Link href="shop-details">Working / Active Dogs</Link></h3>
                <p>Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum</p>
                <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-sm-6">
            <div className="sales_product_item">
              <Link className="item_image" href="shop-details"><img src="/images/shop/sales_img_4.jpg" alt="Pet Care Service"/></Link>
              <div className="item_content time-countdown">
                <div className="discount_badge">-18%</div>
                <h3 className="item_title"><Link href="shop-details">Cat Chicken Meal Formula</Link></h3>
                <p>Convallis posuere morbi leo urna molestie at. Amet tellus cras adipiscing enim </p>
                <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="offer_banner_item banner_big align-items-start d-block" style={{ backgroundImage: 'url(images/banner/offer_banner_bg_img_1.jpg)' }}>
              <div className="badge_wrap mb-5"><div className="badge">Up to 40% Off</div></div>
              <div className="item_content time-countdown">
                <h3 className="item_title">Сheck Out Our Specials</h3>
                <p>Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis </p>
                <Link className="btn_unfill" href="service-details">
                  <span>Shop Now</span>
                  <i className="far fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-sm-6">
            <div className="sales_product_item">
              <Link className="item_image" href="shop-details"><img src="/images/shop/sales_img_5.jpg" alt="Pet Care Service"/></Link>
              <div className="item_content time-countdown">
                <div className="discount_badge">-30%</div>
                <h3 className="item_title"><Link href="shop-details">Dry Dog Treats Collection</Link></h3>
                <p>Pellentesque nec nam aliquam sem et tortor consequat id porta</p>
                <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-sm-6">
            <div className="sales_product_item">
              <Link className="item_image" href="shop-details"><img src="/images/shop/sales_img_6.jpg" alt="Pet Care Service"/></Link>
              <div className="item_content time-countdown">
                <div className="discount_badge">-15%</div>
                <h3 className="item_title"><Link href="shop-details">Training Discount </Link></h3>
                <p>Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Lectus proin nibh nisl </p>
                <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-sm-6">
            <div className="sales_product_item">
              <Link className="item_image" href="shop-details"><img src="/images/shop/sales_img_7.jpg" alt="Pet Care Service"/></Link>
              <div className="item_content time-countdown">
                <div className="discount_badge">-20%</div>
                <h3 className="item_title"><Link href="shop-details">Grooming Discount </Link></h3>
                <p>Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus</p>
                <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
              </div>
            </div>
          </div>

          <div className="col col-md-6 col-sm-6">
            <div className="sales_product_item">
              <Link className="item_image" href="shop-details"><img src="/images/shop/sales_img_8.jpg" alt="Pet Care Service"/></Link>
              <div className="item_content time-countdown">
                <div className="discount_badge">-40%</div>
                <h3 className="item_title"><Link href="shop-details">Discount Cat Supplies</Link></h3>
                <p>Aliquet lectus proin nibh nisl condimentum id. Fringilla phasellus faucibus scelerisque </p>
                <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 55)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="subscribe_section">
      <div className="container">
        <div className="subscribe_wrap decoration_wrap">
          <div className="content_wrap">
            <h2 className="title_text">Get 20% Off Your First Purchase When You Use Petco Credit Card </h2>
            <p className="description_text">Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.</p>
            <form action="#">
              <div className="form_item mb-0">
                <input type="email" name="email" placeholder="Type your Email"/>
                <button className="btn btn_warning" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="overlay" style={{ backgroundImage: 'url(images/overlay/shapes_overlay_5.svg)'}}></div>
          <div className="decoration_item shape_image_1">
            <img src="/images/shape/shape_path_5.svg" alt="Shape Image"/>
          </div>
          <div className="decoration_item shape_image_2">
            <img src="/images/shape/shape_circle_1.svg" alt="Shape Image"/>
          </div>
          <div className="decoration_item pet_image_1">
            <img src="/images/about/about_img_4.png" alt="Pet Image"/>
          </div>
          <div className="decoration_item pet_image_2">
            <img src="/images/about/about_img_5.png" alt="Pet Image"/>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};
export default ShopSales
