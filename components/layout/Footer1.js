import Link from "next/link"

export default function Footer1() {

	    // Replace with your actual WhatsApp business number (including country code)
    const phoneNumber = "31627195985" // Example Dutch number - replace with your actual number
    const defaultMessage = "Hallo! Ik heb een vraag over jullie diensten."
    
    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(defaultMessage)
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappURL, '_blank')
    }


  return (
  <>

    <footer className="footer_section">
      <div className="footer_widget_area section_space_lg">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-xl-4 col-sm-6">
              <div className="footer_widget footer_about mb50-lg">
                <div className="site_logo"><Link href="/"><img className="logo_before" src="/images/logo/logo.svg"  alt="Petopia Logo"/></Link></div>
                <p>Rust, plezier en zorg voor elke snuit.</p>
                <div className="footer_hotline iconbox_item iconbox_lefticon">
                  <div className="item_icon"><i className="fa-brands fa-whatsapp"></i></div>
                  <div className="item_content">
                    <h3 className="item_title"><button onClick={handleWhatsAppClick}>06 271 959 85</button></h3>
                    <p className="mb-0">Vragen? Ik reageer dezelfde dag.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="footer_widget mb50-lg">
                <h3 className="footer_widget_title">Werkuren</h3>
                <div className="office_hour">
                      Wij staan <strong><span>24/7</span></strong> paraat om op te passen
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="footer_widget mb50-sm">
                <h3 className="footer_widget_title">Handige Links</h3>
                <div className="page_list">
                  <ul className="unorder_list_block">
                    <li><Link href="/"><i className="fas fa-circle"></i>Startpagina</Link></li>
                    <li><Link href="/diensten-en-prijzen"><i className="fas fa-circle"></i>Diensten & Prijzen</Link></li>
                    <li><Link href="/over-bleiswijkse-snuitjes"><i className="fas fa-circle"></i>Over Bleiswijkse Snuitjes</Link></li>
                    <li><Link href="/contact"><i className="fas fa-circle"></i>Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-sm-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">‎</h3>
               
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <p className="copyrights_text text-center"><Link target="_blank" href="/">Bleiswijkse Snuitjes</Link></p>
        </div>
      </div>
    </footer>

  </>
  )
}
