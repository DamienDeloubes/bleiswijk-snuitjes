import Link from "next/link";
import React, { useState } from 'react';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>

    <section className="gallery_section section_space_lg pb-0">
      <div className="container">
        <div className="pricing_tab_wrap">
          <ul className="nav tabs_nav unorder_list_center" role="tablist">
            <li className="nav-item"><button className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)} data-tab="#tab1">Walking & Sitting</button></li>
            <li className="nav-item"><button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)} data-tab="#tab2">Grooming</button></li>
            <li className="nav-item"><button className={activeIndex === 3 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(3)} data-tab="#tab3">Training</button></li>
            <li className="nav-item"><button className={activeIndex === 4 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(4)} data-tab="#tab3">Pet Taxi</button></li>
            <li className="nav-item"><button className={activeIndex === 5 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(5)} data-tab="#tab3">Health & Wellness</button></li>
          </ul>
          <div className="tab-content">
            <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
              <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_1.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_2.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_3.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_4.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_5.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_6.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
              <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_2.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_4.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_6.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_1.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_3.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_5.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
              <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_3.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_6.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_1.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_2.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_4.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_5.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="tab4">
              <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_1.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_2.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_3.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_4.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_5.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_6.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="tab5">
              <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_2.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_4.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_6.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_1.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_3.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
                  </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-6">
                  <div className="gallery_item">
                    <div className="item_image">
                      <img src="/images/gallery/gallery_img_5.jpg" alt="Pet Image"/>
                    </div>
                    <Link className="item_content" href="page-services">
                      <span className="d-block"><small>SERVICES</small></span>
                      <strong className="d-block">Cat Grooming</strong>
                    </Link>
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
export default Gallery
