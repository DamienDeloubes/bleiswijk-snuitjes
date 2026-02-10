import { useState } from "react";

type WieZitErAchterProps = {
  includeBottomPadding?: boolean;
};

export const WieZitErAchter = (
  { includeBottomPadding }: WieZitErAchterProps = {
    includeBottomPadding: false,
  },
) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section
        className={`about_section section_space_lg ${includeBottomPadding ? "" : "pb-0"} decoration_wrap`}
      >
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col col-lg-5">
              <div className="section_title">
                <h2 className="title_text">
                  Wie zit er achter Bleiswijkse Snuitjes?
                </h2>
                <p>
                  Hey! Ik ben Anouk en ik bied persoonlijke hondenwandelingen en
                  opvang in Bleiswijk. Geen groepen, wél volledige aandacht,
                  afgestemd op het karakter en ritme van jouw hond.
                </p>
              </div>
              <div className="accordion faq-box-style1" id="faq_accordion">
                <ul className="accordion-box">
                  {/* Block */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 1 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(1)}
                    >
                      Waarom 1-op-1?
                      <div className="icon far fa-angle-down"></div>
                    </div>
                    <div
                      className={
                        isActive.key == 1
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                          Ik werk nooit met groepen. Zo krijgt jouw hond alle
                          aandacht, minder prikkels en een wandeling op maat,
                          ideaal voor puppy's, senioren of gevoelige honden.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 2 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(2)}
                    >
                      Mijn ervaring met honden
                      <div className="icon far fa-angle-down"></div>
                    </div>
                    <div
                      className={
                        isActive.key == 2
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                          Honden zijn altijd onderdeel geweest van mijn leven.
                          Ik neem de tijd om elke hond te leren kennen en werk
                          rustig, positief en met respect.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 3 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(3)}
                    >
                      Hoe ziet een wandeling eruit?
                      <div className="icon far fa-angle-down"></div>
                    </div>
                    <div
                      className={
                        isActive.key == 3
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                          Elke wandeling wordt afgestemd op jouw hond: tempo,
                          route, snuffelmomenten en training. Je ontvangt altijd
                          een update met foto's of video.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block mb-0">
                    <div
                      className={
                        isActive.key == 4 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(4)}
                    >
                      Persoonlijke kennismaking vooraf
                      <div className="icon far fa-angle-down"></div>
                    </div>
                    <div
                      className={
                        isActive.key == 4
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                          Voor elke start plannen we een kennismaking bij jou
                          thuis of bij mij. We bespreken routines,
                          aandachtspunten, voeding en wat jouw hond nodig heeft
                          voor een fijne wandeling of opvang.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="about_image_1">
                <div className="image_1 p-0">
                  <img
                    src="/images/custom/anouk-met-hond.jpg"
                    alt="Pet Doctor"
                  />
                </div>
                <div className="image_2">
                  <img
                    src="/images/custom/soof-erasmusbrug.jpg"
                    alt="Cat Image"
                  />
                </div>
                <div className="image_3">
                  <img
                    src="/images/custom/anouk-met-louittje.jpg"
                    alt="Dog Image"
                  />
                </div>
                <div className="shape_img_1">
                  <img
                    src="/images/shape/shape_circle_1.svg"
                    alt="Yellow Circle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="decoration_item shape_dot_1">
          <img src="/images/shape/shape_dot_group_1.svg" alt="Colorful Dots" />
        </div>
      </section>
    </>
  );
};
