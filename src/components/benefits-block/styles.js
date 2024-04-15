import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 0 40px 31px;
  max-width: 1598px;
  margin: 0 auto;

  .title {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 21px;
    padding-right: 31px;
  }

  .sliderItem {
    background-color: #efefef;
    padding: 11px 19px 14px 26px;
    display: flex !important;
    flex-direction: row;
    border-radius: 4px;

    .left {
      align-self: center;
      width: 32px;
      height: 32px;
    }

    .right {
      display: flex;
      flex-direction: column;
      padding-left: 21px;

      .titleItem {
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
      }

      .description {
        font-size: 12px;
      }
    }
  }

  .slick-slide {
    margin: 0 10px;
    width: 307px;

    &:first-of-type {
      margin-left: 0;
    }
  }

  .slick-track {
    height: 64px;
    overflow-y: hidden;
  }

  .slider-desktop {
    display: none;
    @media screen and (min-width: 1025px) {
      display: flex;
      padding: 0 10px;
      justify-content: space-between;
      .sliderItem {
        width: 240px;
      }
    }

    @media screen and (min-width: 1290px) {
      padding: 0;
      justify-content: space-between;
      max-width: 1316px;
      margin: 0 auto;
      .sliderItem {
        width: 260px;
      }
    }

    @media screen and (min-width: 1400px) {
      max-width: 1357px;
    }

    @media screen and (min-width: 1600px) {
      max-width: 1330px;
      .sliderItem {
        width: 260px;
      }
    }

    @media screen and (min-width: 1601px) {
      max-width: 1598px;
      .sliderItem {
        width: 307px;
      }
    }
  }

  @media screen and (min-width: 1025px) {
    padding: 24px 0 40px 0;

    .slider-mobile {
      display: none;
    }
  }
`;
