import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Container } from "./styles";
import LeftArrowIcon from "../../assets/icons/navigationSliders/left.svg";
import RightArrowIcon from "../../assets/icons/navigationSliders/right.svg";

import { Pagination, Navigation } from "swiper/modules";
import ProductImage1 from "../../assets/images/products/desktop-product-1.png";
import ProductImage2 from "../../assets/images/products/desktop-product-2.png";

const ShelfProductsSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeColor, setActiveColor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleColorClick = (colorIndex) => {
    setActiveColor(colorIndex);
  };

  const slides = [
    <SwiperSlide key="1">
      <img src={isMobile ? ProductImage1 : ProductImage1} alt="Product" />
      <div className="product-content">
        <div className="colors">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`color-${index + 1} ${
                activeColor === index + 1 ? "active" : ""
              }`}
              onClick={() => handleColorClick(index + 1)}
            ></div>
          ))}
        </div>
        <h3 className="price">R$ 500,00</h3>
        <h4 className="title-product">Faux Suede Mini Skirt</h4>
        <p className="desc-product">
          A faux suede mini skirt featuring exposed button-front closures and
          panel seam construction.
        </p>
        <button
          className="add-cart"
          onClick={() => alert("Adicionado ao Carrinho")}
        >
          Adicionar
        </button>
      </div>
    </SwiperSlide>,
    <SwiperSlide key="2">
      <img src={isMobile ? ProductImage2 : ProductImage2} alt="Product" />
      <div className="product-content">
        <div className="colors">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index + 5}
              className={`color-${index + 5} ${
                activeColor === index + 5 ? "active" : ""
              }`}
              onClick={() => handleColorClick(index + 5)}
            ></div>
          ))}
        </div>
        <h3 className="price">R$ 320,00</h3>
        <h4 className="title-product">Ruched Rose Print Mini Skirt</h4>
        <p className="desc-product">
          A satin mini skirt featuring an allover floral print, ruched side with
          self-tie closure, concealed back zipper, and a flounce hem.
        </p>
        <button
          className="add-cart"
          onClick={() => alert("Adicionado ao Carrinho")}
        >
          Adicionar
        </button>
      </div>
    </SwiperSlide>,
    <SwiperSlide key="3">
      <img src={isMobile ? ProductImage1 : ProductImage1} alt="Product" />
      <div className="product-content">
        <div className="colors">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`color-${index + 1} ${
                activeColor === index + 1 ? "active" : ""
              }`}
              onClick={() => handleColorClick(index + 1)}
            ></div>
          ))}
        </div>
        <h3 className="price">R$ 500,00</h3>
        <h4 className="title-product">Faux Suede Mini Skirt</h4>
        <p className="desc-product">
          A faux suede mini skirt featuring exposed button-front closures and
          panel seam construction.
        </p>
        <button
          className="add-cart"
          onClick={() => alert("Adicionado ao Carrinho")}
        >
          Adicionar
        </button>
      </div>
    </SwiperSlide>,
    <SwiperSlide key="4">
      <img src={isMobile ? ProductImage2 : ProductImage2} alt="Product" />
      <div className="product-content">
        <div className="colors">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index + 5}
              className={`color-${index + 5} ${
                activeColor === index + 5 ? "active" : ""
              }`}
              onClick={() => handleColorClick(index + 5)}
            ></div>
          ))}
        </div>
        <h3 className="price">R$ 320,00</h3>
        <h4 className="title-product">Ruched Rose Print Mini Skirt</h4>
        <p className="desc-product">
          A satin mini skirt featuring an allover floral print, ruched side with
          self-tie closure, concealed back zipper, and a flounce hem.
        </p>
        <button
          className="add-cart"
          onClick={() => alert("Adicionado ao Carrinho")}
        >
          Adicionar
        </button>
      </div>
    </SwiperSlide>,
    <SwiperSlide key="5">
      <img src={isMobile ? ProductImage1 : ProductImage1} alt="Product" />
      <div className="product-content">
        <div className="colors">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`color-${index + 1} ${
                activeColor === index + 1 ? "active" : ""
              }`}
              onClick={() => handleColorClick(index + 1)}
            ></div>
          ))}
        </div>
        <h3 className="price">R$ 500,00</h3>
        <h4 className="title-product">Faux Suede Mini Skirt</h4>
        <p className="desc-product">
          A faux suede mini skirt featuring exposed button-front closures and
          panel seam construction.
        </p>
        <button
          className="add-cart"
          onClick={() => alert("Adicionado ao Carrinho")}
        >
          Adicionar
        </button>
      </div>
    </SwiperSlide>,
    <SwiperSlide key="4">
      <img src={isMobile ? ProductImage2 : ProductImage2} alt="Product" />
      <div className="product-content">
        <div className="colors">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index + 5}
              className={`color-${index + 5} ${
                activeColor === index + 5 ? "active" : ""
              }`}
              onClick={() => handleColorClick(index + 5)}
            ></div>
          ))}
        </div>
        <h3 className="price">R$ 320,00</h3>
        <h4 className="title-product">Ruched Rose Print Mini Skirt</h4>
        <p className="desc-product">
          A satin mini skirt featuring an allover floral print, ruched side with
          self-tie closure, concealed back zipper, and a flounce hem.
        </p>
        <button
          className="add-cart"
          onClick={() => alert("Adicionado ao Carrinho")}
        >
          Adicionar
        </button>
      </div>
    </SwiperSlide>,
  ];

  return (
    <Swiper
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={false}
      modules={[Pagination, Navigation]}
      className={isMobile ? "ProductMobile" : "ProductDestktop"}
      loop={isMobile ? true : false}
      slidesPerView={"auto"}
      spaceBetween={isMobile ? 14 : 16}
      breakpoints={{
        1900: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 2,
        },
       
        
      }}
      observer={true}
      observeParents={true}
    >
      {slides}

      <div className="swiper-button-prev">
        <img src={LeftArrowIcon} alt="Previous" />
      </div>
      <div className="swiper-button-next">
        <img src={RightArrowIcon} alt="Next" />
      </div>
    </Swiper>
  );
};
export default function ShelfProducts() {
  return (
    <Container>
      <h2 className="title">As Mais Pedidas</h2>
      <ShelfProductsSlider />
    </Container>
  );
}
