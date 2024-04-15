import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: 23px 31px 40px;

  .left {
    width: 90.5%;

    .title {
      font-size: 24px;
    }

    .text-mobile {
      font-size: 14px;
      margin: 16px 0 24px;
    }
  }

  .right {
    max-width: 100%;
    width: 100%;
    height: 190px;

    @media screen and (min-width: 1025px) {
      height: 100%;
    }

    .banner-mobile {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 1025px) {
    .banner-desktop {
      display: none;
    }
    .text-desktop {
      display: none;
    }
  }

  @media screen and (min-width: 1025px) {
    justify-content: space-between;
    flex-direction: row;
    max-width: 1280px;
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    padding: 80px 10px;

    .left {
      width: 30.29%;

      .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
      }

      .text-desktop {
        margin-top: 16px;
        font-size: 14px;
        line-height: 21px;
        padding-right: 64px;
      }

      .text-mobile {
        display: none;
      }
    }

    .right {
      width: 69.71%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .banner-mobile {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1281px) {
    max-width: 1280px;
    padding: 80px 10px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 0;
  }

  @media screen and (min-width: 1439px) {
    max-width: 1357px;
  }

  @media screen and (min-width: 1600px) {
    max-width: 1330px;
  }

  @media screen and (min-width: 1900px) {
    max-width: 1598px;
  }
`;
