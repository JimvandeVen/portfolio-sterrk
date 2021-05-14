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
`;

export default function Cv({ width }) {
  const desktop = width <= 768 ? "hidden" : "";
  const mobile = width > 768 ? "hidden" : "";

  return (
    <>
      <StyledCv className={desktop}>
        <h1>Jim van de Ven</h1>
        <Summary></Summary>
        <Educations></Educations>
        <Employers></Employers>
        <Projects></Projects>
      </StyledCv>
      <StyledCv className={mobile}>
        <Summary></Summary>
        <Educations></Educations>
        <Employers></Employers>
        <Projects></Projects>
      </StyledCv>
    </>
  );
}
