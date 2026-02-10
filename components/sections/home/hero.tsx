import Link from "next/link";

export const Hero = () => {
  return (
    <section
      className="banner_section banner_style_1 decoration_wrap"
      style={{ backgroundImage: "url(images/background/shape_bg_1.png)" }}
    >
      <div
        className="section_overlay"
        style={{
          backgroundImage: "url(images/overlay/shapes_overlay_1.svg)",
        }}
      ></div>
      <div className="container">
        <div className="banner_content">
          <h1 className="banner_title">
            Dé hondenoppas- en uitlaatservice van Bleiswijk
          </h1>
          <p className="banner_description">
            Bij Bleiswijkse Snuitjes krijgt jouw hond individuele wandelingen en
            opvang, zonder groepsuitjes. Rustig, veilig en volledig afgestemd op
            jouw hond.
          </p>
          <Link className="btn btn_primary" href="diensten">
            <i className="fas fa-paw"></i>
            Bekijk mijn diensten
          </Link>
          <div className="banner_services_wrap row">
            <div className="col">
              <div className="iconbox_item iconbox_overicon">
                <div className="item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="30"
                    height="30"
                  >
                    <path
                      d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"
                      fill="#7C58D3"
                    />
                  </svg>
                </div>
                <div className="item_content">
                  <h3 className="item_title mb-0">Oppassen</h3>
                </div>
                <Link className="item_global_link" href="diensten"></Link>
              </div>
            </div>

            <div className="col">
              <div className="iconbox_item iconbox_overicon">
                <div className="item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="30"
                    height="30"
                  >
                    <path
                      fill="#7C58D3"
                      d="M32 112c16.6 0 30.2 12.6 31.8 28.7l.3 6.6C65.8 163.4 79.4 176 96 176l179.1 0 140.9 60.4 0 243.6c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-131.3C296 361 268.8 368 240 368s-56-7-80-19.3L160 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-245.6c-37.3-13.2-64-48.6-64-90.4 0-17.7 14.3-32 32-32zM355.8-32c7.7 0 14.9 3.6 19.6 9.8L392 0 444.1 0c12.7 0 24.9 5.1 33.9 14.1L496 32 552 32c13.3 0 24 10.7 24 24l0 24c0 44.2-35.8 80-80 80l-64 0-7 28-124.7-53.4 31.6-147.2C334.3-23.9 344.2-32 355.8-32zM448 44a20 20 0 1 0 0 40 20 20 0 1 0 0-40z"
                    />
                  </svg>
                </div>
                <div className="item_content">
                  <h3 className="item_title mb-0">Uitlaten</h3>
                </div>
                <Link className="item_global_link" href="diensten"></Link>
              </div>
            </div>

            <div className="col">
              <div className="iconbox_item iconbox_overicon">
                <div className="item_icon">
                  <svg
                    width="35"
                    height="32"
                    viewBox="0 0 35 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5371 15.7595L10.1504 9.07983C9.25195 8.14233 8.82227 6.97046 8.86133 5.56421C8.93945 4.15796 9.48633 3.02515 10.502 2.16577C11.4004 1.38452 12.4355 1.05249 13.6074 1.16968C14.8184 1.2478 15.834 1.71655 16.6543 2.57593L17.2988 3.27905L17.9434 2.57593C18.8027 1.71655 19.8184 1.2478 20.9902 1.16968C22.1621 1.05249 23.1973 1.38452 24.0957 2.16577C25.1504 3.02515 25.6973 4.15796 25.7363 5.56421C25.8145 6.97046 25.3848 8.14233 24.4473 9.07983L18.0605 15.7595C17.8262 15.9939 17.5723 16.1111 17.2988 16.1111C17.0254 16.1111 16.7715 15.9939 16.5371 15.7595ZM33.5293 20.3298C33.998 20.7205 34.2129 21.2087 34.1738 21.7947C34.1738 22.3806 33.9395 22.8494 33.4707 23.2009L24.623 30.2908C23.9199 30.8376 23.1387 31.1111 22.2793 31.1111H1.36133C1.08789 31.1111 0.853516 31.0134 0.658203 30.8181C0.501953 30.6619 0.423828 30.447 0.423828 30.1736V24.5486C0.423828 24.2751 0.501953 24.0603 0.658203 23.9041C0.853516 23.7087 1.08789 23.6111 1.36133 23.6111H4.58398L7.33789 21.3845C8.58789 20.3689 10.0332 19.8611 11.6738 19.8611H21.0488C21.6348 19.8611 22.1035 20.0955 22.4551 20.5642C22.8457 20.9939 23.002 21.4822 22.9238 22.0291C22.8457 22.4978 22.6113 22.8884 22.2207 23.2009C21.8301 23.4744 21.4004 23.6111 20.9316 23.6111H16.3613C16.0879 23.6111 15.8535 23.7087 15.6582 23.9041C15.502 24.0603 15.4238 24.2751 15.4238 24.5486C15.4238 24.822 15.502 25.0564 15.6582 25.2517C15.8535 25.408 16.0879 25.4861 16.3613 25.4861H23.2754C24.1738 25.4861 24.9551 25.2126 25.6191 24.6658L31.0684 20.3298C31.4199 20.0173 31.8301 19.8611 32.2988 19.8611C32.7676 19.8611 33.1777 20.0173 33.5293 20.3298Z"
                      fill="#7C58D3"
                    />
                  </svg>
                </div>
                <div className="item_content">
                  <h3 className="item_title mb-0">1-op-1</h3>
                </div>
                <Link className="item_global_link" href="diensten"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="decoration_item shape_2">
        <svg
          width="385"
          height="384"
          viewBox="0 0 385 384"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="192.243"
            cy="192"
            r="190"
            stroke="url(#shape_circle_2)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="107 107"
          />
          <circle cx="192.243" cy="192" r="170" fill="#FF47A2" />
          <defs>
            <linearGradient
              id="shape_circle_2"
              x1="-30.159"
              y1="-153.951"
              x2="-30.159"
              y2="290.853"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="1" stopColor="#FF7DCF" />
              <stop offset="1" stopColor="#FF47A2" stopOpacity="0.01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="decoration_item chat_img_2">
        <img src="/images/custom/anouk-met-hond.png" alt="Cat Image" />
      </div>
    </section>
  );
};
