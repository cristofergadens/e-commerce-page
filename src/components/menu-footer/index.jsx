import { useEffect, useState } from "react";
import * as Styled from "./styles";

export default function MenuFooter() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [showOptions3, setShowOptions3] = useState(false);
  const [icon1, setIcon1] = useState("+");
  const [icon2, setIcon2] = useState("+");
  const [icon3, setIcon3] = useState("+");
  const [rotateIcon1, setRotateIcon1] = useState(false);
  const [rotateIcon2, setRotateIcon2] = useState(false);
  const [rotateIcon3, setRotateIcon3] = useState(false);

  const toggleOptions1 = () => {
    setShowOptions1(!showOptions1);
    setIcon1(showOptions1 ? "+" : "-");
    setRotateIcon1(!rotateIcon1);
  };

  const toggleOptions2 = () => {
    setShowOptions2(!showOptions2);
    setIcon2(showOptions2 ? "+" : "-");
    setRotateIcon2(!rotateIcon2);
  };

  const toggleOptions3 = () => {
    setShowOptions3(!showOptions3);
    setIcon3(showOptions3 ? "+" : "-");
    setRotateIcon3(!rotateIcon3);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Styled.MenuFooter>
      <div className="content">
        <div className="col-1">
          <h3
            className={`title ${rotateIcon1 ? "rotate-icon" : ""}`}
            onClick={isMobile ? toggleOptions1 : undefined}
          >
            Informações{" "}
            {isMobile ? <span className="moreItems">{icon1}</span> : " "}
          </h3>
          {(showOptions1 || !isMobile) && (
            <Styled.IsMobileMenuItems>
              <a href="google.com">Quem Somos</a>
              <a href="google.com">Prazo de Envio</a>
              <a href="google.com">Trocas e Devoluções</a>
              <a href="google.com">Promoções e Cupons</a>
            </Styled.IsMobileMenuItems>
          )}
        </div>
        <div className="col-2">
          <h3
            className={`title ${rotateIcon2 ? "rotate-icon" : ""}`}
            onClick={isMobile ? toggleOptions2 : undefined}
          >
            Minha Conta{" "}
            {isMobile ? <span className="moreItems">{icon2}</span> : " "}
          </h3>
          {(showOptions2 || !isMobile) && (
            <Styled.IsMobileMenuItems>
              <a href="google.com">Minha Conta</a>
              <a href="google.com">Meus Pedidos</a>
              <a href="google.com">Cadastre-se</a>
            </Styled.IsMobileMenuItems>
          )}
        </div>
        <div className="col-3">
          <h3
            className={`title ${rotateIcon3 ? "rotate-icon" : ""}`}
            onClick={isMobile ? toggleOptions3 : undefined}
          >
            Onde nos Encontrar{" "}
            {isMobile ? <span className="moreItems">{icon3}</span> : " "}
          </h3>
          {(showOptions3 || !isMobile) && (
            <Styled.IsMobileMenuItems>
              <a href="google.com">Lojas</a>
              <a href="google.com">Endereço</a>
            </Styled.IsMobileMenuItems>
          )}
        </div>
      </div>
    </Styled.MenuFooter>
  );
}
