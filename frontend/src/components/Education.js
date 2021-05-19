import styled from "styled-components";

const StyledEducation = styled.li`
  position: relative;
`;

export default function Education() {
  return (
    <StyledEducation>
      <span className="sideline"></span>
      <h3>2016-2021</h3>
      <p>Bsc. Communication and Multimedia Design</p>
    </StyledEducation>
  );
}
