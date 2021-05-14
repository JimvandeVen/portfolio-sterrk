import styled from "styled-components";
import Employer from "./Employer";

const StyledEmployers = styled.ul`
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

export default function Employers() {
  return (
    <StyledEmployers>
      <h2>Werkgevers</h2>
      <Employer></Employer>
      <Employer></Employer>
    </StyledEmployers>
  );
}
