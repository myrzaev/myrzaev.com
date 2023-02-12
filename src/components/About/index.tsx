import { StyledCardSection } from "./styled";

function About() {
  return (
    <StyledCardSection className="animation" id="about">
      <div className="card-content">
        <h1 className="card-subtitle">ABOUT</h1>
        <p className="card-desc">
          I'm a Frontend Engineer with 4+ years of experience creating web
          applications and specialized in JS and React and also 3+ years of
          backend expertise in building services. I've worked in two huge
          companies EPAM Systems and VEON Ltd.. <br />
          And now I'm looking for a job.
        </p>
      </div>
    </StyledCardSection>
  );
}

export default About;
