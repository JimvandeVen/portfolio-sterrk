import styled from "styled-components";

const StyledEmployer = styled.li`
  position: relative;

  h4 {
    font-weight: bold;
  }

  span {
    background-color: black;
    height: inherit;
    width: 2px;
    position: absolute;
    transform: translateX(-1000%);
    height: 100%;
  }
`;

export default function Employer() {
  return (
    <StyledEmployer>
      <span></span>
      <h4>Sterrk Detachering</h4>
      <h3>01-04-2021 - heden</h3>
      <p>Iets over sterk detachering vertellen blabla</p>
    </StyledEmployer>
  );
}
