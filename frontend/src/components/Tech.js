import styled from "styled-components";

const StyledTech = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 2rem 0 2rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  span {
    color: black;
    background-color: #ff0;
    border-radius: 5px;
    font-weight: bold;
    padding: 2px 5px 2px 5px;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export default function Tech() {
  return (
    <>
      <h2 className="banner-title">Tech</h2>
      <StyledTech>
        <span>Javascript</span>
        <span>React.js</span>
        <span>Laravel</span>
        <span>Node</span>
        <span>TypeScript</span>
      </StyledTech>
    </>
  );
}
