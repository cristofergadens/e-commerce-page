import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "./styles";

import Ann from "../../assets/images/brands/ann.png";
import Comma from "../../assets/images/brands/comma.png";
import Forever from "../../assets/images/brands/forever.png";
import Melissa from "../../assets/images/brands/melissa.png";
import Zara from "../../assets/images/brands/zara.png";

const BrandsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        autoplay: false,
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="sliderItem">
        <img src={Forever} alt="Forever icon" />
      </div>
      <div className="sliderItem">
        <img src={Comma} alt="Comma icon" />
      </div>
      <div className="sliderItem">
        <img src={Melissa} alt="Melissa icon" />
      </div>

      <div className="sliderItem">
        <img src={Zara} alt="Zara icon" />
      </div>
      <div className="sliderItem">
        <img src={Ann} alt="Ann icon" />
      </div>
    </Slider>
  );
};

export default function Brands() {
  return (
    <Container>
      <h3 className="title">Marcas Parceiras</h3>
      <div className="slider-mobile">
        <BrandsSlider />
      </div>

      <div className="slider-desktop">
        <div className="sliderItem">
          <img src={Comma} alt="Comma icon" />
        </div>
        <div className="sliderItem">
          <img src={Melissa} alt="Melissa icon" />
        </div>
        <div className="sliderItem">
          <img src={Forever} alt="Forever icon" />
        </div>
        <div className="sliderItem">
          <img src={Zara} alt="Zara icon" />
        </div>
        <div className="sliderItem">
          <img src={Ann} alt="Ann icon" />
        </div>
      </div>
    </Container>
  );
}
