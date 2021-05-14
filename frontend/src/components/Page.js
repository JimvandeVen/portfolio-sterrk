import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Banner from "./Banner";
import Cv from "./Cv";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Sans Pro', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@900&display=swap')
  }
  html {
    background-color: #edf2f7;
    box-sizing: border-box;
    font-size: 16px;;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'DM Sans', sans-serif, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }

  h1 {
    font-family: 'Source Sans Pro', sans-serif, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 6rem;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #ff0;
  }
  @media (max-width: 1199px){
    h1 {
      font-size: 5rem;
    }
  }

  @media (max-width: 1024px){
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 463px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 385px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 317px) {
    h1 {
      font-size: 3rem;
    }
  }

    .hidden {
      display: none;
    }

`;

const InnerStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 0 auto;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%),
    0 10px 10px -5px rgb(0 0 0 / 4%);

  @media (max-width: 769px) {
    display: inline-block;

    img {
      width: 100%;
    }
  }
`;

export default function Page() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div>
      <GlobalStyles />
      <InnerStyles>
        <Banner width={width}></Banner>
        <Cv width={width}></Cv>
      </InnerStyles>
    </div>
  );
}
