import styled from "styled-components";
import { ColorMixin } from "../../styles/global";

export const Container = styled.div`
  .bannerMobile {
    height: 320px;
    width: 100%;
    position: relative;
  }

  .swiper-wrapper {
    @media screen and (min-width: 1900px) {
      max-width: 1598px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    z-index: 1;
    color: #fff;
    font-family: "Montserrat";
    padding: 63px 64px 64px 63px;

    @media screen and (min-width: 1024px) {
      position: absolute;
      top: 25%;
      left: 17%;
      width: 471px;
      padding: 0;
    }

    .title {
      font-size: 30px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 24px;
      padding-right: 10px;

      @media screen and (min-width: 1025px) {
        font-size: 40px;
        padding-right: 0;
        margin-bottom: 40px;
        line-height: 48px;
      }
    }

    .text {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      margin-bottom: 16px;
      padding-right: 10px;

      @media screen and (min-width: 1025px) {
        font-size: 20px;
        padding-right: 20px;
        line-height: 24px;

        margin-bottom: 40px;
      }
    }

    .cta {
      padding: 5px 8.5px;
      width: 76px;
      height: 28px;
      border: none;
      border-radius: 4px;
      background-color: ${ColorMixin.yellow1};
      color: ${ColorMixin.light1};
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      font-family: "Montserrat";
      text-decoration: none;

      &:hover {
        filter: contrast(120%);
        transition: 400ms all;
      }

      @media screen and (min-width: 1025px) {
        width: 128px;
        height: 48px;
        padding: 14px 30px;
        font-size: 16px;
        line-height: 19px;
        border-radius: 10px;
      }
    }
  }

  .swiper-pagination-horizontal {
    bottom: 16px;
    @media screen and (min-width: 1025px){
      bottom: 24px;
    }
  }
  .swiper-pagination-bullet {
    background-color: transparent;
    border: 1px solid ${ColorMixin.yellow1};
    opacity: 1;
    width: 8px;
    height: 8px;
    margin: 0 8px !important;

    &-active {
      background-color: ${ColorMixin.yellow1};
    }

    @media screen and (min-width: 1025px) {
      width: 16px;
      height: 16px;
    }
  }

  .swiper-button,
  .swiper-button {
    &-next,
    &-prev {
      position: absolute;
      top: 60%;
      transform: translateY(-50%);
      width: 19px;
      height: 32px;
      cursor: pointer;

      color: black;
      &:after {
        display: none;
      }
    }

    @media screen and (min-width: 1025px) {
      &-next {
        top: 50.5%;
        right: 8%;
      }

      &-prev {
        top: 50.5%;
        left: 8%;
      }
    }

  }

  .swiper-button-prev img,
  .swiper-button-next img {
    width: 100%;
    height: 100%;
  }
`;
