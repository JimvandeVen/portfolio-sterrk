import styled from "styled-components";

const StyledSummary = styled.div`
  p {
    font-weight: lighter;
  }
`;

export default function Summary({ lang }) {
  return (
    <StyledSummary>
      {lang === "en" && (
        <p>
          Creative Web developer with a solid background in <b>JavaScript</b>.
          Currently expanding my knowledge in backend, specificly <b>php</b>{" "}
          (Laravel). I'm a creative webdeveloper with schooling in <b>UI/UX</b>{" "}
          design and who centers my work around the end user. I work well in
          teams with different disciplines and not afraid to give my opinion and
          have a <b>professional</b> discussion, leading to a better product.
        </p>
      )}
      {lang === "nl" && (
        <p>
          Creatieve web developer met een solide achtergrond in{" "}
          <b>JavaScript</b>. Momenteel ben ik bezig om mijn kennis in backend te
          vergroten, met name in <b>php</b> (laravel). Ik heb oog voor{" "}
          <b>UX/UI</b> design en centreer mijn werk op de eindgebruiker. Door
          mijn opleiding ben ik goed in het werken in teams met verschillende
          disciplines en niet bang om mijn mijn mening te geven en een{" "}
          <b>professionele</b> discussie te voeren, om tot een beter product te
          komen.
        </p>
      )}
    </StyledSummary>
  );
}
