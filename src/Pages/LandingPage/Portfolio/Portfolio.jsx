import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Some Glimplse of</span>
      <span>EzMeet Schedule Meeter</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1625094452868/Fp-bUmVci.png' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1625095177251/U3osU4BG9.png' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1625101161718/k8KxQ8PWj.png' alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
