import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    --header-height: 14rem;
  }

  html,
  body,
  #__next {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    font-family: "Georama", sans-serif;
    height: 100%;
    width: 100%;
    background-color: #22346d;
  }

  html {
    min-height: calc(100% + env(safe-area-inset-top));
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media only screen and (min-width: 1536px) {
    html {
      font-size: 110%;
    }
  }

  @media only screen and (max-width: 1280px) {
    html {
      font-size: 95%;
    }
  }

  @media only screen and (max-width: 1024px) {
    html {
      font-size: 90%;
    }
  }

  @media only screen and (max-width: 768px) {
    html {
      font-size: 85%;
    }
  }

  @media only screen and (max-width: 540px) {
    html {
      font-size: 90%;
    }
  }
`;

export default GlobalStyle;
