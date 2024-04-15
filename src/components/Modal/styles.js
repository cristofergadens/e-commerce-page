import styled from "styled-components";

export const Container = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
  }
  .modal-content {
    position: relative;
    background-color: white;
    @media screen and (min-width: 1025px) {
      width: 848px;
      height: 530px;
    }
    width: 83%;
    height: 44%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Sombra */
    display: flex;

    .modal-close {
      position: absolute;
      top: -25px;
      right: 0;

      border: none;
      cursor: pointer;
      background-color: transparent;
      color: white;
    }

    .left {
      display: none;
      @media screen and (min-width: 1025px) {
        display: block;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      width: 100%;
      @media screen and (min-width: 1025px) {
        width: 50%;

      }

      align-items: center;
      justify-content: center;
      align-content: middle;
      text-align: center;

      h4 {
        font-size: 12px;
        text-transform: uppercase;
        color: #464b54;
        font-weight: 400;
        margin: 12px 0;
      }

      h3 {
        font-size: 20px;
        line-height: 23px;
        color: #787d83;
        font-weight: 400;
        margin: 0 0 25px;
      }
    }
  }

  input {
    border-radius: 10px;
    width: 77%;
    height: 42px;
    border: 1px solid #c4c4c4;
    padding: 10px 13px;
    margin-bottom: 8px;

    &::placeholder {
      color: #787d83;
    }
  }

  .modal-content .sendButton {
    background-color: #faa500;
    color: white;
    border: none;
    width: 77%;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 12px;
    font-family: "Titillium Web";
    line-height: 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: relative;
    border-radius: 10px;
    span {
      position: absolute;
      top: 13px;
      right: 38%;
    }

    &:hover {
      filter: contrast(120%);
      transition: 400ms all;
    }
  }
`;
