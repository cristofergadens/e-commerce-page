import styled from "styled-components";
import { ColorMixin } from "../../styles/global";

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #efefef;
  width: 100%;
  background-color: #fafafa;
  padding: 24px 0;

  @media screen and (min-width: 1025px) {
    padding: 38px 0;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    width: 307px;
    text-align: center;
    margin-bottom: 8px;

    @media screen and (min-width: 1024px) {
      margin-right: 15px;
      margin-bottom: 0;
    }
  }

  .search {
    display: flex;
    gap: 15px;
    justify-content: center;

    @media screen and (min-width: 1025px) {
      position: relative;
      width: 33.18%;
    }

    input {
      height: 26px;
      border-radius: 4px;

      @media screen and (min-width: 1025px) {
        height: 40px;
        border-radius: 4px;
      }

      width: 100%;
      background-color: #ffffff;
      border: none;
      padding-left: 24px;
      font-family: "Titillium Web";
      font-size: 14px;
      line-height: 18px;
      color: #353535;
      border: 1px solid ${ColorMixin.gray1};
      outline: none;
    }

    button {
      @media screen and (min-width: 1025px) {
        position: absolute;
        border-radius: 4px;
        height: 100%;
      }
      height: 26px;

      position: relative;
      top: 0;
      right: 0;
      width: 119px;
      border-radius: 4px;
      background-color: ${ColorMixin.yellow1};
      color: ${ColorMixin.light1};
      border: none;
      outline: none;
      cursor: pointer;

      span {
        font-family: "Titillium Web";
        font-size: 14px;
        line-height: 21px;
      }

      &:hover {
        filter: contrast(120%);
        transition: 400ms all;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
