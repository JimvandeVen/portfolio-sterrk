import styled from "styled-components";

const StyledEducation = styled.li`
  position: relative;

  span {
    background-color: black;
    height: inherit;
    width: 2px;
    position: absolute;
    transform: translateX(-1000%);
    height: 100%;
  }
`;

export default function Education() {
  return (
    <StyledEducation>
      <span></span>
      <h3>2016-2021</h3>
      <p>Bsc. Communication and Multimedia Design</p>
    </StyledEducation>
  );
}
