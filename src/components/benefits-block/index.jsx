import React from "react";
import { Container } from "./styles";
import Truck from "../../assets/images/benefits/truck.png";
import Discount from "../../assets/images/benefits/discount.png";
import Trade from "../../assets/images/benefits/trade.png";
import World from "../../assets/images/benefits/world.png";
import Home from "../../assets/images/benefits/home.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const BenefitsSlider = () => {
  const slides = [
    <SwiperSlide>
      <div className="sliderItem">
        <div className="left">
          <img src={World} alt="World icon" />
        </div>
        <div className="right">
          <h4 className="titleItem">Produtos importados</h4>
          <p className="description">Produto de Alta Qualidade</p>
        </div>
      </div>
    </SwiperSlide>,
    <SwiperSlide>
      <div className="sliderItem">
        <div className="left">
          <img src={Home} alt="Home icon" />
        </div>
        <div className="right">
          <h4 className="titleItem">Estoque no Brazil</h4>
          <p className="description">Produtos mais perto de você!</p>
        </div>
      </div>
    </SwiperSlide>,
    <SwiperSlide>
      <div className="sliderItem">
        <div className="left">
          <img src={Trade} alt="Trade icon" />
        </div>
        <div className="right">
          <h4 className="titleItem">Trocas Garantidas</h4>
          <p className="description">Trocas em até 48 horas, vejas as regras</p>
        </div>
      </div>
    </SwiperSlide>,
    <SwiperSlide>
      <div className="sliderItem">
        <div className="left">
          <img src={Discount} alt="Discount icon" />
        </div>
        <div className="right">
          <h4 className="titleItem">Ganhe 5% off</h4>
          <p className="description">Pagando à vista no Cartão</p>
        </div>
      </div>
    </SwiperSlide>,
    <SwiperSlide>
      <div className="sliderItem">
        <div className="left">
          <img src={Truck} alt="Truck icon" />
        </div>
        <div className="right">
          <h4 className="titleItem">Frete Grátis</h4>
          <p className="description">Em compras acima de R$ 499,00</p>
        </div>
      </div>
    </SwiperSlide>,
  ];

  return (
    <Swiper
      className="slider__deals"
      spaceBetween={15}
      slidesPerView={"auto"}
      breakpoints={{
        1360: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
      }}
      observer={true}
    >
      {slides}
    </Swiper>
  );
};

export default function BenefitsBlock() {
  return (
    <Container>
      <h3 className="title">Por que comprar na Maeztra?</h3>
      <div className="slider-mobile">
        <BenefitsSlider />
      </div>
    </Container>
  );
}
