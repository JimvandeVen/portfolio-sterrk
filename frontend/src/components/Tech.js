import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

export const ALL_TAGS_QUERY = gql`
  query ALL_TAGS_QUERY {
    allTags {
      id
      name
    }
  }
`;

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
  const { data, error, loading } = useQuery(ALL_TAGS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error(error);
  }
  return (
    <>
      <h2 className="banner-title">Skills</h2>
      <StyledTech>
        {data.allTags.map((tag) => {
          return <span key={tag.id}>{tag.name}</span>;
        })}
      </StyledTech>
    </>
  );
}
