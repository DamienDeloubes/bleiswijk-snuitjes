import Link from "next/link";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const NewsGrid = () => {
  const [value, onChange] = useState(new Date());

  

  return (
    <>

   <section className="blog_section section_space_lg pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-9">
            <div className="blogs_wrapper">
              <div className="row">
                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list_right">
                      <li><Link className="badge badge_sale" href="#!">PET HEALTH</Link></li>
                    </ul>
                    <Link className="item_image" href="news-details">
                      <img src="/images/blog/blog_image_4.jpg" alt="Pet Care Services"/>
                    </Link>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-thumbtack"></i> Sticky Post</Link></li>
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title">
                        <Link href="news-details">
                          Top Cat Foods to Consider If You Are a <span className="d-lg-block">First Time Owner</span>
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet 
                      </p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span>
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list_right">
                      <li><Link className="badge badge_sale" href="#!">PET HEALTH</Link></li>
                    </ul>
                    <Link className="item_image" href="news-details">
                      <img src="/images/blog/blog_image_5.jpg" alt="Pet Care Services"/>
                    </Link>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title">
                        <Link href="news-details">
                          6 Tips to Keep Your Pet Healthy <span className="d-lg-block">and Happy</span>
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
                      </p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span>
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list p-0">
                      <li><Link className="badge badge_sale" href="#!">PET FOOD</Link></li>
                    </ul>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title">
                        <Link href="news-details">
                          Choosing the Right Food <span className="d-lg-block">for Your Pet </span>
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Semper feugiat nibh sed pulvinar proin gravida. Turpis cursus in hac habitasse platea dictumst quisque
                      </p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span>
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list p-0">
                      <li><Link className="badge badge_sale" href="#!">PET TOYS</Link></li>
                    </ul>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title">
                        <Link href="news-details">
                          How to Choose the Right Toys <span className="d-lg-block">for Your Dog?</span>
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Lacus luctus accumsan tortor posuere ac ut consequat semper. Ut tristique et egestas quis
                      </p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span>
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list_right">
                      <li><Link className="badge badge_sale" href="#!">PET HEALTH</Link></li>
                    </ul>
                    <Link className="item_image" href="news-details">
                      <img src="/images/blog/blog_image_6.jpg" alt="Pet Care Services"/>
                    </Link>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title">
                        <Link href="news-details">
                          Your Dog Desperately Needs <span className="d-lg-block">From You</span>
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet 
                      </p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span>
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list_right">
                      <li><Link className="badge badge_sale" href="#!">PET HEALTH</Link></li>
                    </ul>
                    <Link className="item_image" href="news-details"><img src="/images/blog/blog_image_7.jpg" alt="Pet Care Services"/></Link>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title"><Link href="news-details">5 Crazy Things Dogs Do When <span className="d-lg-block">Left Alone At Home</span></Link></h3>
                      <p className="mb-0">Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span>
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list_right">
                      <li><Link className="badge badge_sale" href="#!">PET HEALTH</Link></li>
                    </ul>
                    <Link className="item_image" href="news-details"><img src="/images/blog/blog_image_8.jpg" alt="Pet Care Services"/></Link>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title"><Link href="news-details"> How to Encourage Positive Behaviour <span className="d-lg-block">in Your Dogs</span></Link></h3>
                      <p className="mb-0">Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet </p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span>
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list_right">
                      <li><Link className="badge badge_sale" href="#!">PET HEALTH</Link></li>
                    </ul>
                    <Link className="item_image" href="news-details">
                      <img src="/images/blog/blog_image_9.jpg" alt="Pet Care Services"/>
                    </Link>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title"><Link href="news-details">How to Encourage Positive Behaviour <span className="d-lg-block">in Your Dogs</span></Link></h3>
                      <p className="mb-0">Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet </p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span>
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list_right">
                      <li><Link className="badge badge_sale" href="#!">PET HEALTH</Link></li>
                    </ul>
                    <Link className="item_image" href="news-details">
                      <img src="/images/blog/blog_image_10.jpg" alt="Pet Care Services"/>
                    </Link>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title"><Link href="news-details">Dental Problems Cats Encounter <span className="d-lg-block">Across The Years</span></Link></h3>
                      <p className="mb-0">Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span>
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <div className="blog_item">
                    <ul className="badge_group unorder_list_right">
                      <li><Link className="badge badge_sale" href="#!">PET HEALTH</Link></li>
                    </ul>
                    <Link className="item_image" href="news-details">
                      <img src="/images/blog/blog_image_11.jpg" alt="Pet Care Services"/>
                    </Link>
                    <div className="item_content">
                      <ul className="post_meta unorder_list">
                        <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                        <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                      </ul>
                      <h3 className="item_title">
                        <Link href="news-details"> How To Teach Your Puppy <span className="d-lg-block"> It's Name?</span> </Link>
                      </h3>
                      <p className="mb-0">
                        Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
                      </p>
                      <div className="details_btn">
                        <Link className="btn_unfill" href="news-details">
                          <span>Read Post</span> <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="pagination_wrap p-0">
                    <ul className="pagination_nav unorder_list">
                      <li className="active"><Link href="#!">1</Link></li>
                      <li><Link href="#!">2</Link></li>
                      <li><Link href="#!">3</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-lg-3">
            <aside className="sidebar_section">
              <div className="sb_widget">
                <h3 className="sb_widget_title">Categories</h3>
                <ul className="icon_list sb_category_list unorder_list_block">
                  <li><Link href="#!"><i className="fal fa-angle-right"></i> <span>Pet Health</span> <small>23</small></Link></li>
                  <li><Link href="#!"><i className="fal fa-angle-right"></i> <span>Grooming</span> <small>31</small></Link></li>
                  <li><Link href="#!"><i className="fal fa-angle-right"></i> <span>Pet Food</span> <small>34</small></Link></li>
                  <li><Link href="#!"><i className="fal fa-angle-right"></i> <span>Training</span> <small>18</small></Link></li>
                  <li><Link href="#!"><i className="fal fa-angle-right"></i> <span>Pet Toys</span> <small>19</small></Link></li>
                </ul>
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title">Related products</h3>
                <ul className="small_post_wrap unorder_list_block">
                  <li>
                    <div className="small_blog_item">
                      <Link className="item_image" href="news-details"><img src="/images/blog/blog_image_12.jpg" alt="Pet Care Services"/></Link>
                      <div className="item_content">
                        <h3 className="item_title"> <Link href="news-details"> How to Protect Your Cat From Heatstroke </Link></h3>
                        <Link className="item_admin" href="#!"> <i className="fas fa-user"></i> by Miriam Jesus </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="small_blog_item">
                      <Link className="item_image" href="news-details"><img src="/images/blog/blog_image_13.jpg" alt="Pet Care Services"/></Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="news-details">Why Are Dogs Scared of Fireworks?  </Link></h3>
                        <Link className="item_admin" href="#!"><i className="fas fa-user"></i> by Paulina Gayoso</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="small_blog_item">
                      <Link className="item_image" href="news-details"><img src="/images/blog/blog_image_14.jpg" alt="Pet Care Services"/></Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="news-details"> How Do Dog’s Digest Their Food?</Link></h3>
                        <Link className="item_admin" href="#!"><i className="fas fa-user"></i> by Neville Griffin</Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title">Product Tag</h3>
                <ul className="blog_tags_list tags_list unorder_list">
                  <li><Link href="#!">Toys</Link></li>
                  <li><Link href="#!">Collars</Link></li>
                  <li><Link href="#!">Nature</Link></li>
                  <li><Link href="#!">Healthy</Link></li>
                  <li><Link href="#!">Names</Link></li>
                  <li><Link href="#!">Care</Link></li>
                  <li><Link href="#!">Pillow</Link></li>
                  <li><Link href="#!">Training</Link></li>
                  <li><Link href="#!">Brand</Link></li>
                </ul>
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title">Calendar</h3>
                <Calendar onChange={onChange} value={value} />

              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title">Archives</h3>
                <ul className="icon_list sb_category_list unorder_list_block">
                  <li><Link href="#!"><i className="fas fa-calendar-alt"></i> <span>January</span> <small>22</small></Link></li>
                  <li><Link href="#!"><i className="fas fa-calendar-alt"></i> <span>February</span> <small>12</small></Link></li>
                  <li><Link href="#!"><i className="fas fa-calendar-alt"></i> <span>March</span> <small>24</small></Link></li>
                </ul>
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title">Comments</h3>
                <ul className="twitter_feed unorder_list_block">
                  <li>
                    <Link href="#!">
                      <i className="far fa-comment-dots"></i><p className="mb-0"> Lisanne Viscaal Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="far fa-comment-dots"></i>
                      <p className="mb-0"><strong>Admin</strong> Nunc id cursus metus aliquam eleifend mi in nulla. Sit amet venenatis urna cursus</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="far fa-comment-dots"></i>
                      <p className="mb-0"><strong>Carole Chimako</strong> Odio eu feugiat pretium nibh ipsum consequat nisl. Ipsum consequat nisl vel pretium</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};
export default NewsGrid
