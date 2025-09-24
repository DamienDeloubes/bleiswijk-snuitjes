import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 15,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination:false,
  navigation: true,
  loop: true,
  breakpoints:{
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }  
};

const ServiceGallery = () => {
  return (
  <>
  <section className="gallery_section section_space_lg decoration_wrap pb-0">
    <div className="container">
      <div className="section_title mb-0">
        <h2 className="title_text">Gallery</h2>
      </div>
      <div className="testimonial_carousel gallery_carousel">
        <Swiper {...swiperOptions} className="common_carousel_3col">
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <div className="gallery_item">
              <div className="item_image">
                <img src="/images/gallery/gallery_img_7.jpg" alt="Pet Image"/>
              </div>
              <Link className="item_content" href="#!">
                <span className="d-block"><small>SERVICES</small></span>
                <strong className="d-block">Cat Grooming</strong>
              </Link>
            </div>
          </SwiperSlide>
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <div className="row">
              <div className="col">
                <div className="gallery_item">
                  <div className="item_image">
                    <img src="/images/gallery/gallery_img_8.jpg" alt="Pet Image"/>
                  </div>
                  <Link className="item_content" href="#!">
                    <span className="d-block"><small>SERVICES</small></span>
                    <strong className="d-block">Cat Grooming</strong>
                  </Link>
                </div>
              </div>
              <div className="col col-6">
                <div className="gallery_item">
                  <div className="item_image">
                    <img src="/images/gallery/gallery_img_9.jpg" alt="Pet Image"/>
                  </div>
                  <Link className="item_content" href="#!">
                    <span className="d-block"><small>SERVICES</small></span>
                    <strong className="d-block">Cat Grooming</strong>
                  </Link>
                </div>
              </div>
              <div className="col col-6">
                <div className="gallery_item">
                  <div className="item_image">
                    <img src="/images/gallery/gallery_img_10.jpg" alt="Pet Image"/>
                  </div>
                  <Link className="item_content" href="#!">
                    <span className="d-block"><small>SERVICES</small></span>
                    <strong className="d-block">Cat Grooming</strong>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="carousel_item">
            <div className="gallery_item">
              <div className="item_image">
                <img src="/images/gallery/gallery_img_11.jpg" alt="Pet Image"/>
              </div>
              <Link className="item_content" href="#!">
                <span className="d-block"><small>SERVICES</small></span>
                <strong className="d-block">Cat Grooming</strong>
              </Link>
            </div>            
          </SwiperSlide>
          <SwiperSlide className="carousel_item">
            <div className="gallery_item">
              <div className="item_image">
                <img src="/images/gallery/gallery_img_7.jpg" alt="Pet Image"/>
              </div>
              <Link className="item_content" href="#!">
                <span className="d-block"><small>SERVICES</small></span>
                <strong className="d-block">Cat Grooming</strong>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div className="decoration_item shape_dot_2"><img src="/images/shape/shape_dot_group_4.svg" alt="Colorful Dots"/></div>
  </section>
  </>
  );
};
export default ServiceGallery