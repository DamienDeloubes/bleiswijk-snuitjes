import Link from "next/link";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';


const ProductDetails = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>

    <section className="details_section product_details section_space_lg pb-0">
      <div className="container">
        <div className="row mb-5">
          <div className="col col-lg-6">
            <div className="product_gallery_carousel">
              <ul className="badge_group unorder_list_right">
                <li><Link className="badge badge_sale" href="#!">Sale</Link></li>
              </ul>
              <Swiper
                pagination={{clickable: true}}
                modules={[Navigation, Pagination, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={0}
                loop={true}
                autoplay={{delay: 1000,disableOnInteraction: false,}}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="myswiper2 product_gallery_for">
                <SwiperSlide className="image_wrap"><img src="/images/shop/product_img_27.jpg" /></SwiperSlide>
                <SwiperSlide className="image_wrap"><img src="/images/shop/product_img_28.jpg" /></SwiperSlide>
                <SwiperSlide className="image_wrap"><img src="/images/shop/product_img_29.jpg" /></SwiperSlide>
                <SwiperSlide className="image_wrap"><img src="/images/shop/product_img_28.jpg" /></SwiperSlide>
              </Swiper>
              <Swiper
                direction={'vertical'}
                modules={[Navigation, Pagination, Thumbs]}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress={true}
                spaceBetween={30}
                loop={true}
                autoplay={{delay: 1000,disableOnInteraction: false,}}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="myswiper3 product_gallery_nav">
                <SwiperSlide className="image_wrap"><img src="/images/shop/product_img_27.jpg" /></SwiperSlide>
                <SwiperSlide className="image_wrap"><img src="/images/shop/product_img_28.jpg" /></SwiperSlide>
                <SwiperSlide className="image_wrap"><img src="/images/shop/product_img_29.jpg" /></SwiperSlide>
                <SwiperSlide className="image_wrap"><img src="/images/shop/product_img_28.jpg" /></SwiperSlide>
              </Swiper>


              {/*<div className="product_gallery_for">
                <div className="image_wrap">
                  <img src="/images/shop/product_img_27.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_28.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_29.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_27.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_28.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_29.jpg" alt="Dog Residence Mat"/>
                </div>
              </div>
              <div className="product_gallery_nav">
                <div className="image_wrap">
                  <img src="/images/shop/product_img_27.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_28.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_29.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_27.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_28.jpg" alt="Dog Residence Mat"/>
                </div>
                <div className="image_wrap">
                  <img src="/images/shop/product_img_29.jpg" alt="Dog Residence Mat"/>
                </div>
              </div>*/}
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="details_content">
              <h2 className="item_title">Dog Residence Mat</h2>
              <p>Ornare arcu dui vivamus arcu felis bibendum ut. Auctor neque vitae tempus quam pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam. Sagittis purus sit amet volutpat consequat mauris</p>
              <div className="item_review_info d-flex align-items-center">
                <ul className="rating_star">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <div className="review_counter"><span>2</span> Reviews</div>
              </div>
              <div className="item_price">
                <del>$12.39</del>
                <span>$7.99</span>
              </div>
              <ul className="cart_action_wrap unorder_list">
                <li>
                  <div className="quantity_wrap">
                    <span className="quantity_title">Qty:</span>
                    <form action="#">
                      <div className="quantity_form">
                        <button type="button" className="input_number_decrement">
                          <i className="far fa-angle-down"></i>
                        </button>
                        <input className="input_number" type="text" defaultValue="1"/>
                        <button type="button" className="input_number_increment">
                          <i className="far fa-angle-up"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
                <li><Link className="btn btn_primary addtocart_btn" href="page-services"><i className="fas fa-paw"></i> Add to Cart</Link></li>
              </ul>
              <ul className="details_item_info icon_list unorder_list_block">
                <li>
                  <strong>SKU:</strong>
                  <span>74141</span>
                </li>
                <li className="categories_tags">
                  <strong>Categories:</strong>
                  <span>
                    <Link href="#!">Toys</Link>
                    <Link href="#!">Other</Link>
                  </span>
                </li>
                <li className="categories_tags">
                  <strong>Tags:</strong>
                  <span>
                    <Link href="#!">Beds</Link>
                    <Link href="#!">Other</Link>
                  </span>
                </li>
                <li className="share_links">
                  <strong>Share:</strong>
                  <span>
                    <Link href="#!"><i className="fab fa-instagram"></i></Link>
                    <Link href="#!"><i className="fab fa-twitter"></i></Link>
                    <Link href="#!"><i className="fab fa-whatsapp"></i></Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="details_info_box pricing_tab_wrap">
          <ul className="nav tabs_nav_pill tabs_nav" role="tablist">
            <li className="nav-item" role="presentation">
              <button className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Description</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Additional Info</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)} data-tab="#tab3">Reviews</button>
            </li>
          </ul>
          <div className="tab-content">
            <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
              <h3>Product Description</h3>
              <p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus voluptates nisi hic alias libero explicabo reiciendis sint ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae. One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus voluptates nisi hic alias libero explicabo reiciendis sint ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
              <p className="mb-0">One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus voluptates nisi hic alias libero explicabo reiciendis sint ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
            </div>

            <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
              <ul className="additional_info_table unorder_list_block">
                <li>
                  <span>Brand</span>
                  <span>Envato</span>
                </li>
                <li>
                  <span>Color</span>
                  <span>Black</span>
                </li>
                <li>
                  <span>Size</span>
                  <span>Medium</span>
                </li>
                <li>
                  <span>Weight</span>
                  <span>27 KG</span>
                </li>
                <li>
                  <span>Dimensions</span>
                  <span>16x22x123 CM</span>
                </li>
              </ul>
            </div>

            <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
              <div className="row">
                <div className="col col-lg-6">
                  <div className="comments_wrap">
                    <h3>Customer Questions & Answers</h3>
                    <ul className="comments_list unorder_list_block">
                      <li>
                        <div className="comment_item">
                          <div className="thumbnail_wrap text-center">
                            <div className="commenter_thumbnail">
                              <img src="/images/meta/thumbnail_img_5.jpg" alt="commenter Image"/>
                            </div>
                            <h4 className="commenter_name">Melissa</h4>
                          </div>
                          <div className="comment_content">
                            <div className="mb-3 d-md-flex align-items-center justify-content-md-between">
                              <span className="comment_date">February 5, 2022, at 11:22 am</span>
                              <ul className="rating_star">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                              </ul>
                            </div>
                            <p className="mb-0">Ultrices eros in cursus turpis massa tincidunt. Magna eget est lorem ipsum dolor sit amet. Eu tincidunt tortor aliquam nulla facilisi cras. Ipsum dolor sit amet consectetur adipiscing elit. Id venenatis a condimentum </p>
                          </div>
                        </div>
                        <ul className="comments_list unorder_list_block">
                          <li>
                            <div className="comment_item">
                              <div className="thumbnail_wrap text-center">
                                <div className="commenter_thumbnail">
                                  <img src="/images/meta/thumbnail_img_6.jpg" alt="commenter Image"/>
                                </div>
                                <h4 className="commenter_name">Luvleen</h4>
                              </div>
                              <div className="comment_content">
                                <div className="mb-3 d-md-flex align-items-center justify-content-md-between">
                                  <span className="comment_date">February 5, 2022, at 01:01 pm</span>
                                  <ul className="rating_star">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                  </ul>
                                </div>
                                <p className="mb-0">Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Placerat orci nulla pellentesque dignissim. Bibendum est ultricies integer quis auctor elit sed vulputate</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment_item">
                          <div className="thumbnail_wrap text-center">
                            <div className="commenter_thumbnail">
                              <img src="/images/meta/thumbnail_img_7.jpg" alt="commenter Image"/>
                            </div>
                            <h4 className="commenter_name">Fabiana</h4>
                          </div>
                          <div className="comment_content">
                            <div className="mb-3 d-md-flex align-items-center justify-content-md-between">
                              <span className="comment_date">February 9, 2022, at 09:34 am</span>
                              <ul className="rating_star">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                              </ul>
                            </div>
                            <p className="mb-0">Ultrices eros in cursus turpis massa tincidunt. Magna eget est lorem ipsum dolor sit amet. Eu tincidunt tortor aliquam nulla facilisi cras. Ipsum dolor sit amet consectetur adipiscing elit. Id venenatis a condimentum </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-6">
                  <div className="review_form">
                    <h3>Add a review</h3>
                    <div className="review_star_wrap mb-4">
                      <h4 className="input_title">Your rating <sup>*</sup></h4>
                      <ul className="rating_star">
                        <li><Link href="#!"><i className="fas fa-star"></i></Link></li>
                        <li><Link href="#!"><i className="fas fa-star"></i></Link></li>
                        <li><Link href="#!"><i className="fas fa-star"></i></Link></li>
                        <li><Link href="#!"><i className="fas fa-star"></i></Link></li>
                        <li><Link href="#!"><i className="fas fa-star"></i></Link></li>
                      </ul>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col">
                          <div className="form_item mb-0">
                            <label className="input_title" htmlFor="review_comment">Your review <sup>*</sup></label>
                            <textarea id="review_comment" name="comment" placeholder="Type your review"></textarea>
                          </div>
                        </div>
                        <div className="col col-md-6">
                          <div className="form_item mb-0">
                            <label className="input_title" htmlFor="reviewer_name">Name <sup>*</sup></label>
                            <input id="reviewer_name" type="text" name="name" placeholder="Type your Name"/>
                          </div>
                        </div>
                        <div className="col col-md-6">
                          <div className="form_item mb-0">
                            <label className="input_title" htmlFor="reviewer_name">Email <sup>*</sup></label>
                            <input id="reviewer_email" type="text" name="email" placeholder="Type your Email"/>
                          </div>
                        </div>
                        <div className="col">
                          <button type="submit" className="btn btn_primary">
                            <i className="fas fa-paw"></i>
                            Send a review
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default ProductDetails
