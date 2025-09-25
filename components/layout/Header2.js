import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
  return (
  <>
  <header className={`main-header header-style2 ${isSearch ? "moblie-search-active" : ""}`}>
    <div className="header-lower">
      <div className="container">
        {/* Main box */}
        <div className="main-wrapper row align-items-center">
          <div className="logo-box col col-lg-2">
            <div className="logo"><Link href="/"><img src="/images/logo/logo-2.svg" alt="" /></Link></div>
          </div>

          <div className="nav-wrapper col col-lg-8">
            <nav className="nav main-list">
              <Menu />
            </nav>
          </div>
		  
          <div className="outer-box d-flex col col-lg-2">
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon fas fa-bars"></span></div>
            <Link href='https://wa.me/31627195985' target="_blank" className="dd-nav_btn" type="button">Contact opnemen</Link>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile Menu  */}
    <div className="mobile-menu">
      <div className="menu-backdrop" onClick={handleMobileMenu} />

      <nav className="menu-box">
        <div className="upper-box">
          <div className="nav-logo d-block d-lg-none"><Link href="/"><img src="/images/logo/logo-2.svg" alt=""  /></Link></div>
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
        <div className="main-wrapper row align-items-center">
          {/*Logo*/}
          <div className="logo col col-lg-2">
            <Link href="/" ><img src="/images/logo/logo-2.svg" alt=""  /></Link>
          </div>
          {/*Right Col*/}
          <div className="nav-wrapper col col-lg-8">
            {/* Main Menu */}
            <nav className="main-list">
              <div className="navbar-collapse show collapse clearfix">
                <Menu />
              </div>
            </nav>{/* Main Menu End*/}
          </div>
          <div className="outer-box d-flex col col-lg-2">
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon fas fa-bars" /></div>
            <Link href='https://wa.me/31627195985' target="_blank" className="dd-nav_btn" type="button">Contact opnemen</Link>
          </div>
        </div>
      </div>
    </div>{/* End Sticky Menu */}
  </header>

</>
)
}
