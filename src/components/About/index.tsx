import { StyledCardSection } from "./styled";

function About() {
  return (
    <StyledCardSection className="animation" id="about">
      <div className="card-content">
        <h1 className="card-subtitle">ABOUT</h1>
        <p className="card-desc">
          Green Card Holder — I am authorized to work in the United States. <br />
          Highly skilled and motivated Full-Stack Engineer with 5+ years of hands-on experience building various web applications for international companies in USA, Amsterdam and Denmark
        </p>
      </div>
    </StyledCardSection>
  );
}

export default About;
