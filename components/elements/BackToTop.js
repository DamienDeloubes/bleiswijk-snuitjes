import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState("false")

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    })

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true)
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false)
        }
    }

    return (
        <>
            {hasScrolled && (
                <a className={`backtotop ${hasScrolled && "d-flex"}`} href="#top"><span className="far fa-arrow-up" /></a>
            )}
        </>
    )
}