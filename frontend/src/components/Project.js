import styled from "styled-components";

const StyledProject = styled.li`
  position: relative;

  .sideline {
    background-color: black;
    height: inherit;
    width: 2px;
    position: absolute;
    transform: translateX(-1000%);
    height: 100%;
  }

  .techContainer {
    display: flex;
    max-width: 100%;
    margin: 0 0 2rem 0;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .tech {
    color: #ff0;
    background-color: black;
    border-radius: 5px;
    font-weight: bold;
    padding: 2px 5px 2px 5px;
    margin-top: 0.5rem;
    margin-right: 0.2rem;
  }
`;
export default function Project() {
  return (
    <StyledProject>
      <span className="sideline"></span>
      <h3>Laadpalen App</h3>
      <p>
        Together with another student we created an Application in which you can
        report problems with charging stations for EVs
      </p>
      <div className="techContainer">
        <span className="tech">Javascript</span>
        <span className="tech">React.js</span>
        <span className="tech">Laravel</span>
        <span className="tech">Node</span>
        <span className="tech">TypeScript</span>
      </div>
    </StyledProject>
  );
}
