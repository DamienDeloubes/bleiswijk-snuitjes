import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Faq = () => {
  const [isOpen, setOpen] = useState(false)

  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
  <>

  <section className="faq_section section_space_lg" style={{ backgroundImage: 'url(images/overlay/shapes_overlay_9.svg)' }}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-lg-5">
          <div className="section_title text-center">
            <h2 className="title_text"><span className="sub_title">answers on questions</span> Welcome To Our Family</h2>
            <p>Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col col-lg-8">
          <div className="accordion faq-box-style1" id="faq_accordion">
            <ul className="accordion-box">
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                  How often should my pet have an exam?
                  <div className="icon fas fa-plus"></div>
                </div>
                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed viverra tellus in hac habitasse. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Pellentesque sit amet porttitor eget dolor morbi non arcu. Purus viverra accumsan in nisl nisi. Nec ullamcorper sit amet risus nullam eget felis. At quis risus sed vulputate odio ut enim blandit volutpat. Sagittis id consectetur purus ut faucibus pulvinar</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                  How safe is my pet’s procedure?
                  <div className="icon fas fa-plus"></div>
                </div>
                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed viverra tellus in hac habitasse. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Pellentesque sit amet porttitor eget dolor morbi non arcu. Purus viverra accumsan in nisl nisi. Nec ullamcorper sit amet risus nullam eget felis. At quis risus sed vulputate odio ut enim blandit volutpat. Sagittis id consectetur purus ut faucibus pulvinar</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                  Why does my pet need a dental cleaning?
                  <div className="icon fas fa-plus"></div>
                </div>
                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed viverra tellus in hac habitasse. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Pellentesque sit amet porttitor eget dolor morbi non arcu. Purus viverra accumsan in nisl nisi. Nec ullamcorper sit amet risus nullam eget felis. At quis risus sed vulputate odio ut enim blandit volutpat. Sagittis id consectetur purus ut faucibus pulvinar</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block mb-0">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                  What should I do if I notice fleas or ticks on my pet?
                  <div className="icon fas fa-plus"></div>
                </div>
                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed viverra tellus in hac habitasse. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Pellentesque sit amet porttitor eget dolor morbi non arcu. Purus viverra accumsan in nisl nisi. Nec ullamcorper sit amet risus nullam eget felis. At quis risus sed vulputate odio ut enim blandit volutpat. Sagittis id consectetur purus ut faucibus pulvinar</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block mb-0">
                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(5)}>
                  At what age should I have my pet spayed or neutered?
                  <div className="icon fas fa-plus"></div>
                </div>
                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed viverra tellus in hac habitasse. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Pellentesque sit amet porttitor eget dolor morbi non arcu. Purus viverra accumsan in nisl nisi. Nec ullamcorper sit amet risus nullam eget felis. At quis risus sed vulputate odio ut enim blandit volutpat. Sagittis id consectetur purus ut faucibus pulvinar</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section className="video_section">
    <div className="container">

      <div className="section_title text-center">
        <h2 className="title_text mb-0"> <span className="sub_title">Consultation</span> How to Сonsult a Specialist</h2>
      </div>

      <div className="video_wrap">
        <div className="video_poster_wrap">
          <img src="/images/video/video_poster_1.jpg" alt="We Care About Your Friends"/>
        </div>
        <a onClick={() => setOpen(true)} className="popup_video"><i className="fas fa-play" /></a>
      </div>

    </div>
  </section>
  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tFC3jE34ilc" onClose={() => setOpen(false)} />

  </>
  );
};
export default Faq
