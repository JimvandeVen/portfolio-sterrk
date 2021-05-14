import styled from "styled-components";
import Tech from "./Tech";

const StyledAbout = styled.div`
  background-color: black;
  position: relative;
  h2 {
    color: #ff0;
    margin: 0 0 2rem 2rem;
    font-size: 4rem;
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
`;

export default function About() {
  return (
    <StyledAbout>
      <h2>About me</h2>
      <h3>Full Stack Developer</h3>

      <div>
        <p>Geboren</p>
        <p>15/07/1990</p>
      </div>
      <div>
        <p>Woonplaats</p>
        <p>Amsterdam</p>
      </div>
      <div>
        <p>Talen</p>
        <p>Nederlands, Engels</p>
      </div>
      <Tech></Tech>
    </StyledAbout>
  );
}
