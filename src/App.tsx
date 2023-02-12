import { useState } from "react";
import { StyledMainContainer } from "./gloabalStyle";
import {
  Header,
  About,
  Contact,
  Experience,
  Projects,
  Tabs,
} from "./components";
import NYbackground from "./assets/NYC.webp";
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";

interface IContentElements {
  about: JSX.Element;
  experience: JSX.Element;
  contact: JSX.Element;
  projects: JSX.Element;
}

function App() {
  const [section, setSection] = useState("about");

  const content: IContentElements = {
    about: <About />,
    experience: <Experience />,
    contact: <Contact />,
    projects: <Projects />,
  };

  return (
    <StyledMainContainer className="animation lazyload" data-bg={NYbackground}>
      <div className="card " data-state={`#${section}`}>
        <Header section={section} />
        <main className="card-main">
          {(content as any)[section]}
          <Tabs
            tabs={["about", "experience", "projects", "contact"]}
            section={section}
            onChange={setSection}
          />
        </main>
      </div>
    </StyledMainContainer>
  );
}

export default App;
