import styled from "styled-components";

export const Container = styled.div`
  padding: 0 31px;
  margin-bottom: 40px;

  .title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 24px;
  }

  .sliderItem {
    max-width: 298px;
    @media screen and (min-width: 1025px) {
      max-width: 307px;
    }
    border-radius: 4px;
    display: flex;

    @media screen and (min-width: 1025px) {
      height: auto;
    }
  }

  .slider-mobile {
    /* display: none; */
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
  padding: 0 ;

      .sliderItem {
        width: auto;
      }
    }
  }

  /* max-width: 1598px;
  margin: 0 auto;
  padding-top: 0;
  margin-bottom: 20px;

  @media screen and (min-width: 1025px) {
    padding-top: 40px;
    margin-bottom: 0;

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
  } */

  /* .slick-slide {
    width: 100%;

    display: flex;
    justify-content: center;

    &:first-of-type {
      margin-left: 0;
    }
  } */
`;
