import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 0,
	freeMode: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
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
			freeMode: true,
			centeredSlides: false,
			spaceBetween: 10,
		},
		1440: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
		1500: {
			slidesPerView: 4,
			spaceBetween: 0,
		},
	}
	
};
const Testimonial = () => {
	return (
	<>
	  <section className="testimonial_section section_space_lg bg_gray">
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
				<div className="admin_thumbnail"><img src="/images/meta/thumbnail_img_3.png" alt="Pet Thumbnail Image"/></div>
				<div className="admin_info">
					<h4 className="admin_name">Marieke</h4>
					<span className="admin_designation">baasje van Bo</span>
				</div>
				</div>
				<ul className="rating_star">
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				</ul>
				<p className="mb-0">Onze hond is veel rustiger sinds de wandelingen met Anouk. Fijn dat het altijd één-op-één is en dat we foto’s krijgen.</p>
				<span className="quote_icon"><i className="fas fa-quote-right"></i></span>
			</div>
			</SwiperSlide>
			{/* Services Block */}
			<SwiperSlide className="carousel_item">
			<div className="testimonial_item">
				<div className="testimonial_admin">
				<div className="admin_thumbnail"><img src="/images/meta/thumbnail_img_3.png" alt="Pet Thumbnail Image"/></div>
				<div className="admin_info">
					<h4 className="admin_name">Tom</h4>
					<span className="admin_designation">baasje van Luna</span>
				</div>
				</div>
				<ul className="rating_star">
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				</ul>
				<p className="mb-0">Je merkt meteen dat Anouk echt oog heeft voor de hond. Onze Labradoodle kijkt elke keer uit naar haar komst.</p>
				<span className="quote_icon"><i className="fas fa-quote-right"></i></span>
			</div>
			</SwiperSlide>
			{/* Services Block */}
			<SwiperSlide className="carousel_item">
			<div className="testimonial_item">
				<div className="testimonial_admin">
				<div className="admin_thumbnail"><img src="/images/meta/thumbnail_img_3.png" alt="Pet Thumbnail Image"/></div>
				<div className="admin_info">
					<h4 className="admin_name">Sophie</h4>
					<span className="admin_designation">baasje van Milo</span>
				</div>
				</div>
				<ul className="rating_star">
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				</ul>
				<p className="mb-0">Super prettig dat er vooraf een kennismaking was. Alles werd doorgenomen en wij laten onze hond met een gerust hart achter.</p>
				<span className="quote_icon"><i className="fas fa-quote-right"></i></span>
			</div>
			</SwiperSlide>
			{/* Services Block */}
			<SwiperSlide className="carousel_item">
			<div className="testimonial_item">
				<div className="testimonial_admin">
				<div className="admin_thumbnail"><img src="/images/meta/thumbnail_img_3.png" alt="Pet Thumbnail Image"/></div>
				<div className="admin_info">
					<h4 className="admin_name">Kevin</h4>
					<span className="admin_designation">baasje van Charlie</span>
				</div>
				</div>
				<ul className="rating_star">
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				</ul>
				<p className="mb-0">Onze pup krijgt precies de aandacht die hij nodig heeft. De thuisbezoeken zijn echt ideaal tijdens onze werkdagen.</p>
				<span className="quote_icon"><i className="fas fa-quote-right"></i></span>
			</div>
			</SwiperSlide>
			{/* Services Block */}
			<SwiperSlide className="carousel_item">
			<div className="testimonial_item">
				<div className="testimonial_admin">
				<div className="admin_thumbnail"><img src="/images/meta/thumbnail_img_3.png" alt="Pet Thumbnail Image"/></div>
				<div className="admin_info">
					<h4 className="admin_name">Linda</h4>
					<span className="admin_designation">baasje van Nala</span>
				</div>
				</div>
				<ul className="rating_star">
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				</ul>
				<p className="mb-0">Geen groepswandelingen was voor ons doorslaggevend. Onze hond is gevoelig en bloeit helemaal op bij Bleiswijkse Snuitjes.</p>
				<span className="quote_icon"><i className="fas fa-quote-right"></i></span>
			</div>
			</SwiperSlide>
			{/* Services Block */}
			<SwiperSlide className="carousel_item">
			<div className="testimonial_item">
				<div className="testimonial_admin">
				<div className="admin_thumbnail"><img src="/images/meta/thumbnail_img_3.png" alt="Pet Thumbnail Image"/></div>
				<div className="admin_info">
					<h4 className="admin_name">Peter</h4>
					<span className="admin_designation">baasje van Max</span>
				</div>
				</div>
				<ul className="rating_star">
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				<li><i className="fas fa-star"></i></li>
				</ul>
				<p className="mb-0">Betrouwbaar, lief en professioneel. We hebben eindelijk een vaste oppas gevonden waar we ons goed bij voelen.</p>
				<span className="quote_icon"><i className="fas fa-quote-right"></i></span>
			</div>
			</SwiperSlide>
		</Swiper>
		</div>
	</section>
	</>
	);
};
export default Testimonial