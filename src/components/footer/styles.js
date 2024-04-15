import styled from "styled-components";
import { ColorMixin } from "../../styles/global";

export const Footer = styled.footer`
  background-color: ${ColorMixin.gray1};
  padding: 24px 0 32px;

  @media screen and (min-width: 1025px) {
    width: 100%;
  }

  .socials,
  .cards {
    grid-template-columns: auto auto auto auto;
    gap: 24px;
    display: grid;
    justify-content: center;
    align-items: center;

    a {
      width: auto;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
    }
  }

  .cards {
    margin-top: 32px;
  }

  .credits {
    margin-top: 32px;
    display: flex;
    gap: 20px;
    justify-content: center;

    p {
      font-family: "Open Sans";
      font-size: 10px;
      line-height: 14px;
      color: ${ColorMixin.light1};
      margin-bottom: 3px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 19px 0 17px;

    .cards,
    .credits,
    .socials {
      margin: 0;
      gap: 22px;
    }

    .credits {
      gap: 20px;

      p {
        margin-bottom: 2px;
      }
    }
  }

  .container {
    @media screen and (min-width: 768px) {
      max-width: 728px;
      margin: 0 auto;
      display: flex;
      padding: 0;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
    }

    @media screen and (min-width: 820px) {
      max-width: 97%;
    }

    @media screen and (min-width: 1280px) {
      max-width: calc(1598px - 20.9%);
    }
    @media screen and (min-width: 1400px) {
      padding: 0;

      max-width: calc(1598px - 16.9%);
    }

    @media screen and (min-width: 1919px) {
      max-width: 1598px;
    }
  }
`;
