import styled from "styled-components";
import Project from "./Project";

const StyledProjects = styled.ul`
  list-style: none;
  padding: 0;
  h2 {
    text-decoration: underline;
    text-decoration-color: #ff0;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default function Projects() {
  return (
    <StyledProjects>
      <h2>Projecten</h2>
      <Project></Project>
      <Project></Project>
    </StyledProjects>
  );
}
