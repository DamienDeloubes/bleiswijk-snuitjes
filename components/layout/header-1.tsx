import Link from "next/link";
import { FC } from "react";
import { Menu } from "./menu";
import { MobileMenu } from "./mobile-menu";
import { openWhatsapp } from "@/utils/whatsapp";

type HeaderProps = {
  scroll: boolean;
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
};

export const Header1: FC<HeaderProps> = ({
  scroll,
  handleMobileMenu,
  isSearch,
}) => {
  return (
    <>
      <header
        className={`main-header header-style1 ${isSearch ? "moblie-search-active" : ""}`}
      >
        <div className="header-lower">
          <div className="container">
            {/* Main box */}
            <div className="main-wrapper">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/logo.svg" alt="" />
                  </Link>
                </div>
              </div>

              <div className="nav-wrapper">
                <nav className="nav main-list">
                  <Menu />
                </nav>
              </div>
              <div className="outer-box d-flex align-items-center">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon fas fa-bars"></span>
                </div>
                <ul className="header_btns_group unorder_list_right">
                  <li className="me-0 d-none d-sm-block">
                    <Link
                      href="/op-vakantie"
                      className="btn btn_primary btn_small"
                    >
                      <span>Op vakantie?</span>
                    </Link>
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
              <div className="nav-logo d-block d-lg-none">
                <Link href="/">
                  <img src="/images/logo/logo.svg" alt="" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleMobileMenu}>
                <i className="icon fa fa-times" />
              </div>
            </div>
            <MobileMenu />
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/people/Bleiswijksesnuitjes/61573825588323/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bleiswijksesnuitjes/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <button onClick={openWhatsapp}>
                  <i className="fab fa-whatsapp"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* End Header Search */}
        {/* Sticky Header  */}
        <div
          className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}
        >
          <div className="container-fluid">
            <div className="main-wrapper">
              {/*Logo*/}
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo/logo.svg" alt="" />
                </Link>
              </div>
              {/*Right Col*/}
              <div className="nav-wrapper">
                {/* Main Menu */}
                <nav className="main-list">
                  <div className="navbar-collapse show collapse clearfix">
                    <Menu />
                  </div>
                </nav>
                {/* Main Menu End*/}
                {/*Mobile Navigation Toggler*/}
              </div>
              <div className="outer-box d-flex align-items-center">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon fas fa-bars" />
                </div>
                <ul className="header_btns_group unorder_list_right">
                  <li className="dropdown me-0 d-none d-sm-block">
                    <Link href="/op-vakantie" className="btn btn_primary">
                      <i className="fas fa-shopping-cart"></i>{" "}
                      <small className="cart_counter">2</small>{" "}
                      <span>item</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>
    </>
  );
};
