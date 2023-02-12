import { StyledHeaderComponent } from "./styled";
import photto from "../../assets/photo.png";
import bg from "../../assets/bg.jpeg";

interface IHeaderProps {
  section: string;
}

function Header({ section }: IHeaderProps) {
  return (
    <StyledHeaderComponent className={section !== "about" ? "is-active" : ""}>
      <div
        className="card-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />
      <img className="card-avatar" loading="lazy" src={photto} alt="avatar" />
      <h1 className="card-fullname">Timur Myrzaev</h1>
      <h2 className="card-jobtitle">Senior Frontend Engineer</h2>
    </StyledHeaderComponent>
  );
}

export default Header;
