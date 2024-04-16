import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;

  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 24px;
    text-align: center;
  }

  .slider-brands {
    padding: 0 31px;

    .swiper-slide {
      width: 100%;
      max-width: auto;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: 1025px) {
    max-width: 1598px;
    margin: 0 auto;

    .slider-brands {
      padding: 0;
    }

    .title {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 1900px) {
    max-width: 1598px;
    margin: 0 auto;

    .slider-brands {
      padding: 0;
    }
  }
`;
