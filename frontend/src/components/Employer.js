import styled from "styled-components";

const StyledEmployer = styled.li`
  position: relative;

  h4 {
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export default function Employer({ employer, lang }) {
  function endDate(lang, employer) {
    if (employer.endDate) {
      return employer.endDate;
    }
    if (lang === "nl") {
      return "heden";
    }
    return "present";
  }
  return (
    <StyledEmployer>
      <span className="sideline"></span>
      <h4>{employer.name}</h4>
      <h3>
        {employer.startDate} - {endDate(lang, employer)}
      </h3>
      <p>{lang === "en" ? employer.description : employer.descriptionNl}</p>
    </StyledEmployer>
  );
}
