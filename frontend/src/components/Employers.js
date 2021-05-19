import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import Employer from "./Employer";

export const ALL_EMPLOYERS_QUERY = gql`
  query ALL_EMPLOYERS_QUERY {
    allEmployers(sortBy: startDate_DESC) {
      id
      name
      startDate
      endDate
      description
      descriptionNl
    }
  }
`;

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

export default function Employers({ lang }) {
  const { data, error, loading } = useQuery(ALL_EMPLOYERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
  }
  return (
    <StyledEmployers>
      <h2>{lang === "nl" ? "Werkgevers" : "Employers"}</h2>
      {data.allEmployers.map((employer) => {
        return (
          <Employer
            key={employer.id}
            employer={employer}
            lang={lang}
          ></Employer>
        );
      })}
    </StyledEmployers>
  );
}
