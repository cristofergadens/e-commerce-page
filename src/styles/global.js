import { createGlobalStyle } from "styled-components";

export const colors = {
  yellow1: "#FAA500",
  gray1: "#353535",
  light1: "#FFFFFF",
};

export const ColorMixin = {};
Object.keys(colors).forEach((key) => {
  ColorMixin[key] = colors[key];
});

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: "Titillium Web", sans-serif;
    background-color: ${ColorMixin.primary};
    margin: auto;

    color: ${ColorMixin.secondary};

    p {
      line-height: 1.5;
    }
  }

`;

export default GlobalStyle;
