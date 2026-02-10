import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {

	  const phoneNumber = "31627195985" // Example Dutch number - replace with your actual number
    const defaultMessage = "Hallo! Ik heb een vraag over jullie diensten."
    
    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(defaultMessage)
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappURL, '_blank')
    }

  return (
  <>
  <header className={`main-header header-style3 ${isSearch ? "moblie-search-active" : ""}`}>
    <div className="header_top d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-4">
            <ul className="social_links">
              <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
              <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#!"><i className="fab fa-whatsapp"></i></Link></li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-8">
            <ul className="icon_list unorder_list justify-content-sm-end">
              <li>
                <button onClick={handleWhatsAppClick}>
                  <i className="fas fa-phone"></i>
                  <span>06 271 959 85</span>
                </button>
              </li>
              <li>
                <a href="mailto:bleiswijksesnuitjes@gmail.com?subject=Kennismaking%20aanvragen%20-%20Bleiswijk%20Snuitjes">
                  <i className="fas fa-envelope"></i>
                  <span>bleiswijksesnuitjes@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
              <li className="dropdown me-0 d-none d-sm-block">
			        <Link href="/op-vakantie" className="btn btn_primary btn_small"><span>Op vakantie?</span></Link>
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
      <div className="container">
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
          </div>
          <div className="outer-box d-flex align-items-center">
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon fas fa-bars" /></div>
            <ul className="header_btns_group unorder_list_right">
              <li className="dropdown me-0 d-none d-sm-block">
                 <Link href="/op-vakantie" className="btn btn_primary btn_small"><span>Op vakantie?</span></Link>
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
