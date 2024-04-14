import * as Styled from './styles'; 

export default function Newsletter() {
  return (
    <Styled.Newsletter>
      <h3>Recebe Nossa Newsletter</h3>
      <div class="search">
        <input type="text" placeholder="Digite seu e-mail" />
        <button type="button">
          <span>Buscar</span>
        </button>
      </div>
    </Styled.Newsletter>
  );
}
