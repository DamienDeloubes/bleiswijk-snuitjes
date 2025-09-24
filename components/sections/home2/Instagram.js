import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: true,
  loop: true,
  breakpoints:{
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
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
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
  
};
const Instagram = () => {
  return (
  <>
  <section className="instagram_section section_space_md pb-0">
    <div className="container">
      <div className="section_title mb-0">
        <h2 className="title_text mb-0">
          <span className="sub_title">Instagram</span>
          Join Our Instagram
        </h2>
      </div>
      <div className="instagram_carousel_wrap">
        <Swiper {...swiperOptions} className="instagram_carousel">
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <Link className="instagram_item" href="#!">
              <img src="/images/instagram/instagram_img_1.jpg" alt="Pet Image"/>
              <span className="item_title">@petopia-shop</span>
            </Link>
          </SwiperSlide>
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <Link className="instagram_item" href="#!">
              <img src="/images/instagram/instagram_img_2.jpg" alt="Pet Image"/>
              <span className="item_title">@petopia-shop</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="carousel_item">
            <Link className="instagram_item" href="#!">
              <img src="/images/instagram/instagram_img_3.jpg" alt="Pet Image"/>
              <span className="item_title">@petopia-shop</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="carousel_item">
            <Link className="instagram_item" href="#!">
              <img src="/images/instagram/instagram_img_4.jpg" alt="Pet Image"/>
              <span className="item_title">@petopia-shop</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="carousel_item">
            <Link className="instagram_item" href="#!">
              <img src="/images/instagram/instagram_img_2.jpg" alt="Pet Image"/>
              <span className="item_title">@petopia-shop</span>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
  </>
  );
};
export default Instagram
