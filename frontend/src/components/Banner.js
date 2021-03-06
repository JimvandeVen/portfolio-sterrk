import styled from "styled-components";
import profilePicture from "../img/profielfoto.jpg";
import Tech from "./Tech";
import About from "./About";

const StyledBanner = styled.div`
  background-color: black;
  position: relative;
  padding-bottom: 2rem;
  h2 {
    color: #ff0;
  }

  .banner-title:first-of-type {
    transform: translateY(-100%);
  }

  .banner-title {
    margin: 0 0 0 2rem;
    font-size: 3rem;
  }
  h3 {
    color: white;
    margin: 0 0 0 2rem;
    transform: translateY(-100%);
  }
  img {
    max-width: 100%;
    filter: grayscale(100%);
  }
  div:not(:last-of-type) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 0 0 2rem;
  }

  div p {
    margin: 0;
    width: 50%;
    color: white;
  }
  h1 {
    margin-left: 2rem;
    position: absolute;
    z-index: 10;
    color: #ff0;
    font-size: 6rem;
    text-decoration-color: black;
    top: 450px;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
    .banner-title {
      font-size: 2rem;
    }
  }
  @media (max-width: 498px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 385px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export default function Banner({ width, lang }) {
  const desktop = width <= 768 ? "hidden" : "";
  const mobile = width > 768 ? "hidden" : "";
  return (
    <>
      <StyledBanner className={mobile}>
        <img alt="profielfoto jim van de ven" src={profilePicture}></img>
        <h1>Jim van de Ven</h1>
        <About lang={lang}></About>
      </StyledBanner>
      <StyledBanner className={desktop}>
        <img alt="profielfoto jim van de ven" src={profilePicture}></img>
        <h2 className="banner-title">
          {lang === "nl" ? "Over mij" : "About me"}
        </h2>
        <h3>Full Stack Developer</h3>
        <div>
          <p>{lang === "nl" ? "Geboren" : "Dob."}</p>
          <p>15/07/1990</p>
        </div>
        <div>
          <p>{lang === "nl" ? "Woonplaats" : "Res."}</p>
          <p>Amsterdam</p>
        </div>
        <div>
          <p>{lang === "nl" ? "Talen" : "Lang."}</p>
          <p>{lang === "nl" ? "Nederlands, Engels" : "Dutch, English"}</p>
        </div>
        <Tech></Tech>
      </StyledBanner>
    </>
  );
}
