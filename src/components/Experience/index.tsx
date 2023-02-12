import { StyledCardSection } from "./styled";

interface IExperienceDataProps {
  id: number;
  period: string;
  postiion: string;
  company: string;
  link: string;
  description: string[];
}
function Experience() {
  const data: IExperienceDataProps[] = [
    {
      id: 1,
      period: "Dec 2018 - Sep 2021",
      postiion: "Full-Stack Developer",
      company: "VEON Ltd.",
      link: "https://www.veon.com/",
      description: [
        `Developing and implementing highly-responsive user interface components using React concepts`,
        `Monitoring and improving front-end performance`,
        `Constructed a frontend architecture supporting user interface concepts`,
        `Contributed to choosing the project's technology stack`,
        `Developed a user interface to simplify complex user interactions`,
        `Migrated the old code base to the SPA`,
        `Worked with time and react-calendar for reservations, wrote custom hooks for different time formats`,
        `Changed the entire project design by deleting and creating components`,
        `Switched from CSS to SCSS for optimization of style isolation`,
        `Managed the project from scratch, made decisions on which libraries, technologies, frameworks we will use`,
        `Created a telegram bot for newcomers onboarding using NodeJS (a to do list/map for new employees) with NodeJS`,
        `Developing and implementing front-end architecture to support user interface concepts`,
      ],
    },
    {
      id: 2,
      period: "Sep 2021 - Oct 2022",
      postiion: "Software Engineer",
      company: "EPAM Systems",
      link: "https://www.epam.com/",
      description: [
        `Participated in a mentor program for company interviews`,
        `Improved user experience with innovative solutions`,
        `Interviewed students from the RsSchool and helped them understand things they didn't understand`,
        `Meeting with the development team to discuss user interface ideas and applications`,
        `Troubleshooting interface software and debugging application codes`,
        `Improved application performance`,
        `Developing and implementing highly-responsive user interface components using React concepts`,
        `Documenting application changes and developing updates`,
      ],
    },
  ];

  return (
    <StyledCardSection className="animation" id="experience">
      <div className="card-content">
        <h1 className="card-subtitle">WORK EXPERIENCE</h1>
        <div className="card-timeline">
          {data.map((item: IExperienceDataProps) => (
            <div className="card-item" key={item.id}>
              <p className="card-item-title">
                {item.postiion} @{" "}
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                  {item.company}
                </a>
              </p>
              <p className="card-item-period">{item.period}</p>
              <div className="card-item-desc">
                {item.description.map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledCardSection>
  );
}

export default Experience;
