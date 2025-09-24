import Link from "next/link";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const NewsDetails = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>

    <section className="details_section blog_details section_space_lg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-9">
            <div className="details_image"><img src="/images/blog/blog_details_img_1.jpg" alt="Pet Care Blog"/></div>
            <div className="details_content">
              <h2 className="item_title">6 Tips to Keep Your Pet Healthy and Happy</h2>
              <ul className="post_meta unorder_list">
                <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
              </ul>
              <h3 className="description_title">Lacus suspendisse faucibus interdum posuere dolor purus non enim</h3>
              <p>Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Massa ultricies mi quis hendrerit. Purus sit amet volutpat consequat mauris nunc congue nisi. Aenean vel elit scelerisque mauris pellentesque. Netus et malesuada fames ac turpis egestas integer eget. Nunc non blandit massa enim nec dui nunc.</p>
              <div className="row mb-3">
                <div className="col col-md-6">
                  <ul className="icon_list unorder_list_block">
                    <li><i className="fas fa-circle"></i> <span>Massa massa ultricies mi quis hendrerit</span> </li>
                    <li><i className="fas fa-circle"></i> <span>Facilisi cras fermentum odio eu feugiat</span> </li>
                    <li><i className="fas fa-circle"></i> <span>Placerat vestibulum lectus mauris ultrices eros</span> </li>
                    <li><i className="fas fa-circle"></i> <span>Nullam non nisi est sit amet facilisis</span> </li>
                  </ul>
                </div>
                <div className="col col-md-6">
                  <ul className="icon_list unorder_list_block">
                    <li>1. Lacus sed viverra tellus habitasse </li>
                    <li>2. Gravida neque convallis a semper </li>
                    <li>3. Lacus sed viverra tellus habitasse </li>
                    <li>4. Gravida neque convallis a semper </li>
                  </ul>
                </div>
              </div>
              <h3 className="description_title">Sit amet justo donec enim diam vulputate</h3>
              <p>Elit scelerisque mauris pellentesque pulvinar. Quam adipiscing vitae proin sagittis nisl. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. In dictum non consectetur a. Nunc vel risus commodo viverra.</p>
              <blockquote>
                <i className="fas fa-quote-right"></i>
                <p className="mb-2">“ Aliquet risus feugiat in ante metus dictum at tempor. Id leo in vitae turpis massa sed elementum tempus egestas. Justo eget magna fermentum iaculis eu non diam phasellus ”</p>
                <cite title="Tina Bradley">Tina Bradley</cite>
              </blockquote>
              <p>Quisque non tellus orci ac auctor augue mauris augue neque. Lacus sed viverra tellus in hac habitasse platea dictumst. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Massa tincidunt dui ut ornare lectus sit. Gravida neque convallis a cras semper auctor neque vitae. Lacus sed turpis tincidunt id aliquet risus feugiat.</p>
              <h3 className="description_title">Sit amet justo donec enim diam vulputate</h3>
              <p>Dui faucibus in ornare quam viverra orci sagittis eu. Libero nunc consequat interdum varius sit amet. Ut aliquam purus sit amet luctus venenatis lectus. Pharetra pharetra massa massa ultricies mi quis. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Lectus sit amet est placerat.</p>
              <div className="row mb-3">
                <div className="col col-md-6">
                  <div className="details_image m-0"><img src="/images/blog/blog_details_img_2.jpg" alt="Pet Care Blog"/></div>
                </div>
                <div className="col col-md-6">
                  <div className="details_image m-0"><img src="/images/blog/blog_details_img_3.jpg" alt="Pet Care Blog"/></div>
                </div>
              </div>
              <p>Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Nec tincidunt praesent semper feugiat nibh sed. Felis eget nunc lobortis mattis aliquam. Iaculis eu non diam phasellus vestibulum. Aliquam id diam maecenas ultricies mi eget mauris.</p>
              <hr/>
              <div className="tag_share_links">
                <div className="tags_wrap">
                  <h3 className="tag_share_title">Tags</h3>
                  <ul className="blog_tags_list tags_list unorder_list">
                    <li><Link href="#!">Health</Link></li>
                    <li><Link href="#!">Nature</Link></li>
                    <li><Link href="#!">Carrier</Link></li>
                  </ul>
                </div>
                <div className="share_wrap">
                  <h3 className="tag_share_title">Share</h3>
                  <ul className="social_links unorder_list">
                    <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="#!"><i className="fab fa-whatsapp"></i></Link></li>
                  </ul>
                </div>
              </div>
              <ul className="prev_next_post unorder_list">
                <li>
                  <span>Previous</span>
                  <Link href="#!">
                    <i className="fas fa-arrow-left"></i>
                    <strong>Dental Problems Cats Encounter Across The Years</strong>
                  </Link>
                </li>
                <li>
                  <span>Next</span>
                  <Link href="#!">
                    <i className="fas fa-arrow-right"></i>
                    <strong>5 Crazy Things Dogs Do When Left Alone At Home</strong>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="comment_area">
              <h3 className="comment_area_title">Comments (1)</h3>
              <ul className="comments_list unorder_list_block">
                <li>
                  <div className="comment_item">
                    <div className="commenter_thumbnail">
                      <img src="/images/meta/thumbnail_img_5.jpg" alt="Thumbnail"/>
                    </div>
                    <div className="commenter_info position-relative">
                      <h4 className="commenter_name">Benjami Costa</h4>
                      <ul className="comment_post_time unorder_list">
                        <li>7 January, 2022</li>
                        <li>10:21 am</li>
                      </ul>
                      <p className="mb-0">I believe everyone should have the opportunity to create the progress through the tech and develop the skills. Luxury home prices in Sydney declined for the first time. Across the world, our sports writers & arts critics.</p>
                      <Link className="reply_btn btn border_primary" href="#!"><i className="fas fa-reply"></i> Reply</Link>
                    </div>
                  </div>
                  <ul className="comments_list unorder_list_block">
                    <li>
                      <div className="comment_item">
                        <div className="commenter_thumbnail">
                          <img src="/images/meta/thumbnail_img_6.jpg" alt="Thumbnail"/>
                        </div>
                        <div className="commenter_info position-relative">
                          <h4 className="commenter_name">Benjami Costa</h4>
                          <ul className="comment_post_time unorder_list">
                            <li>7 January, 2022</li>
                            <li>10:21 am</li>
                          </ul>
                          <p className="mb-0">I believe everyone should have the opportunity to create the progress through the tech and develop the skills. Luxury home prices in Sydney declined for the first time. Across the world, our sports writers & arts critics.</p>
                          <Link className="reply_btn btn border_primary" href="#!"><i className="fas fa-reply"></i> Reply</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="comment_item">
                    <div className="commenter_thumbnail">
                      <img src="/images/meta/thumbnail_img_7.jpg" alt="Thumbnail"/>
                    </div>
                    <div className="commenter_info position-relative">
                      <h4 className="commenter_name">Benjami Costa</h4>
                      <ul className="comment_post_time unorder_list">
                        <li>7 January, 2022</li>
                        <li>10:21 am</li>
                      </ul>
                      <p className="mb-0">I believe everyone should have the opportunity to create the progress through the tech and develop the skills. Luxury home prices in Sydney declined for the first time. Across the world, our sports writers & arts critics.</p>
                      <Link className="reply_btn btn border_primary" href="#!"><i className="fas fa-reply"></i> Reply</Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="comment_form">
              <h3 className="comment_area_title">Leave a Commet</h3>
              <form action="#">
                <div className="form_item">
                  <label className="input_title" htmlFor="input_review">Your review<sup>*</sup></label>
                  <textarea name="comment" id="input_review" placeholder="Type your review"></textarea>
                </div>
                <div className="row">
                  <div className="col col-md-6">
                    <div className="form_item mb-0">
                      <label className="input_title" htmlFor="input_name">Name<sup>*</sup></label>
                      <input id="input_name" type="text" name="name" placeholder="Type Your Name"/>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form_item mb-0">
                      <label className="input_title" htmlFor="input_email">Email<sup>*</sup></label>
                      <input id="input_email" type="email" name="email" placeholder="Type Your Email"/>
                    </div>
                  </div>
                </div>
                <div className="checkbox_item">
                  <input type="checkbox" id="checkbox_save"/>
                  <label htmlFor="checkbox_save">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
                <button type="submit" className="btn btn_primary"><i className="fas fa-paw"></i> Leave a Comment</button>
              </form>
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
                      <Link className="item_image" href="news-details">
                        <img src="/images/blog/blog_image_12.jpg" alt="Pet Care Services"/>
                      </Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="news-details">How to Protect Your Cat From Heatstroke</Link></h3>
                        <Link className="item_admin" href="#!"><i className="fas fa-user"></i> by Miriam Jesus</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="small_blog_item">
                      <Link className="item_image" href="news-details">
                        <img src="/images/blog/blog_image_13.jpg" alt="Pet Care Services"/>
                      </Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="news-details">Why Are Dogs Scared of Fireworks? </Link></h3>
                        <Link className="item_admin" href="#!"><i className="fas fa-user"></i> by Paulina Gayoso</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="small_blog_item">
                      <Link className="item_image" href="news-details">
                        <img src="/images/blog/blog_image_14.jpg" alt="Pet Care Services"/>
                      </Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="news-details">How Do Dog’s Digest Their Food?</Link></h3>
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
                      <i className="far fa-comment-dots"></i>
                      <p className="mb-0"> Lisanne Viscaal Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
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

    <section className="blog_section section_space_lg bg_gray" style={{ backgroundImage: 'url(images/overlay/shapes_overlay_7.svg)' }}>
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title_text mb-0">Other Posts</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col col-lg-4">
            <div className="blog_item">
              <ul className="badge_group unorder_list_right">
                <li><Link className="badge badge_sale" href="#!">CATEGORY</Link></li>
              </ul>
              <Link className="item_image" href="news-details"><img src="/images/blog/blog_image_15.jpg" alt="Pet Care Image"/></Link>
              <div className="item_content">
                <ul className="post_meta unorder_list">
                  <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                  <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                </ul>
                <h3 className="item_title"><Link href="news-details">5 Crazy Things Dogs Do When Left Alone At Home</Link></h3>
                <p className="mb-0">Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
              </div>
            </div>
          </div>

          <div className="col col-lg-4">
            <div className="blog_item">
              <ul className="badge_group unorder_list_right">
                <li><Link className="badge badge_sale" href="#!">CATEGORY</Link></li>
              </ul>
              <Link className="item_image" href="news-details"><img src="/images/blog/blog_image_16.jpg" alt="Pet Care Image"/></Link>
              <div className="item_content">
                <ul className="post_meta unorder_list">
                  <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                  <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                </ul>
                <h3 className="item_title"><Link href="news-details">Your Dog Desperately Needs From You</Link></h3>
                <p className="mb-0">Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet </p>
              </div>
            </div>
          </div>

          <div className="col col-lg-4">
            <div className="blog_item">
              <ul className="badge_group unorder_list_right">
                <li><Link className="badge badge_sale" href="#!">CATEGORY</Link></li>
              </ul>
              <Link className="item_image" href="news-details"><img src="/images/blog/blog_image_17.jpg" alt="Pet Care Image"/></Link>
              <div className="item_content">
                <ul className="post_meta unorder_list">
                  <li><Link href="#!"><i className="fas fa-user"></i> by Corabelle Durrad</Link></li>
                  <li><Link href="#!"><i className="fas fa-calendar-day"></i> 02.01.2022</Link></li>
                </ul>
                <h3 className="item_title"><Link href="news-details">Top Cat Foods to Consider If You Are a First Time Owner</Link></h3>
                <p className="mb-0">Vel eros donec ac odio tempor orci dapibus ultrices. Arcu felis bibendum ut tristique et egestas quis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};
export default NewsDetails
