import Link from "next/link";

const ShopCart = () => {
  return (
    <>
    <section class="cart_section section_space_lg">
      <div class="container">
        <div class="section_title">
          <h2 class="title_text mb-0">Your Cart</h2>
        </div>

        <div class="cart_table_wrap">
          <div class="table_header d-none d-lg-block">
            <ul class="table_wrap unorder_list">
              <li><span class="col_title">Product</span></li>
              <li><span class="col_title">Price</span></li>
              <li><span class="col_title">Quantity</span></li>
              <li><span class="col_title">Total</span></li>
            </ul>
          </div>
          <div class="table_body">
            <ul class="table_wrap unorder_list">
              <li>
                <div class="small_product_item">
                  <div class="item_image">
                    <img src="/images/shop/product_img_5.jpg" alt="Pet Accessories"/>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">Tug of War Dog Toy </h3>
                    <p class="mb-0">Color: red</p>
                  </div>
                </div>
                <button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
              </li>
              <li>
                <span class="col_title d-lg-none">Price</span>
                <div class="item_price">
                  <del>$22.12</del>
                  <span>$12.12</span>
                </div>
              </li>
              <li>
                <span class="col_title d-lg-none">Quantity</span>
                <div class="quantity_wrap">
                  <span class="quantity_title">Qty:</span>
                  <form action="#">
                    <div class="quantity_form">
                      <button type="button" class="input_number_decrement">
                        <i class="far fa-angle-down"></i>
                      </button>
                      <input class="input_number" type="text" value="1"/>
                      <button type="button" class="input_number_increment">
                        <i class="far fa-angle-up"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </li>
              <li>
                <span class="col_title d-lg-none">Total</span>
                <div class="item_price">
                  <span>$12.12</span>
                </div>
              </li>
            </ul>
            <ul class="table_wrap unorder_list">
              <li>
                <div class="small_product_item">
                  <div class="item_image">
                    <img src="/images/shop/product_img_28.jpg" alt="Pet Accessories"/>
                  </div>
                  <div class="item_content">
                    <h3 class="item_title">Dog Residence Mat </h3>
                    <p class="mb-0">Color: red</p>
                  </div>
                </div>
                <button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
              </li>
              <li>
                <span class="col_title d-lg-none">Price</span>
                <div class="item_price">
                  <span>$32.39</span>
                </div>
              </li>
              <li>
                <span class="col_title d-lg-none">Quantity</span>
                <div class="quantity_wrap">
                  <span class="quantity_title">Qty:</span>
                  <form action="#">
                    <div class="quantity_form">
                      <button type="button" class="input_number_decrement">
                        <i class="far fa-angle-down"></i>
                      </button>
                      <input class="input_number" type="text" value="1"/>
                      <button type="button" class="input_number_increment">
                        <i class="far fa-angle-up"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </li>
              <li>
                <span class="col_title d-lg-none">Total</span>
                <div class="item_price">
                  <span>$32.39</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="table_footer">
            <div class="row align-items-center">
              <div class="col col-lg-6">
                <div class="coupon_form">
                  <form action="#">
                    <div class="form_item mb-0">
                      <input type="text" name="coupon" placeholder="Coupon Code"/>
                      <button type="submit" class="btn border_primary">Apply Coupon</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col col-lg-6">
                <ul class="btns_group unorder_list_right">
                  <li>
                    <Link class="btn_unfill" href="shop.html">
                      <span>Continue Shopping</span>
                      <i class="far fa-long-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="btn border_primary" href="shop-cart">Update Cart</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="note_form">
            <div class="row">
              <div class="col col-lg-6">
                <div class="form_item mb-0">
                  <label class="input_title" for="input_note">Add a note to your order</label>
                  <textarea id="input_note" name="note" placeholder="Type text"></textarea>
                </div>
              </div>
              <div class="col col-lg-6">
                <ul class="subtotal_info unorder_list_block">
                  <li>Subtotal before delivery</li>
                  <li>$32.39</li>
                  <li>
                    <Link class="btn btn_primary" href="#!"><i class="fas fa-paw"></i> Checkout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="policy_section">
      <div class="container">
        <div class="row">

          <div class="col col-lg-3 col-md-6">
            <div class="iconbox_item iconbox_default" style={{ backgroundImage: 'url(images/shape/shape_path_1.svg)' }}>
              <div class="item_icon"><i class="fas fa-shipping-fast"></i></div>
              <h3 class="policy_title">Trust & Safety</h3>
              <p class="mb-0">Velit euismod in pellentesque massa placerat duis. Pellentesque habitant morbi tristique senectus </p>
            </div>
          </div>

          <div class="col col-lg-3 col-md-6">
            <div class="iconbox_item iconbox_default" style={{ backgroundImage: 'url(images/shape/shape_path_1.svg)' }}>
              <div class="item_icon"><i class="fas fa-badge-percent"></i></div>
              <h3 class="policy_title">Discounts</h3>
              <p class="mb-0">Leo a diam sollicitudin tempor nisl nunc mi. Magna ac placerat vestibulm lectus mauris </p>
            </div>
          </div>

          <div class="col col-lg-3 col-md-6">
            <div class="iconbox_item iconbox_default" style={{ backgroundImage: 'url(images/shape/shape_path_1.svg)' }}>
              <div class="item_icon"><i class="fas fa-user-headset"></i></div>
              <h3 class="policy_title">Support</h3>
              <p class="mb-0">Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit </p>
            </div>
          </div>

          <div class="col col-lg-3 col-md-6">
            <div class="iconbox_item iconbox_default" style={{ backgroundImage: 'url(images/shape/shape_path_1.svg)' }}>
              <div class="item_icon"><i class="fas fa-shield-check"></i></div>
              <h3 class="policy_title">Guarantee</h3>
              <p class="mb-0">Dignissim diam quis enim lobortis scelerisque fermentum dui. Turpis in eu mi bibendum neque </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    </>
  );
};
export default ShopCart
