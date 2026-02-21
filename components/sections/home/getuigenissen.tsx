import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
//
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 0,
  freeMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      autoplay: {
        delay: 10_000,
        disableOnInteraction: false,
      },
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      autoplay: {
        delay: 10_000,
        disableOnInteraction: false,
      },
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      autoplay: {
        delay: 10_000,
        disableOnInteraction: false,
      },
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      autoplay: {
        delay: 10_000,
        disableOnInteraction: false,
      },
      freeMode: false,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
};

export const Getuigenissen = () => {
  return (
    <section className="testimonial_section section_space_lg">
      <div className="container">
        <div className="section_title mb-0">
          <h2 className="title_text mb-0">
            <span className="sub_title">Blije baasjes</span>
            Wat mijn klanten zeggen
          </h2>
        </div>
      </div>
      <div className="testimonial_carousel">
        <Swiper {...swiperOptions} className="common_carousel_3col">
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <div className="testimonial_item">
              <div className="testimonial_admin">
                <div className="admin_thumbnail">
                  <img
                    src="/images/oppashonden/baasje-lie-en-renee.jpg"
                    alt="Pet Thumbnail Image"
                  />
                </div>
                <div className="admin_info">
                  <h4 className="admin_name">Lie en René</h4>
                  <span className="admin_designation">Baasjes van Mees</span>
                </div>
              </div>
              <ul className="rating_star">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
              <p className="mb-0">
                Anouk biedt een fijn oppashuis voor ons hondje. Anouk is rustig
                wat ons hondje van inmiddels 11 jaar oud waardeert! En haar huis
                een heerlijke plek midden in het dorp.
              </p>
              <span className="quote_icon">
                <i className="fas fa-quote-right"></i>
              </span>
            </div>
          </SwiperSlide>
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <div className="testimonial_item">
              <div className="testimonial_admin">
                <div className="admin_thumbnail">
                  <img
                    src="/images/oppashonden/baasje-chanel.jpg"
                    alt="Pet Thumbnail Image"
                  />
                </div>
                <div className="admin_info">
                  <h4 className="admin_name">Chanel</h4>
                  <span className="admin_designation">Baasje van Lio</span>
                </div>
              </div>
              <ul className="rating_star">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
              <p className="mb-0">
                Lio is bij Anouk geweest en we zijn super tevreden! Ze hield ons
                goed op de hoogte met foto’s en filmpjes, wat erg fijn was. Lio
                kwam helemaal voldaan en blij weer thuis. Je merkt dat Anouk
                veel liefde en aandacht heeft voor de honden. Zeker een
                aanrader!
              </p>
              <span className="quote_icon">
                <i className="fas fa-quote-right"></i>
              </span>
            </div>
          </SwiperSlide>
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <div className="testimonial_item">
              <div className="testimonial_admin">
                <div className="admin_thumbnail">
                  <img
                    src="/images/oppashonden/baasje-edith-en-luc.jpg"
                    alt="Pet Thumbnail Image"
                  />
                </div>
                <div className="admin_info">
                  <h4 className="admin_name">Edith & Luc</h4>
                  <span className="admin_designation">Baasjes van Beppie</span>
                </div>
              </div>
              <ul className="rating_star">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
              <p className="mb-0">
                Onze continentale bulldog Beppie heeft een heerlijke week gehad
                bij Bleiswijkse Snuitjes. Wanneer Beppie wakker is kan ze erg
                druk zijn. Anouk bezit de prachtige eigenschap om daar geen
                problemen mee te hebben. Ze zijn heerlijk lang en vaak gaan
                wandelen. Anouk zorgt voor een huiselijke sfeer tijdens het
                logeren. Ik vind dat heel belangrijk. Het is overduidelijk dat
                Beppie gek is op Anouk. Als ze elkaar weer zien is Beppie altijd
                over de top blij om haar te zien. Dat zegt voor mij dat Anouk
                met haar Bleiswijkse Snuitjes een prachtig oppasadres is.
              </p>
              <span className="quote_icon">
                <i className="fas fa-quote-right"></i>
              </span>
            </div>
          </SwiperSlide>
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <div className="testimonial_item">
              <div className="testimonial_admin">
                <div className="admin_thumbnail">
                  <img
                    src="/images/oppashonden/baasje-monique-en-luc.jpg"
                    alt="Pet Thumbnail Image"
                  />
                </div>
                <div className="admin_info">
                  <h4 className="admin_name">Monique & Luc</h4>
                  <span className="admin_designation">Baasjes van Louitje</span>
                </div>
              </div>
              <ul className="rating_star">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
              <p className="mb-0">
                Wat een fijn adres voor mijn hond! Vooral de huiselijke omgeving
                was voor ons doorslaggevend. Het is een rustgevend gevoel om je
                hond met een gerust hart achter te kunnen laten. En als kers op
                de taart tussendoor een update met vaak een foto!
              </p>
              <span className="quote_icon">
                <i className="fas fa-quote-right"></i>
              </span>
            </div>
          </SwiperSlide>
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <div className="testimonial_item">
              <div className="testimonial_admin">
                <div className="admin_thumbnail">
                  <img
                    src="/images/oppashonden/baasje-layla.jpg"
                    alt="Pet Thumbnail Image"
                  />
                </div>
                <div className="admin_info">
                  <h4 className="admin_name">Melanie & Shen</h4>
                  <span className="admin_designation">Baasjes van Layla</span>
                </div>
              </div>
              <ul className="rating_star">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
              <p className="mb-0">
                Anouk is lief, denkt altijd graag mee over mogelijkheden en
                stuurt veel foto's door de dag heen. Layla gaat er altijd met
                veel plezier heen!
              </p>
              <span className="quote_icon">
                <i className="fas fa-quote-right"></i>
              </span>
            </div>
          </SwiperSlide>
          {/* Services Block */}
          <SwiperSlide className="carousel_item">
            <div className="testimonial_item">
              <div className="testimonial_admin">
                <div className="admin_thumbnail">
                  <img
                    src="/images/oppashonden/baasje-tyra-joey.jpg"
                    alt="Pet Thumbnail Image"
                  />
                </div>
                <div className="admin_info">
                  <h4 className="admin_name">Tyra & Joey</h4>
                  <span className="admin_designation">
                    Baasjes van Toki & Lilu
                  </span>
                </div>
              </div>
              <ul className="rating_star">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
              <p className="mb-0">
                Wij laten onze lieve Frenchies Toki en Lilu met een gerust hart
                achter bij Anouk van Bleiswijkse Snuitjes. Ze zorgt altijd
                liefdevol en zorgvuldig voor ze als wij op vakantie zijn. We
                krijgen dagelijks duidelijke updates, fijne foto’s en het
                contact is heel prettig. Ook de uitlaatservice is betrouwbaar.
                Maar wat voor ons het allerbelangrijkste is, Anouk heeft
                oprechte liefde en aandacht voor onze Franse bullies! Zoek je
                een uitlaatservice, dagopvang of een logeerplek voor je honden,
                dan zit je bij Bleiswijkse Snuitjes helemaal goed! Tyra en Joey
              </p>
              <span className="quote_icon">
                <i className="fas fa-quote-right"></i>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
