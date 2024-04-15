import styled from "styled-components";

export const Container = styled.div`
  padding-left: 16px;

  @media screen and (min-width: 1025px) {
    max-width: 1263px;
    padding: 0 16px;
    margin: 80px auto 0;
  }

  @media screen and (min-width: 1320px) {
    max-width: 1280px;
    padding: 0;
    margin: 80px auto 0;

    overflow: hidden;
    .swiper-wrapper {
      max-width: 1316px;
    }
  }
  @media screen and (min-width: 1900px) {
    margin: 80px auto 0;
    max-width: 1598px;
  }

  .title {
    font-size: 32px;
    line-height: 48.67px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 24px;
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

      display: none;
    }

    @media screen and (min-width: 1025px) {
      &-next {
        top: 50.5%;
        right: 0%;
        display: block;
      }

      &-prev {
        display: block;
        top: 50.5%;
        left: 0.7%;
      }
    }
  }

  .swiper-button-prev img,
  .swiper-button-next img {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    /* max-width: 308px; */
    /* margin: 0 8px; */
    width: 92% ;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .product-content {
      padding: 8px 27px 16px;
    }
    .colors {
      display: flex;
      gap: 8px;
      margin-top: 6px;

      .color {
        &-1,
        &-2,
        &-3,
        &-4,
        &-5,
        &-6,
        &-7,
        &-8 {
          display: block;
          content: "";
          width: 27px;
          height: 27px;
          border-radius: 4px;
          cursor: pointer;

          &.active {
            border: 1px solid #353535;
          }
        }

        &-1 {
          background-color: #deac71;
        }
        &-2 {
          background-color: #d37164;
        }
        &-3 {
          background-color: #6497d3;
        }
        &-4 {
          background-color: #3c3b79;
        }
        &-5 {
          background-color: #353535;
        }
        &-6 {
          background-color: #d84e4b;
        }
        &-7 {
          background-color: #cfc9b0;
        }
        &-8 {
          background-color: #eae9e5;
        }
      }
    }
    .price {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      padding: 8px 0;
    }
    .title-product {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    }
    .desc-product {
      opacity: 0.5;
      color: #353535;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      text-align: left;
      font-family: Titillium Web, sans-serif;
      padding: 8px 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      min-height: 54px;
      box-sizing: content-box;
      padding-right: 20px;
    }

    .add-cart {
      background-color: #faa500;
      width: 100%;
      max-width: 254px;
      height: 35px;
      border: none;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      text-align: left;
      cursor: pointer;

      &:hover {
        filter: contrast(120%);
        transform: 400ms all;
      }
    }
  }
`;
