import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Container } from "./styles";
import MainBannerMobile from "../../assets/images/main-banner-mobile.png";
import MainBannerDesktop from "../../assets/images/main-banner.png";
import LeftArrowIcon from "../../assets/icons/navigationSliders/left.svg";
import RightArrowIcon from "../../assets/icons/navigationSliders/right.svg";

import { Pagination, Navigation } from "swiper/modules";

const BannerSwiper = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slides = [
    <SwiperSlide key="1">
      <img src={isMobile ? MainBannerMobile : MainBannerDesktop} alt="Banner" />
    </SwiperSlide>,
    <SwiperSlide key="2">
      {" "}
      <img src={isMobile ? MainBannerMobile : MainBannerDesktop} alt="Banner" />
    </SwiperSlide>,
    <SwiperSlide key="3">
      {" "}
      <img src={isMobile ? MainBannerMobile : MainBannerDesktop} alt="Banner" />
    </SwiperSlide>,
    <SwiperSlide key="4">
      {" "}
      <img src={isMobile ? MainBannerMobile : MainBannerDesktop} alt="Banner" />
    </SwiperSlide>,
    <SwiperSlide key="5">
      {" "}
      <img src={isMobile ? MainBannerMobile : MainBannerDesktop} alt="Banner" />
    </SwiperSlide>,
  ];

  return (
    <Swiper
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={true}
      modules={[ Pagination, Navigation]}
      className={isMobile ? "bannerMobile" : "bannerDestktop"}
      breakpoints={{
        1024: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }}
    >
      {slides}
      <div className="content">
        <h1 className="title">Promoções de Outono</h1>
        <p className="text">Confiras os melhores looks para combinar com você nesse Outono</p>

        <a href="# " className="cta">Conferir</a>
      </div>
      <div className="swiper-button-prev">
        <img src={LeftArrowIcon} alt="Previous" />
      </div>
      <div className="swiper-button-next">
        <img src={RightArrowIcon} alt="Next" />
      </div>
    </Swiper>
  );
};

export default function MainBanner() {
  return (
    <Container>
      <BannerSwiper />
    </Container>
  );
}
