import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    outline: none;
    box-sizing: border-box!important;
    font-family: 'Montserrat';
  }

  body, html, #root {
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    font-size: 16px;

    @media(max-width: 1350px) {
      font-size: 15px;
    }

    @media(max-width: 1300px) {
      font-size: 13.5px;
    }

    @media(max-width: 1150px) {
      font-size: 12.5px;
    }

    @media(max-width: 1100px) {
      font-size: 12px;
    }

    @media(max-width: 1050px) {
      font-size: 11px;
    }

    @media(max-width: 1000px) {
      font-size: 10px;
    }

    @media(max-width: 900px) {
      font-size: 9.5px;
    }

    @media(max-width: 850px) {
      font-size: 9px;
    }

    @media(max-width: 800px) {
      font-size: 8.5px;
    }

    @media(max-width: 750px) {
      font-size: 7.5px;
    }

    @media(max-width: 700px) {
      font-size: 7px;
    }

    @media(max-width: 650px) {
      font-size: 6.5px;
    }

    @media(max-width: 600px) {
      font-size: 5.5px;
    }

    @media(max-width: 500px) {
      font-size: 16px;
    }

    @media(max-width: 350px) {
      font-size: 13px;
    }

    @media(max-width: 300px) {
      font-size: 10px;
    }
  }

  #root > div {
    display: flex;
    width: 100%;
    min-height: 100vh;
  }

  a, button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
        url('/fonts/Gilroy-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
        url('/fonts/Gilroy-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
        url('/fonts/Gilroy-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
        url('/fonts/Gilroy-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
        url('/fonts/Gilroy-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
        url('/fonts/Gilroy-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
        url('/fonts/Gilroy-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Firs Neue';
    src: local('TT Firs Neue'),
        url('/fonts/TTFirsNeue-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Firs Neue';
    src: local('TT Firs Neue'),
        url('/fonts/TTFirsNeue-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Firs Neue';
    src: local('TT Firs Neue'),
        url('/fonts/TTFirsNeue-Demibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Firs Neue';
    src: local('TT Firs Neue'),
        url('/fonts/TTFirsNeue-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Firs Neue';
    src: local('TT Firs Neue'),
        url('/fonts/TTFirsNeue-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Firs Neue';
    src: local('TT Firs Neue'),
        url('/fonts/TTFirsNeue-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Firs Neue';
    src: local('TT Firs Neue'),
        url('/fonts/TTFirsNeue-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }
`;

root.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>
);
