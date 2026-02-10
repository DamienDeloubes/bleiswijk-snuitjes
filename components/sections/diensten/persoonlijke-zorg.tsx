import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export const PersoonlijkeZorg = () => {
  return (
    <section className="sitting_service section_space_lg">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col col-lg-6">
            <div className="pe-lg-5">
              <div className="section_title">
                <h2 className="title_text">Persoonlijke zorg staat voorop</h2>
                <p className="mb-0">
                  Elke hond is anders. Daarom werk ik uitsluitend met
                  individuele wandelingen en opvang, met aandacht voor
                  commandos, routines, voeding en karakter.
                </p>
              </div>
              <div className="banner_policy_items row">
                <div className="col">
                  <div className="iconbox_item iconbox_lefticon">
                    <div className="item_icon">
                      <i className="fas fa-dog-leashed"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title mb-0">
                        Altijd 1-op-1 verzorging
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="iconbox_item iconbox_lefticon">
                    <div className="item_icon">
                      <i className="fas fa-paw"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title mb-0">
                        Afgestemd op jouw hond
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="iconbox_item iconbox_lefticon">
                    <div className="item_icon">
                      <i className="fas fa-face-laugh-beam"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title mb-0">Kennismaking vooraf</h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="iconbox_item iconbox_lefticon">
                    <div className="item_icon">
                      <i className="fas fa-camera-retro"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title mb-0">Updates met foto’s</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="services_image_carousel zoom-gallery">
              <Swiper {...swiperOptions} className="common_carousel_3col">
                <SwiperSlide className="carousel_item">
                  <img
                    src="/images/gallery/oppashond-luistert-naar-zit-commando.jpg"
                    alt="Pet Service"
                  />
                </SwiperSlide>
                <SwiperSlide className="carousel_item">
                  <img
                    src="/images/gallery/oppashond-zit-gezellig-op-de-bank.jpg"
                    alt="Pet Service"
                  />
                </SwiperSlide>
                <SwiperSlide className="carousel_item">
                  <img
                    src="/images/gallery/oppashond-pommeraan-wordt-uitgelaten.jpg"
                    alt="Pet Service"
                  />
                </SwiperSlide>
                <SwiperSlide className="carousel_item">
                  <img
                    src="/images/gallery/oppashond-wordt-uitgelaten-terwijl-hij-stok-in-zijn-mond-heeft.jpg"
                    alt="Pet Service"
                  />
                </SwiperSlide>
                <SwiperSlide className="carousel_item">
                  <img
                    src="/images/gallery/oppashond-kijkt-naar-vertrekkende-watertaxi-tijdens-uitlaten.jpg"
                    alt="Pet Service"
                  />
                </SwiperSlide>
                <SwiperSlide className="carousel_item">
                  <img
                    src="/images/gallery/anouk-deelt-flyers-uit.jpg"
                    alt="Pet Service"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
