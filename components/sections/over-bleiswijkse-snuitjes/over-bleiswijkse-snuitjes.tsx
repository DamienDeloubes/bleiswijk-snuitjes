import Link from "next/link";

export const OverBleiswijkseSnuitjes = () => {
  return (
    <section className="about_section section_space_lg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col order-last col-lg-6">
            <div className="about_image_2">
              <img
                src="/images/gallery/oppashond-pommeraan-wordt-uitgelaten.jpg"
                alt="Pet Care Image"
              />
              <div
                className="experience_years"
                style={{
                  backgroundImage: "url(images/shape/shape_circle_1.svg)",
                }}
              >
                <strong>9+</strong>
                <span>Jaar ervaring</span>
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="about_content_2">
              <div className="section_title">
                <h2 className="title_text">
                  <span className="sub_title">Wat ik doe</span>Mijn diensten in
                  een oogopslag
                </h2>
                <p className="mb-0">
                  Alles afgestemd op jouw hond en jouw wensen
                </p>
              </div>
              <ul className="icon_list unorder_list_block">
                <li>
                  {" "}
                  <i className="fas fa-bone"></i> <span>Wandelingen</span>
                </li>
                <li>
                  {" "}
                  <i className="fas fa-bone"></i> <span>Uitlaten</span>
                </li>
                <li>
                  {" "}
                  <i className="fas fa-bone"></i> <span>Oppassen</span>
                </li>
                <li>
                  {" "}
                  <i className="fas fa-bone"></i> <span>Thuisbezoek</span>
                </li>
              </ul>
              <Link className="btn btn_primary" href="/diensten">
                <i className="fas fa-paw"></i>Bekijk de prijzen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
