import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
  return (
  <>
  <header className={`main-header header-style1 ${isSearch ? "moblie-search-active" : ""}`}>
    <div className="header-lower">
      <div className="container">
        {/* Main box */}
        <div className="main-wrapper">
          <div className="logo-box">
            <div className="logo"><Link href="/"><img src="/images/logo/logo.svg" alt="" /></Link></div>
          </div>

          <div className="nav-wrapper">
            <nav className="nav main-list">
              <Menu />
            </nav>
          </div>
          <div className="outer-box d-flex align-items-center">
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon fas fa-bars"></span></div>
            <ul className="header_btns_group unorder_list_right">
              <li className="me-0 d-none d-sm-block">
                <a href="#" className="cart_btn" type="button"><i className="fa-brands fa-whatsapp fa-lg"></i><span>item</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile Menu  */}
    <div className="mobile-menu">
      <div className="menu-backdrop" onClick={handleMobileMenu} />

      <nav className="menu-box">
        <div className="upper-box">
          <div className="nav-logo d-block d-lg-none"><Link href="/"><img src="/images/logo/logo.svg" alt=""  /></Link></div>
          <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
        </div>
        <MobileMenu />
        <ul className="social-links">
          <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
          <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
          <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
          <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
        </ul>
      </nav>
    </div>{/* End Mobile Menu */}
    {/* Header Search */}
{/*    <div className="search-popup">
      <span className="search-back-drop" onClick={handleSearch} />
      <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
      <div className="search-inner">
        <form method="post" action="">
          <div className="form-group">
            <input type="search" name="search-field" placeholder="Search..." required />
            <button type="submit"><i className="fa fa-search" /></button>
          </div>
        </form>
      </div>
    </div>*/}
    {/* End Header Search */}
    {/* Sticky Header  */}
    <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
      <div className="container-fluid">
        <div className="main-wrapper">
          {/*Logo*/}
          <div className="logo">
            <Link href="/" ><img src="/images/logo/logo.svg" alt=""  /></Link>
          </div>
          {/*Right Col*/}
          <div className="nav-wrapper">
            {/* Main Menu */}
            <nav className="main-list">
              <div className="navbar-collapse show collapse clearfix">
                <Menu />
              </div>
            </nav>{/* Main Menu End*/}
            {/*Mobile Navigation Toggler*/}
          </div>
          <div className="outer-box d-flex align-items-center">
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon fas fa-bars" /></div>
            <ul className="header_btns_group unorder_list_right">
              <li className="dropdown me-0 d-none d-sm-block">
                <button className="cart_btn" type="button"><i className="fas fa-shopping-cart"></i> <small className="cart_counter">2</small> <span>item</span></button>
                <div className="cart_dropdown dropdown-menu">
                  <ul className="cart_items_list unorder_list_block">
                    <li>
                      <Link className="item_image" href="shop-details">
                      <img src="/images/cart/cart_img_1.jpg" alt="Pet Care Service"/></Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="shop-details">Flying Fish Cat Scratching</Link></h3>
                        <span className="item_price">1 × $12.35</span>
                      </div>
                      <button className="remove_btn" type="button"><i className="fal fa-times"></i></button>
                    </li>
                    <li>
                      <Link className="item_image" href="shop-details"><img src="/images/cart/cart_img_2.jpg" alt="Pet Care Service"/></Link>
                      <div className="item_content">
                        <h3 className="item_title"><Link href="shop-details">Pet Bed</Link></h3>
                        <span className="item_price">1 × $58.16</span>
                      </div>
                      <button className="remove_btn" type="button"><i className="fal fa-times"></i></button>
                    </li>
                  </ul>
                  <hr/>
                  <div className="total_price"><span>Total</span> <strong>$70.51</strong></div>
                  <Link className="btn border_primary" href="page-cart">Update Cart</Link>
                  <Link className="btn btn_primary" href="page-cart">Checkout</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>{/* End Sticky Menu */}
  </header>

</>
)
}
