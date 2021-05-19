import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import Project from "./Project";

export const ALL_PROJECTS_QUERY = gql`
  query ALL_PROJECTS_QUERY {
    allProjects(sortBy: year_DESC) {
      id
      name
      description
      descriptionNl
      year
      tags {
        id
        name
      }
    }
  }
`;

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

export default function Projects({ lang }) {
  const { data, error, loading } = useQuery(ALL_PROJECTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) console.error(error);
  return (
    <StyledProjects>
      <h2>{lang === "nl" ? "Projecten" : "Projects"}</h2>
      {data.allProjects.map((project) => {
        return (
          <Project key={project.id} project={project} lang={lang}></Project>
        );
      })}
    </StyledProjects>
  );
}
