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
      period: "Mar 2023 – present",
      postiion: "Senior Full-Stack Engineer",
      company: "Profound Technologies",
      link: "https://profound-tech.com/",
      description: [
        `Developed a custom calendar solution from scratch using React and Styled-Components to monitor employee schedules and business trips, as a result, manager’s performance improved by 30%`,
        `Contributed to the development of a growing e-commerce platform, resulting in a 30% sales increase and a 25% customer retention increase`,
        `Conducted code reviews, established coding standards and best practices, and facilitated team knowledge sharing sessions to ensure code quality and consistency`,
        `Used AbortController to track multiple queries in React pagination, improved performance optimization by 40%`,
        `Executed highly responsive and feature-rich web applications using Python, Django, React, Redux, and TypeScript, ensuring seamless user experiences`,
        `Implemented Redux Saga with actions and reducers to implement a sync API calls, improving usability by 70%`,
        `Designed and implemented a departmental role-based authorization service using React and Node JS to effectively manage employee access to websites`
      ]
    },
    {
      id: 2,
      period: "Oct 2022 – Apr 2023",
      postiion: "Senior Full-Stack Engineer",
      company: "Coders LAB",
      link: "",
      description: [
        `Executed advertising integration in React Native using Iron Source, resulting in a remarkable 80% increase in revenue`,
        `Implemented subscription services utilizing Adapty in React Native, Stripe in Web and Server, resulting in a 90% increase in revenue for the company`,
        `Managed Amplitude for enhanced data analytics, optimizing user engagement strategies Resolved subscription-related issues through Webhooks implementation, ensuring seamless transactions and user experience`,
        `Led a complete redesign of the React Native application to enhance UX/UI for over 100,000 active users, resulting in increased user satisfaction and retention by 70%`,
        `Implemented an interface for reading the paragraph from the driver’s license and automati- cally filling in the fields using Tesseract JS in Node JS, which allowed the company to improve usability`,
        `Developed serverless applications using AWS Lambda, AWS API Gateway, and AWS DynamoDB`
      ]
    },
    {
      id: 3,
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
    {
      id: 4,
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
    }
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
                {item.link ?
                  <a href={item.link} rel="noopener noreferrer" target="_blank">
                    {item.company}
                  </a>
                  : item.company}
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
