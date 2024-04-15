import * as Styled from "./styles";
import IconMenu from "../../assets/icons/icon-menu";
import Search from "../../assets/icons/icon-search";
import ShoppingBag from "../../assets/icons/icon-shoppingBag";
import Logo from "../../assets/images/logo-mobile.png";
import LogoDesktop from "../../assets/images/logo-desktop.png";
import MyAccountIcon from "../../assets/icons/header/my-account";
import Fav from "../../assets/icons/header/fav";
import ShoppingBag2 from "../../assets/icons/header/shoppingBag";
import DressIcon from "../../assets/icons/dress";

export default function Header() {
  return (
    <Styled.Header>
      <div className="topHeader">
        <div className="container">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </div>
      </div>
      <div className="contentHeader-mobile">
        <div className="menu-mobile">
          <IconMenu />
        </div>
        <div className="logo">
          <img src={Logo} alt="logo-Maeztra" />
        </div>
        <div className="search">
          <Search className="search" />
        </div>
        <div className="shoppingBag">
          <ShoppingBag />
        </div>
      </div>
      <div className="contentHeader-desktop">
        <div className="container">
          <div class="logo">
            <img src={LogoDesktop} alt="Logo da loja" />
          </div>

          <div class="search">
            <input type="text" placeholder="O Que Você Busca?" />
            <button type="button">
              <span>Buscar</span>
            </button>
          </div>

          <nav class="user-nav">
            <a href="google.com" class="account">
              <MyAccountIcon aria-label="Ícone de favoritos" />
              <span>Minha Conta</span>
            </a>
            <a href="google.com" class="fav">
              <Fav aria-label="Ícone de favoritos" />
              <span>Minha Conta</span>
            </a>
            <a href="google.com" class="cart">
              <ShoppingBag2 />
              <span>Meu Carrinho</span>
            </a>
          </nav>
        </div>
      </div>
      <div className="categories-desktop">
        <ul>
          <a href="google.com" className="active">
            <DressIcon /> Novidades
          </a>
          <a href="google.com">Vestidos</a>
          <a href="google.com">Roupas</a>
          <a href="google.com">Sapatos</a>
          <a href="google.com">Lingerie</a>
          <a href="google.com">Acessórios</a>
          <a href="google.com">OUTLET</a>
        </ul>
      </div>
    </Styled.Header>
  );
}
