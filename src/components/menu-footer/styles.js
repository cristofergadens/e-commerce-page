import styled from "styled-components";
import { ColorMixin } from "../../styles/global";

export const MenuFooter = styled.div`
  background-color: #fafafa;
  padding: 40px 0 64px;

  .col-1,
  .col-2,
  .col-3 {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .title {
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
    }

    a {
      text-decoration: none;
      color: ${ColorMixin.gray1};
      font-size: 12px;
    }
  }

  .col-2 {
    padding-left: 66px;
  } 

  .content {
    max-width: 1598px;
    display: flex;
    justify-content: center;
    gap: 255px;
    margin: 0 auto;
  }
`;
