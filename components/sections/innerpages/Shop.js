import Link from "next/link";
import ReactSlider from 'react-slider';


const Shop = () => {

  return (
    <>

    <section className="product_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-9">
            <div className="filter_topdar">
              <div className="filter_search_result"> Showing <span>1-9</span> of <span>20</span> results</div>
              <div className="select_option mb-0 text-end">
                <select>
                  <option data-display="Sorting The Products">Select A Option</option>
                  <option value="1">Default Sorting</option>
                  <option value="2">Sort By Date</option>
                  <option value="3">Sort By Price</option>
                  <option value="4">Sort Category</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                  <div className="item_image">
                    <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_15.jpg" alt="Pink Spiked Collar"/></Link>
                    <ul className="cart_btns_group">
                      <li><Link href="#!">Add To Cart</Link></li>
                      <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                      <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
                    </ul>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="shop-details">Pink Spiked Collar</Link></h3>
                    <ul className="rating_star">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="far fa-star"></i></li>
                    </ul>
                    <div className="item_price"><span>$7.23</span></div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                  <ul className="badge_group unorder_list_right">
                    <li><Link className="badge badge_sale" href="#!">Sale</Link></li>
                  </ul>
                  <div className="item_image">
                    <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_16.jpg" alt="Teeth Cleaning Toy"/></Link>
                    <ul className="cart_btns_group">
                      <li><Link href="#!">Add To Cart</Link></li>
                      <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                      <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
                    </ul>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="shop-details">Teeth Cleaning Toy</Link></h3>
                    <ul className="rating_star">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                    <div className="item_price"><del>$12.39</del><span>$7.99</span></div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                  <div className="item_image">
                    <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_17.jpg" alt="Dog Residence Mat"/></Link>
                    <ul className="cart_btns_group">
                      <li><Link href="#!">Add To Cart</Link></li>
                      <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                      <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
                    </ul>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="shop-details">Dog Residence Mat</Link></h3>
                    <ul className="rating_star">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                    <div className="item_price"><span>$29.34</span></div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                  <ul className="badge_group unorder_list_right">
                    <li><Link className="badge badge_sale" href="#!">Sale</Link></li>
                  </ul>
                  <div className="item_image">
                    <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_18.jpg" alt="Smart Cat Scratching"/></Link>
                    <ul className="cart_btns_group">
                      <li><Link href="#!">Add To Cart</Link></li>
                      <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                      <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
                    </ul>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="shop-details">Smart Cat Scratching</Link></h3>
                    <ul className="rating_star">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                    <div className="item_price"><del>$34.99</del><span>$29.99</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                  <div className="item_image">
                    <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_19.jpg" alt="Black Spike Dog Collar"/></Link>
                    <ul className="cart_btns_group">
                      <li><Link href="#!">Add To Cart</Link></li>
                      <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                      <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
                    </ul>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="shop-details">Black Spike Dog Collar</Link></h3>
                    <ul className="rating_star">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="far fa-star"></i></li>
                      <li><i className="far fa-star"></i></li>
                    </ul>
                    <div className="item_price"><span>$10.66</span></div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                  <div className="item_image">
                    <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_20.jpg" alt=" Home For Pets"/></Link>
                    <ul className="cart_btns_group">
                      <li><Link href="#!">Add To Cart</Link></li>
                      <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                      <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
                    </ul>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="shop-details"> Home For Pets</Link></h3>
                    <ul className="rating_star">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                    <div className="item_price"><span>$32.99</span></div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                  <div className="item_image">
                    <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_21.jpg" alt="Tug of War Dog Toy"/></Link>
                    <ul className="cart_btns_group">
                      <li><Link href="#!">Add To Cart</Link></li>
                      <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                      <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
                    </ul>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="shop-details">Tug of War Dog Toy</Link></h3>
                    <ul className="rating_star">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="far fa-star"></i></li>
                    </ul>
                    <div className="item_price"><span>$10.59</span></div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                  <ul className="badge_group unorder_list_right">
                    <li><Link className="badge badge_sale" href="#!">Sale</Link></li>
                  </ul>
                  <div className="item_image">
                    <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_22.jpg" alt="Flying Fish Cat Scratching"/></Link>
                    <ul className="cart_btns_group">
                      <li><Link href="#!">Add To Cart</Link></li>
                      <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                      <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
                    </ul>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="shop-details">Flying Fish Cat Scratching</Link></h3>
                    <ul className="rating_star">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                    <div className="item_price"><del>$41.34</del><span>$34.12</span></div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="product_item">
                  <div className="item_image">
                    <Link className="image_wrap" href="shop-details"><img src="/images/shop/product_img_23.jpg" alt="Flying Fish Cat Scratching "/></Link>
                    <ul className="cart_btns_group">
                      <li><Link href="#!">Add To Cart</Link></li>
                      <li><Link href="#!"><i className="far fa-heart"></i></Link></li>
                      <li><Link href="#!" data-bs-toggle="modal" data-bs-target="#quick_view_popup"><i className="far fa-eye"></i></Link></li>
                    </ul>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="shop-details">Flying Fish Cat Scratching </Link></h3>
                    <ul className="rating_star">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                    <div className="item_price"><span>$25.89</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pagination_wrap">
              <ul className="pagination_nav unorder_list">
                <li className="active"><Link href="#!">1</Link></li>
                <li><Link href="#!">2</Link></li>
                <li><Link href="#!">3</Link></li>
              </ul>
            </div>
          </div>

          <div className="col col-lg-3">
            <aside className="sidebar_section">
              <div className="sb_widget">
                <h3 className="sb_widget_title" data-bs-toggle="collapse" data-bs-target="#collapse_categories" aria-expanded="false">Categories</h3>
                <div className="collapse show" id="collapse_categories">
                  <div className="card card-body">
                    <form action="#!">
                      <ul className="filter_category_list unorder_list_block">
                        <li>
                          <div className="checkbox_item">
                            <input type="checkbox" id="checkbox_parrot"/>
                            <label htmlFor="checkbox_parrot"><span>Parrot</span> <small>12</small></label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox_item">
                            <input type="checkbox" id="checkbox_dogs"/>
                            <label htmlFor="checkbox_dogs"><span>Dogs</span> <small>56</small></label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox_item">
                            <input type="checkbox" id="checkbox_cat"/>
                            <label htmlFor="checkbox_cat"><span>Cat</span> <small>66</small></label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox_item">
                            <input type="checkbox" id="checkbox_other"/>
                            <label htmlFor="checkbox_other"><span>Other</span> <small>34</small></label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox_item">
                            <input type="checkbox" id="checkbox_clothes"/>
                            <label htmlFor="checkbox_clothes"><span>Clothes</span> <small>22</small></label>
                          </div>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title" data-bs-toggle="collapse" data-bs-target="#collapse_range" aria-expanded="false">Price range</h3>
                <div className="collapse show" id="collapse_range">
                  <div className="card card-body">
                    <form action="#">
                      <div className="price-range-area clearfix">
                        <div className="price-text">

                          <ReactSlider
                            className="horizontal-slider mb30 mt20"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[0, 35, 100]}
                            ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            pearling
                            minDistance={1}
                          />


                        </div>
                        <button type="button" className="price_filter_btn mt50">Apply Filter</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title" data-bs-toggle="collapse" data-bs-target="#collapse_product_type" aria-expanded="false">Product type</h3>
                <div className="collapse show" id="collapse_product_type">
                  <div className="card card-body">
                    <ul className="page_list unorder_list_block">
                      <li><Link href="#!"><i className="fas fa-circle"></i> Beef</Link></li>
                      <li><Link href="#!"><i className="fas fa-circle"></i> Fish</Link></li>
                      <li><Link href="#!"><i className="fas fa-circle"></i> Food</Link></li>
                      <li><Link href="#!"><i className="fas fa-circle"></i> Rewards</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title" data-bs-toggle="collapse" data-bs-target="#collapse_related_products" aria-expanded="false">Related products</h3>
                <div className="collapse show" id="collapse_related_products">
                  <div className="card card-body">
                    <div className="small_product_item">
                      <Link className="item_image" href="shop-details"><img src="/images/shop/product_img_24.jpg" alt="Rhinestone Pet Collar"/></Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="shop-details">Rhinestone Pet Collar</Link></h3>
                        <div className="item_price"><span>$11.39</span></div>
                      </div>
                    </div>
                    <div className="small_product_item">
                      <Link className="item_image" href="shop-details"><img src="/images/shop/product_img_25.jpg" alt="Duck Jerky Strips"/></Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="shop-details">Duck Jerky Strips</Link></h3>
                        <div className="item_price"><span>$11.39</span></div>
                      </div>
                    </div>
                    <div className="small_product_item">
                      <Link className="item_image" href="shop-details"><img src="/images/shop/product_img_26.jpg" alt="Teeth Cleaning Toy"/></Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="shop-details">Teeth Cleaning Toy</Link></h3>
                        <div className="item_price"><span>$11.39</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title" data-bs-toggle="collapse" data-bs-target="#collapse_product_tag" aria-expanded="false">Product Tag</h3>
                <div className="collapse show" id="collapse_product_tag">
                  <div className="card card-body">
                    <ul className="tags_list unorder_list">
                      <li><Link href="#!">Toys</Link></li>
                      <li><Link href="#!">Nature</Link></li>
                      <li><Link href="#!">Healthy</Link></li>
                      <li><Link href="#!">Collars</Link></li>
                      <li><Link href="#!">Pillows</Link></li>
                      <li><Link href="#!">Carrier</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <section className="subscribe_section">
      <div className="container">
        <div className="subscribe_wrap decoration_wrap">
          <div className="content_wrap">
            <h2 className="title_text">Get 20% Off Your First Purchase When You Use Petco Credit Card </h2>
            <p className="description_text">Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.</p>
            <form action="#">
              <div className="form_item mb-0">
                <input type="email" name="email" placeholder="Type your Email"/>
                <button className="btn btn_warning" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="overlay" style={{ backgroundImage: 'url(images/overlay/shapes_overlay_5.svg)' }}></div>
          <div className="decoration_item shape_image_1">
            <img src="/images/shape/shape_path_5.svg" alt="Shape Image"/>
          </div>
          <div className="decoration_item shape_image_2">
            <img src="/images/shape/shape_circle_1.svg" alt="Shape Image"/>
          </div>
          <div className="decoration_item pet_image_1">
            <img src="/images/about/about_img_4.png" alt="Pet Image"/>
          </div>
          <div className="decoration_item pet_image_2">
            <img src="/images/about/about_img_5.png" alt="Pet Image"/>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};
export default Shop
