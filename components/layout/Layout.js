'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import WhatsAppWidget from '../elements/WhatsAppWidget'
import Breadcrumb from './Breadcrumb'
import Footer1 from './Footer1'
import Header1 from "./Header1"
import Header2 from "./Header2"
import Header3 from "./Header3"
import PageHead from './PageHead'

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">
                <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} />

                <main className="main">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                    {children}
                </main>

                 < Footer1 />

            </div>
                <WhatsAppWidget />
        </>
    )
}
