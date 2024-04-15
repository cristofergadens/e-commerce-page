import styled from "styled-components";

export const Container = styled.div`
  max-width: 1598px;
  margin: 0 auto;
  padding-top: 0;

  @media screen and (min-width: 1025px) {
    padding-top: 40px;
    .slider-mobile {
      display: none;
    }
  }

  .title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 24px;
  }

  .slider-desktop {
    display: none;
    @media screen and (min-width: 1025px) {
      display: flex;
      padding: 0 10px;
      justify-content: space-between;
      .sliderItem {
        width: 240px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
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

  .slider-mobile {
    .sliderItem {
      outline: none;
    }
  }

  .slick-slide {
    /* margin: 0 10px; */
    width: 100%;

    display: flex;
    justify-content: center;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;
