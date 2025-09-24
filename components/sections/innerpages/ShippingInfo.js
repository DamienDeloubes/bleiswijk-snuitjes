import Link from "next/link";

const ShippingInfo = () => {
  return (
    <>

        <section className="shipping_info_section section_space_lg pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="shipping_info_wrap col col-lg-8">
                <h3>Shipping Charges & Times</h3>
                <p>
                  Consectetur adipiscing elit ut aliquam. Urna porttitor rhoncus dolor purus non. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. In massa tempor nec feugiat. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Porttitor eget dolor morbi non arcu risus quis. Pulvinar elementum integer enim neque volutpat ac. Purus ut faucibus pulvinar elementum integer. Leo a diam sollicitudin tempor id eu nisl nunc mi. Vitae congue eu consequat ac felis donec 
                </p>
                <ul className="icon_list unorder_list_block">
                  <li>
                    <i className="fas fa-circle"></i>
                    <span>Massa massa ultricies mi quis hendrerit</span>
                  </li>
                  <li>
                    <i className="fas fa-circle"></i>
                    <span>Facilisi cras fermentum odio eu feugiat</span>
                  </li>
                  <li>
                    <i className="fas fa-circle"></i>
                    <span>Placerat vestibulum lectus mauris ultrices eros</span>
                  </li>
                  <li>
                    <i className="fas fa-circle"></i>
                    <span>Nullam non nisi est sit amet facilisis</span>
                  </li>
                </ul>
                <h3>Everyday Free Shipping on $35</h3>
                <p>
                  Amet justo donec enim diam vulputate ut. Sagittis eu volutpat odio facilisis. Ut venenatis tellus in metus vulputate. Nunc congue nisi vitae suscipit. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.
                </p>
                <ul className="icon_list unorder_list_block">
                  <li>
                    <i className="fas fa-circle"></i>
                    <span>
                      Nec ullamcorper sit amet risus nullam eget felis eget nunc. Non diam phasellus vestibulum lorem sed. Id interdum velit laoreet id. Malesuada fames ac turpis egestas maecenas.
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-circle"></i>
                    <span>
                      Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Sit amet dictum sit amet justo. Tristique nulla aliquet enim tortor at auctor urna nunc.
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-circle"></i>
                    <span>
                      Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.
                    </span>
                  </li>
                </ul>
                <h3>Shipping Rates</h3>
                <p>
                  Sit amet volutpat consequat mauris nunc congue nisi vitae. Sed viverra tellus in hac. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Mattis enim ut tellus elementum sagittis vitae et leo. Sem integer vitae justo eget. Vitae auctor eu augue ut. Scelerisque viverra mauris in aliquam. 
                </p>
                <div className="shipping_info_table">
                  <ul>
                    <li>Order Subtotal</li>
                    <li>Up to $59.99</li>
                    <li>$60.00 to $138.99</li>
                    <li>$139.00 or more</li>
                  </ul>
                  <ul>
                    <li>Shipping Cost</li>
                    <li>$30.00</li>
                    <li>$35.00</li>
                    <li>FREE</li>
                  </ul>
                </div>
                <h3>Terms & Conditions</h3>
                <p className="mb-0">
                  Amet justo donec enim diam vulputate ut. Sagittis eu volutpat odio facilisis. Ut venenatis tellus in metus vulputate. Nunc congue nisi vitae suscipit. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="policy_section section_space_lg">
          <div className="container">
            <div className="section_title text-center">
              <h2 className="title_text mb-0">Why Choose Us</h2>
            </div>
            <div className="row">
              <div className="col col-lg-3 col-md-6">
                <div className="iconbox_item iconbox_default" style={{ backgroundImage: 'url(/images/shape/shape_path_1.svg)' }}>
                  <div className="item_icon">
                    <i className="fas fa-shipping-fast"></i>
                  </div>
                  <h3 className="policy_title">Trust & Safety</h3>
                  <p className="mb-0">
                    Velit euismod in pellentesque massa placerat duis. Pellentesque habitant morbi tristique senectus 
                  </p>
                </div>
              </div>

              <div className="col col-lg-3 col-md-6">
                <div className="iconbox_item iconbox_default" style={{ backgroundImage: 'url(/images/shape/shape_path_1.svg)' }}>
                  <div className="item_icon">
                    <i className="fas fa-badge-percent"></i>
                  </div>
                  <h3 className="policy_title">Discounts</h3>
                  <p className="mb-0">
                    Leo a diam sollicitudin tempor nisl nunc mi. Magna ac placerat vestibulm lectus mauris 
                  </p>
                </div>
              </div>

              <div className="col col-lg-3 col-md-6">
                <div className="iconbox_item iconbox_default" style={{ backgroundImage: 'url(/images/shape/shape_path_1.svg)' }}>
                  <div className="item_icon">
                    <i className="fas fa-user-headset"></i>
                  </div>
                  <h3 className="policy_title">Support</h3>
                  <p className="mb-0">
                    Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit 
                  </p>
                </div>
              </div>

              <div className="col col-lg-3 col-md-6">
                <div className="iconbox_item iconbox_default" style={{ backgroundImage: 'url(/images/shape/shape_path_1.svg)' }}>
                  <div className="item_icon">
                    <i className="fas fa-shield-check"></i>
                  </div>
                  <h3 className="policy_title">Guarantee</h3>
                  <p className="mb-0">
                    Dignissim diam quis enim lobortis scelerisque fermentum dui. Turpis in eu mi bibendum neque 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="payment_method_section">
          <div className="container">
            <div className="section_title text-center">
              <h2 className="title_text mb-0">Payment Methods</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col col-lg-3 col-md-4 col-sm-6">
                <div className="payment_method_card">
                  <img src="/images/payment_card/visa.png" alt="VISA Payment Card"/>
                </div>
              </div>
              <div className="col col-lg-3 col-md-4 col-sm-6">
                <div className="payment_method_card">
                  <img src="/images/payment_card/mastercard.png" alt="MasterCard Payment Card"/>
                </div>
              </div>
              <div className="col col-lg-3 col-md-4 col-sm-6">
                <div className="payment_method_card">
                  <img src="/images/payment_card/paypal.png" alt="PayPal Payment Card"/>
                </div>
              </div>
              <div className="col col-lg-3 col-md-4 col-sm-6">
                <div className="payment_method_card">
                  <img src="/images/payment_card/bitcoin.png" alt="BitCoin Payment Card"/>
                </div>
              </div>
            </div>
          </div>
        </section>

    </>
  );
};
export default ShippingInfo
