import styled from "styled-components";
import { ColorMixin } from "../../styles/global";

export const MenuFooter = styled.div`
  background-color: #fafafa;
  padding: 37px 32px 56px 31px;

  @media screen and (min-width: 1025px) {
    padding: 40px 0 64px;
    width: 100%;

    /* display: relative; */
  }

  .col-1,
  .col-2,
  .col-3 {
    .title {
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
      display: flex;
      justify-content: space-between;
      outline: none;

      @media screen and (max-width: 1024px) {
        cursor: pointer;
      }
    }

    a {
      text-decoration: none;
      color: ${ColorMixin.gray1};
      font-size: 12px;
    }

    .title.rotate-icon .moreItems {
      transform: rotate(180deg);
      transition: transform 0.6s;
    }
  }

  .col-2 {
    @media screen and (min-width: 1025px) {
      padding-left: 66px;
    }
  }

  .content {
    max-width: 1598px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    gap: 16px;

    @media screen and (min-width: 1025px) {
      flex-direction: row;
      gap: 255px;
    }
  }
`;

export const IsMobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 0;

  a {
    margin-left: 10px;
    &:first-of-type {
      margin-top: 12px;
    }
  }

  @media screen and (min-width: 1025px) {
    padding-bottom: 0;
    gap: 24px;

    a {
      margin-left: 0;

      &:first-of-type {
        margin-top: 24px;
      }
    }
  }
`;
