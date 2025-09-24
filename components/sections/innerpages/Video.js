import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Consulting = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>

    <section className="video_section section_space_lg pb-0">
      <div className="container">

        <div className="section_title text-center">
          <h2 className="title_text mb-0">
            <span className="sub_title">About Us</span>
            We Care About Your Friends
          </h2>
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
export default Consulting
