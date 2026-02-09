import Link from "next/link"

const Gallery = () => {
  return (
  <>

  <section className="gallery_section section_space_lg decoration_wrap pb-0">
    <div className="container">
      <div className="section_title text-center">
        <h2 className="title_text"><span className="sub_title">Op de gram</span>Blije snuiten in actie</h2>
        <p className="mb-0">Een kijkje in onze wandelingen en opvang.</p>
      </div>

      <div className="row">
        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><img src="/images/gallery/oppashond-pommeraan-wordt-uitgelaten.jpg" alt="Oppashonden worden uitgelaten"/></div>
            <Link className="item_content" href="/diensten">
              <span className="d-block"><small>Bekijk diensten</small></span>
              <strong className="d-block">Opvang, uitlaten en verzorging</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><img src="/images/gallery/oppashond-luistert-naar-zit-commando.jpg" alt="Oppashond luistert naar zit commando"/></div>
            <Link className="item_content" href="/diensten">
             <span className="d-block"><small>Bekijk diensten</small></span>
              <strong className="d-block">Opvang, uitlaten en verzorging</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><img src="/images/gallery/oppashond-zit-gezellig-op-de-bank.jpg" alt="Oppashond zit gezellig op de bank"/></div>
            <Link className="item_content" href="/diensten">
             <span className="d-block"><small>Bekijk diensten</small></span>
              <strong className="d-block">Opvang, uitlaten en verzorging</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><img src="/images/gallery/oppashond-kijkt-naar-vertrekkende-watertaxi-tijdens-uitlaten.jpg" alt="Oppashond kijkt naar vertrekkende watertaxi tijdens uitlaten"/></div>
            <Link className="item_content" href="/diensten">
             <span className="d-block"><small>Bekijk diensten</small></span>
              <strong className="d-block">Opvang, uitlaten en verzorging</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><img src="/images/gallery/oppashond-wordt-uitgelaten-terwijl-hij-stok-in-zijn-mond-heeft.jpg" alt="Oppashond wordt uitgelaten terwijl hij stok in zijn mond heeft"/></div>
            <Link className="item_content" href="/diensten">
             <span className="d-block"><small>Bekijk diensten</small></span>
              <strong className="d-block">Opvang, uitlaten en verzorging</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><img src="/images/gallery/anouk-deelt-flyers-uit.jpg" alt="Pet Image"/></div>
            <Link className="item_content" href="/diensten">
             <span className="d-block"><small>Bekijk diensten</small></span>
              <strong className="d-block">Opvang, uitlaten en verzorging</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="decoration_item shape_dot_1">
      <img src="/images/shape/shape_dot_group_2.svg" alt="Colorful Dots"/>
    </div>
  </section>

  </>
  );
};
export default Gallery
