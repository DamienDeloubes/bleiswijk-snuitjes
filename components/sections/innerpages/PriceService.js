import Link from "next/link";
import React, { useState } from 'react';

const PriceService = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
  <>

  <section className="service_section section_space_lg" style={{ backgroundImage: 'url(images/overlay/shapes_overlay_6.svg)' }}>
    <div className="container">
      <div className="section_title text-center">
        <div className="row justify-content-center">
          <div className="col col-lg-5">
            <h2 className="title_text">
              <span className="sub_title">Our Prices</span>
              Pet Services + Rates
            </h2>
            <p className="mb-0">We can fully customize your pet sitting schedule to fit your pet’s needs. Pick and choose what visits work best for you and your family</p>
          </div>
        </div>
      </div>

      <div className="pricing_tab_wrap">
        <ul className="nav tabs_nav unorder_list_center" role="tablist">
          <li className="nav-item"><button className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)} data-tab="#tab1">Walking & Sitting</button></li>
          <li className="nav-item"><button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)} data-tab="#tab2">Training</button></li>
          <li className="nav-item"><button className={activeIndex === 3 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(3)} data-tab="#tab3">Pet Taxi</button></li>
          <li className="nav-item"><button className={activeIndex === 4 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(4)} data-tab="#tab4">Pet Hotel</button></li>
        </ul>
        <div className="tab-content">
          <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
            <div className="row">
              <div className="col col-lg-6">
                <div className="services_price_items_wrap">
                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_1.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 15 minute visit</div>
                        <div className="item_price"><span>$22.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">1 x Visit per day, small pet visit can be added per quote</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_2.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 30 minute visit</div>
                        <div className="item_price"><span>$29.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">A 12-hour stay, including the evening visit and morning visit</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_3.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 45 minute visit</div>
                        <div className="item_price"><span>$36.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">Drop-off and pick-up times are flexible. $10 each additional dog. </h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>
                </div>
              </div>

              <div className="col col-lg-6">
                <div className="services_price_items_wrap">
                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_4.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 29 minute visit</div>
                        <div className="item_price"><span>$22.00</span></div>
                      </div><h3 className="item_title mb-0">1 x Visit per day, small pet visit can be added per quote</h3></div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_5.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 65 Overnight Pet Sitting</div>
                        <div className="item_price"><span>$29.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">A 12-hour stay, including the evening visit and morning visit</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_6.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 40 Private Boarding</div>
                        <div className="item_price"><span>$36.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">Drop-off and pick-up times are flexible. $10 each additional dog. </h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
            <div className="row">
              <div className="col col-lg-6">
                <div className="services_price_items_wrap">
                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_1.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 15 minute visit</div>
                        <div className="item_price"><span>$23.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">1 x Visit per day, small pet visit can be added per quote</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_2.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 30 minute visit</div>
                        <div className="item_price"><span>$28.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">A 12-hour stay, including the evening visit and morning visit</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_3.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 45 minute visit</div>
                        <div className="item_price"><span>$35.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">Drop-off and pick-up times are flexible. $10 each additional dog. </h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>
                </div>
              </div>

              <div className="col col-lg-6">
                <div className="services_price_items_wrap">
                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_4.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 29 minute visit</div>
                        <div className="item_price"><span>$21.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">1 x Visit per day, small pet visit can be added per quote</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_5.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 65 Overnight Pet Sitting</div>
                        <div className="item_price"><span>$27.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">A 12-hour stay, including the evening visit and morning visit</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_6.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 40 Private Boarding</div>
                        <div className="item_price"><span>$36.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">Drop-off and pick-up times are flexible. $10 each additional dog. </h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
            <div className="row">
              <div className="col col-lg-6">
                <div className="services_price_items_wrap">
                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_1.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 15 minute visit</div>
                        <div className="item_price"><span>$22.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">1 x Visit per day, small pet visit can be added per quote</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_2.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 30 minute visit</div>
                        <div className="item_price"><span>$29.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">A 12-hour stay, including the evening visit and morning visit</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_3.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 45 minute visit</div>
                        <div className="item_price"><span>$36.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">Drop-off and pick-up times are flexible. $10 each additional dog. </h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>
                </div>
              </div>

              <div className="col col-lg-6">
                <div className="services_price_items_wrap">
                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_4.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 29 minute visit</div>
                        <div className="item_price"><span>$22.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">1 x Visit per day, small pet visit can be added per quote</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_5.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 65 Overnight Pet Sitting</div>
                        <div className="item_price"><span>$29.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">A 12-hour stay, including the evening visit and morning visit</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_6.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 40 Private Boarding</div>
                        <div className="item_price"><span>$36.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">Drop-off and pick-up times are flexible. $10 each additional dog. </h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="tab4">
            <div className="row">
              <div className="col col-lg-6">
                <div className="services_price_items_wrap">
                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_1.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 15 minute visit</div>
                        <div className="item_price"><span>$20.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">1 x Visit per day, small pet visit can be added per quote</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_2.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 30 minute visit</div>
                        <div className="item_price"><span>$30.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">A 12-hour stay, including the evening visit and morning visit</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_3.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 45 minute visit</div>
                        <div className="item_price"><span>$35.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">Drop-off and pick-up times are flexible. $10 each additional dog. </h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>
                </div>
              </div>

              <div className="col col-lg-6">
                <div className="services_price_items_wrap">
                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_4.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 29 minute visit</div>
                        <div className="item_price"><span>$21.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">1 x Visit per day, small pet visit can be added per quote</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_5.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 65 Overnight Pet Sitting</div>
                        <div className="item_price"><span>$35.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">A 12-hour stay, including the evening visit and morning visit</h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>

                  <div className="service_price_item">
                    <div className="item_image">
                      <img src="/images/service/service_img_6.jpg" alt="Pet Care Service"/>
                    </div>
                    <div className="item_content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="service_time"><i className="fas fa-clock"></i> 40 Private Boarding</div>
                        <div className="item_price"><span>$40.00</span></div>
                      </div>
                      <h3 className="item_title mb-0">Drop-off and pick-up times are flexible. $10 each additional dog. </h3>
                    </div>
                    <Link className="item_global_link" href="page-service-details"></Link>
                  </div>
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
export default PriceService
