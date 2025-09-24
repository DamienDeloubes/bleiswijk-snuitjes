import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: true,
  loop: true,
  breakpoints:{
    575: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }
  
};
const TopProduct = () => {
  return (
  <>
  <section className="product_section section_space_md">
    <div className="container">
      <div className="section_title mb-0">
        <h2 className="title_text mb-0">
          <span className="sub_title">Our Products</span>
          Top Products
        </h2>
      </div>
    </div>
    <div className="product_carousel">
      <Swiper {...swiperOptions} className="common_carousel_4col">
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="product_item">
            <div className="item_image">
              <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_1.jpg" alt="Pink Spiked Collar"/></Link>
              <ul className="cart_btns_group">
                <li><Link href="#!">Add To Cart</Link></li>
                <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
              </ul>
            </div>
            <div className="item_content">
              <h3 className="item_title"><Link href="shop-details">Pink Spiked Collar</Link></h3>
              <ul className="rating_star">
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
              </ul>
              <div className="item_price"><span>$22.99</span></div>
            </div>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="product_item">
            <ul className="badge_group unorder_list_right">
              <li><Link className="badge badge_sale" href="#!">Sale</Link></li>
            </ul>
            <div className="item_image">
              <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_2.jpg" alt="Squeezz Ball Dog Toy"/></Link>
              <ul className="cart_btns_group">
                <li><Link href="#!">Add To Cart</Link></li>
                <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
              </ul>
            </div>
            <div className="item_content">
              <h3 className="item_title"><Link href="shop-details">Squeezz Ball Dog Toy</Link></h3>
              <ul className="rating_star">
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
              </ul>
              <div className="item_price"><del>$12.39</del><span>$7.99</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="product_item">
            <div className="item_image">
              <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_3.jpg" alt="Hydrolyzed Dry Dog Food"/></Link>
              <ul className="cart_btns_group">
                <li><Link href="#!">Add To Cart</Link></li>
                <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
              </ul>
            </div>
            <div className="item_content">
              <h3 className="item_title"><Link href="shop-details">Hydrolyzed Dry Dog Food</Link></h3>
              <ul className="rating_star">
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
              </ul>
              <div className="item_price"><span>$12.39</span></div>
            </div>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="product_item">
            <div className="item_image">
              <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_4.jpg" alt="Flying Fish Cat Scratching "/></Link>
              <ul className="cart_btns_group">
                <li><Link href="#!">Add To Cart</Link></li>
                <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
              </ul>
            </div>
            <div className="item_content">
              <h3 className="item_title"><Link href="shop-details">Flying Fish Cat Scratching </Link></h3>
              <ul className="rating_star">
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
              </ul>
              <div className="item_price"><span>$25.89</span></div>
            </div>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="product_item">
            <div className="item_image">
              <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_5.jpg" alt="Tug Dog Toy"/></Link>
              <ul className="cart_btns_group">
                <li><Link href="#!">Add To Cart</Link></li>
                <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
              </ul>
            </div>
            <div className="item_content">
              <h3 className="item_title"><Link href="shop-details">Tug Dog Toy</Link></h3>
              <ul className="rating_star">
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
              </ul>
              <div className="item_price"><span>$99.99</span></div>
            </div>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="product_item">
            <div className="item_image">
              <Link className="image_wrap" href="shop-details">
                <img src="/images/shop/product_img_1.jpg" alt="Pink Spiked Collar"/>
              </Link>
              <ul className="cart_btns_group">
                <li><Link href="#!">Add To Cart</Link></li>
                <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
              </ul>
            </div>
            <div className="item_content">
              <h3 className="item_title">
                <Link href="shop-details">Pink Spiked Collar</Link>
              </h3>
              <ul className="rating_star">
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
              </ul>
              <div className="item_price">
                <span>$22.99</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="product_item">
            <ul className="badge_group unorder_list_right">
              <li><Link className="badge badge_sale" href="#!">Sale</Link></li>
            </ul>
            <div className="item_image">
              <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_2.jpg" alt="Squeezz Ball Dog Toy"/></Link>
              <ul className="cart_btns_group">
                <li><Link href="#!">Add To Cart</Link></li>
                <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
              </ul>
            </div>
            <div className="item_content">
              <h3 className="item_title"><Link href="shop-details">Squeezz Ball Dog Toy</Link></h3>
              <ul className="rating_star">
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
                <li><i className="fas fa-star"></i></li>
              </ul>
              <div className="item_price"><del>$12.39</del><span>$7.99</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  </>
  );
};
export default TopProduct