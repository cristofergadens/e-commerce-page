import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "./styles";
import WorldIcon from "../../assets/icons/benefits/world-icon";
import HomeIcon from "../../assets/icons/benefits/home-icon";
import RefundIcon from "../../assets/icons/benefits/refund-icon";
import DiscountIcon from "../../assets/icons/benefits/discount-icon";
import Frete from "../../assets/icons/benefits/frete";
import Truck from "../../assets/images/benefits/truck.png";
import Discount from "../../assets/images/benefits/discount.png";
import Trade from "../../assets/images/benefits/trade.png";
import World from "../../assets/images/benefits/world.png";
import Home from "../../assets/images/benefits/home.png";

const BenefitsSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.11,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    initialSlide: 0,
  };

  return (
    <Slider {...settings}>
      <div className="sliderItem">
        <div className="left">
          <WorldIcon />
        </div>
        <div className="right">
          <h4 className="titleItem">Produtos importados</h4>
          <p className="description">Produto de Alta Qualidade</p>
        </div>
      </div>

      <div className="sliderItem">
        <div className="left">
          <HomeIcon />
        </div>
        <div className="right">
          <h4 className="titleItem">Estoque no Brazil</h4>
          <p className="description">Produtos mais perto de você!</p>
        </div>
      </div>

      <div className="sliderItem">
        <div className="left">
          <RefundIcon />
        </div>
        <div className="right">
          <h4 className="titleItem">Trocas Garantidas</h4>
          <p className="description">Trocas em até 48 horas, vejas as regras</p>
        </div>
      </div>

      <div className="sliderItem">
        <div className="left">
          <DiscountIcon />
        </div>
        <div className="right">
          <h4 className="titleItem">Ganhe 5% off</h4>
          <p className="description">Pagando à vista no Cartão</p>
        </div>
      </div>

      <div className="sliderItem">
        <div className="left">
          <Frete />
        </div>
        <div className="right">
          <h4 className="titleItem">Frete Grátis</h4>
          <p className="description">Em compras acima de R$ 499,00</p>
        </div>
      </div>
    </Slider>
  );
};

export default function BenefitsBlock() {
  return (
    <Container>
      <h3 className="title">Por que comprar na Maeztra?</h3>
      <div className="slider-mobile">
        <BenefitsSlider />
      </div>

      <div className="slider-desktop">
        <div className="sliderItem">
          <div className="left">
            <img src={World} alt="World icon" />
          </div>
          <div className="right">
            <h4 className="titleItem">Produtos importados</h4>
            <p className="description">Produto de Alta Qualidade</p>
          </div>
        </div>

        <div className="sliderItem">
          <div className="left">
            <img src={Home} alt="Home icon" />
          </div>
          <div className="right">
            <h4 className="titleItem">Estoque no Brazil</h4>
            <p className="description">Produtos mais perto de você!</p>
          </div>
        </div>

        <div className="sliderItem">
          <div className="left">
          <img src={Trade} alt="Trade icon" />

          </div>
          <div className="right">
            <h4 className="titleItem">Trocas Garantidas</h4>
            <p className="description">
              Trocas em até 48 horas, vejas as regras
            </p>
          </div>
        </div>

        <div className="sliderItem">
          <div className="left">
          <img src={Discount} alt="Discount icon" />
          </div>
          <div className="right">
            <h4 className="titleItem">Ganhe 5% off</h4>
            <p className="description">Pagando à vista no Cartão</p>
          </div>
        </div>

        <div className="sliderItem">
          <div className="left">
          <img src={Truck} alt="Truck icon" />
          </div>
          <div className="right">
            <h4 className="titleItem">Frete Grátis</h4>
            <p className="description">Em compras acima de R$ 499,00</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
