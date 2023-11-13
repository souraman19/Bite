import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./../styles/comment.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <div className="outer-feedback">
      <div className="upper-section">
        <h1 className="heading">Comments</h1>
        <p>Read all thoughts about our mess and food</p>
        <Link to="/patelcomment">
          <a class="btn btn-outline-secondary" href="#" role="button">
            See all comments
          </a>
        </Link>
      </div>
      <div className="feedback">
        <>
          <Swiper
            className="swiper-container"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-5.jpg" /> */}
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-6.jpg" /> */}
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-7.jpg" /> */}
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-8.jpg" /> */}
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src="https://swiperjs.com/demos/images/nature-9.jpg" /> */}
              <Review />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}
