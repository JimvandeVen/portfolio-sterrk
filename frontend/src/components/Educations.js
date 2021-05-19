import styled from "styled-components";
import Education from "./Education";

const StyledEducations = styled.ul`
  list-style: none;
  padding: 0;
  h2 {
    text-decoration: underline;
    text-decoration-color: #ff0;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export default function Educations({ lang }) {
  return (
    <StyledEducations>
      <h2>{lang === "en" ? "Education" : "Opleiding"}</h2>
      <Education></Education>
    </StyledEducations>
  );
}
