import * as Styled from "./styles";

export default function MenuFooter() {
  return (
    <Styled.MenuFooter>
      <div className="content">
        <div className="col-1">
          <h3 className="title">Informações </h3>
          <a href="google.com">Quem Somos</a>
          <a href="google.com">Prazo de Envio</a>
          <a href="google.com">Trocas e Devoluções</a>
          <a href="google.com">Promoções e Cupons</a>
        </div>
        <div className="col-2">
          <h3 className="title">Minha Conta</h3>
          <a href="google.com">Minha Conta</a>
          <a href="google.com">Meus Pedidos</a>
          <a href="google.com">Cadastre-se</a>
        </div>
        <div className="col-3">
          <h3 className="title">Onde nos Encontrar </h3>
          <a href="google.com">Lojas</a>
          <a href="google.com">Endereço</a>
        </div>
      </div>
    </Styled.MenuFooter>
  );
}
