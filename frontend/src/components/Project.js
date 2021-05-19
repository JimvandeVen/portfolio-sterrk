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
    margin-right: 0.2rem;
  }
`;
export default function Project({ project, lang }) {
  return (
    <StyledProject>
      <span className="sideline"></span>
      <h3>
        {project.year} {project.name}
      </h3>
      <p>{lang === "en" ? project.description : project.descriptionNl}</p>
      <div className="techContainer">
        {project.tags.map((tag) => {
          return (
            <span key={tag.id} className="tech">
              {tag.name}
            </span>
          );
        })}
      </div>
    </StyledProject>
  );
}
