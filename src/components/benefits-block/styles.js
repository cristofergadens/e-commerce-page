import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;

  .title {
    text-align: center;
    margin-bottom: 16px;
  }

  .slider__deals {
    padding: 0 31px;
    margin-bottom: 40px;

    @media screen and (min-width: 1025px) {
      padding: 0 10px;
    }

    @media screen and (min-width: 1270px) {
      padding: 0 20px;
    }

    @media screen and (min-width: 1300px) {
      max-height: 1280px;
      padding: 0;
    }

    .sliderItem {
      max-width: 298px;
      @media screen and (min-width: 1025px) {
        max-width: 307px;
      }
      height: 64px;
      background-color: #efefef;
      border-radius: 4px;
      padding: 11px 0 11px 26px;
      display: flex;

      @media screen and (min-width: 1025px) {
        padding: 11px 10px 11px 26px;
        height: auto;
      }

      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 21px;
      }

      img {
        width: 32px;
        height: 32px;
        object-fit: contain;
      }

      .right {
        .titleItem {
          font-size: 14px;
        }
        .description {
          font-size: 12px;
          font-weight: 18px;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
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
    padding: 24px 0 0;
    max-width: 1598px;
    margin: 0 auto;
  }
`;
