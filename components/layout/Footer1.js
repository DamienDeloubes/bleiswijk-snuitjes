import Link from "next/link"

export default function Footer1() {
  return (
  <>

    <footer className="footer_section">
      <div className="footer_widget_area section_space_lg">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-xl-3 col-sm-6">
              <div className="footer_widget footer_about mb50-lg">
                <div className="site_logo"><Link href="/"><img className="logo_before" src="/images/logo/logo.svg"  alt="Petopia Logo"/></Link></div>
                <p>Dé hondenuitlaatservice en oppasadres in Bleiswijk! Voor blije honden en gerustgestelde baasjes.</p>
                <div className="footer_hotline iconbox_item iconbox_lefticon">
                  <div className="item_icon"><i className="fa-brands fa-whatsapp"></i></div>
                  <div className="item_content">
                    <h3 className="item_title"><Link href="https://wa.me/31627195985">Whatsapp ons</Link></h3>
                    <p className="mb-0">Direct antwoord via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="footer_widget mb50-lg">
                <h3 className="footer_widget_title">Bereikbaarheid</h3>
                <div className="office_hour">
					<span><strong>24/7</strong></span><br/>
					<span>Neem gerust contact op voor wandelingen, oppas of speciale verzoeken – ik pas me aan jullie schema aan.</span>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-sm-12">
              <div className="footer_widget mb50-sm">
                <h3 className="footer_widget_title">Handige links</h3>
                <div className="page_list">
                  <ul className="unorder_list_block">
                    <li><Link href="/"><i className="fas fa-circle"></i>Oppassen</Link></li>
                    <li><Link href="page-about"><i className="fas fa-circle"></i>Uitlaten</Link></li>
                    <li><Link href="page-services"><i className="fas fa-circle"></i>Strippenkaarten</Link></li>
                    <li><Link href="page-shop"><i className="fas fa-circle"></i>Abonnementen</Link></li>
                  </ul>
                  <ul className="unorder_list_block">
                    <li><Link href="page-faq"><i className="fas fa-circle"></i>Over mij</Link></li>
                    <li><Link href="page-gallery"><i className="fas fa-circle"></i>Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-sm-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Newsletter</h3>
                <form action="#">
                  <div className="footer_newslatter">
                    <p>Be first in the queue! Get our latest news straight to your inbox.</p>
                    <div className="form_item">
                      <input type="text" name="newsletter-email" placeholder="Email"/>
                      <button type="submit"><i className="far fa-arrow-right"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <p className="copyrights_text text-center"><Link target="_blank" href="/">Bleiswijkse Snuitjes</Link> © Copyrights Alle rechten voorbehouden</p>
        </div>
      </div>
    </footer>

  </>
  )
}
