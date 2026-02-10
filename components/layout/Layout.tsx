"use client";

import { useEffect, useState, FC } from "react";
import { WhatsAppWidget } from "../shared/whatsapp-widget";
import { Footer } from "./footer";
import { Header1 } from "./header-1";
import { Header2 } from "./header-2";
import { PageHead } from "./page-head";

type LayoutProps = {
  headerStyle?: number;
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ headerStyle, children }) => {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <PageHead />
      <div className="page-wrapper" id="top">
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isSearch={isSearch}
            handleSearch={handleSearch}
          />
        )}
        {headerStyle == 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isSearch={isSearch}
            handleSearch={handleSearch}
          />
        ) : null}
        {headerStyle == 2 ? (
          <Header2
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isSearch={isSearch}
            handleSearch={handleSearch}
          />
        ) : null}

        <main className="main">{children}</main>

        <Footer />
      </div>
      <WhatsAppWidget />
    </>
  );
};
