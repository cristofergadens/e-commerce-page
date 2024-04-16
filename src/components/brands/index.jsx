import { Container } from "./styles";
import Ann from "../../assets/images/brands/ann.png";
import Comma from "../../assets/images/brands/comma.png";
import Forever from "../../assets/images/brands/forever.png";
import Melissa from "../../assets/images/brands/melissa.png";
import Zara from "../../assets/images/brands/zara.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const BrandsSlider = () => {
  const slides = [
    <SwiperSlide>
      <img src={Comma} alt="Comma icon" />
    </SwiperSlide>,
    <SwiperSlide>
      <img src={Melissa} alt="Melissa icon" />
    </SwiperSlide>,
    <SwiperSlide>
      <img src={Forever} alt="Forever icon" />
    </SwiperSlide>,
    <SwiperSlide>
      <img src={Zara} alt="Zara icon" />
    </SwiperSlide>,
    <SwiperSlide>
      <img src={Ann} alt="Ann icon" />
    </SwiperSlide>,
  ];

  return (
    <Swiper
      className="slider-brands"
      spaceBetween={16}
      slidesPerView={"auto"}
      loop={true}
      breakpoints={{
        1200: {
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

export default function Brands() {
  return (
    <Container>
      <h3 className="title">Marcas Parceiras</h3>
      <div className="slider-mobile">
        <BrandsSlider />
      </div>
    </Container>
  );
}
