import styled from "styled-components";
import { ColorMixin } from "../../styles/global";

export const Header = styled.header`
  .topHeader {
    background-color: ${ColorMixin.gray1};
    width: 100%;

    text-align: center;
    height: 24px;

    .container {
      padding: 3px 39px 3px 47px;
      color: ${ColorMixin.light1};
      font-size: 10px;
      line-height: 18px;

      @media screen and (min-width: 720px) {
        font-size: 12px;
        padding: 3px 0;
      }
    }
  }

  .contentHeader-mobile {
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px 0 16px;

    .logo {
      margin-left: 15px;
      margin-right: 77px;
      width: 110px;
      height: 88px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .search,
    .shoppingBag,
    .menu-mobile {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .search {
      margin-right: 31px;
    }

    @media screen and (min-width: 1025px) {
      display: none;
    }
  }

  .contentHeader-desktop {
    box-shadow: 0px 4px 6px 0px #00000014;

    .container {
      margin: 24px auto 0;
      align-items: center;
      padding: 21px 10px 24px;
      display: flex;

      @media screen and (min-width: 1280px) {
        max-width: calc(1598px - 20.9%);
        padding: 21px 10px 24px;
      }
      @media screen and (min-width: 1367px) {
        padding: 21px 0 24px;
      }
      @media screen and (min-width: 1439px) {
        max-width: calc(1598px - 16.9%);
      }
      @media screen and (min-width: 1900px) {
        max-width: 1598px;
      }

      .search {
        position: relative;
        margin-left: 93px;
        width: 49.5%;

        input {
          height: 40px;
          width: 100%;
          border-radius: 10px;
          background-color: #efefef;
          border: none;
          padding-left: 24px;
          font-family: "Titillium Web";
          font-size: 12px;
          line-height: 18px;
        }

        button {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 119px;
          border-radius: 8px;
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

      .user-nav {
        margin-left: 6px;

        @media screen and (min-width: 1200px) {
          margin-left: 8px;
        }
        @media screen and (min-width: 1300px) {
          margin-left: 54px;
        }
        @media screen and (min-width: 1400px) {
          margin-left: 87px;
        }
        @media screen and (min-width: 1500px) {
          margin-left: 70px;
        }
        @media screen and (min-width: 1919px) {
          margin-left: 135px;
        }

        a {
          text-decoration: none;
          @media screen and (max-width: 1280px) {
            padding: 15px 10px 13px 13px;
          }
          @media screen and (min-width: 1360px) {
            padding: 15px 8px 13px 9px;
          }

          padding: 15px 14px 13px 17px;
          border: 1px solid transparent;
          border-radius: 8px;

          span {
            font-size: 14px;
            line-height: 21px;
            color: #353535;
          }

          &:hover {
            border: 1px solid ${ColorMixin.yellow1};
            transition: 400ms all;
          }
        }
        .account {
          @media screen and (min-width: 1919px) {
            margin-right: 31px;
          }
        }

        .fav {
          @media screen and (min-width: 1919px) {
            margin-right: 44px;
          }
        }

        svg {
          margin-right: 8px;
        }
      }
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .categories-desktop {
    max-width: 1598px;
    margin: 0 auto;
    padding: 0; 
    @media screen and (min-width: 1025px){
    padding: 13px 0 14px;
      
    }
    ul {
      margin-left: 162px;
      display: flex;
      gap: 15px;

      a {
        width: 146px;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #353535;

        svg {
          margin-right: 8px;
        }

        &.active {
          color: ${ColorMixin.yellow1};
          font-weight: 700;
        }

        &:hover {
          color: ${ColorMixin.yellow1};
          transition: 400ms all;
          cursor: pointer;
        }
      }

      @media screen and (max-width: 1600px) {
        margin-left: 0;
        justify-content: center;
      }

      @media screen and (max-width: 1025px) {
       display: none;
      }
    }
  }
`;
