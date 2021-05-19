import styled from "styled-components";
import Educations from "./Educations";
import Employers from "./Employers";
import Projects from "./Projects";
import Summary from "./Summary";

const StyledCv = styled.div`
  background-color: white;
  padding: 3rem;
  h3,
  h4 {
    margin-bottom: 0;
    margin-top: 0;
  }
  p {
    margin-top: 0;
  }
  h4 {
    font-weight: 400;
  }
  .sideline {
    background-color: black;
    height: inherit;
    width: 2px;
    position: absolute;
    transform: translateX(-1000%);
    height: 100%;
  }
`;

export default function Cv({ width, lang }) {
  const desktop = width <= 768 ? "hidden" : "";
  const mobile = width > 768 ? "hidden" : "";

  return (
    <>
      <StyledCv className={desktop}>
        <h1>Jim van de Ven</h1>
        <Summary lang={lang}></Summary>
        <Educations lang={lang}></Educations>
        <Employers lang={lang}></Employers>
        <Projects lang={lang}></Projects>
      </StyledCv>
      <StyledCv className={mobile}>
        <Summary lang={lang}></Summary>
        <Educations lang={lang}></Educations>
        <Employers lang={lang}></Employers>
        <Projects lang={lang}></Projects>
      </StyledCv>
    </>
  );
}
