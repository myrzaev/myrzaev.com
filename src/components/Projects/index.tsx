import { useState } from "react";
import { StyledProjectsSection } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface IProjectsDataProps {
  id: number;
  project: string;
  position: string;
  link: string;
  desc: string;
  done: string[];
  stack: string[];
}

function Projects() {
  const [itemIndex, setItemIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const projectsData: IProjectsDataProps[] = [
    {
      id: 1,
      project: "Danfoss",
      position: "Key Frontend Engineer",
      link: "https://www.danfoss.com/en/",
      desc: "manufacturer of thermal automation, refrigeration and drive technology, as well as industrial automation.",
      done: [
        "Covered the whole project with Playwright tests to compare the test server with the prod server",
        "Written VanillaJS instead of jquery because the project was not supported with a legacy code",
        "Developed proxy API with NodeJS to avoid CORS errors with external APIS",
      ],
      stack: ["ReactJS", "TypeScript", "Jest", "Playwright", "Sass"],
    },
    {
      id: 2,
      project: "EPAM Lunches",
      position: "TeamLead",
      link: "https://www.epam.com/",
      desc: "project that allows you to invite your co-worker for a lunch.",
      done: [
        "Rewrote from epamAuthorization to Passport.js",
        "Team leading, code review, junior mentoring",
        "Optimized multiple logical components on one page using react hooks",
      ],
      stack: ["NextJS", "TypeScript", "Styled Component", "GraphQL", "Jest"],
    },
    {
      id: 3,
      project: "Beeline Business",
      position: "Key Frontend Engineer",
      link: "https://beeline.kg/ky",
      desc: "service that allows you to monitor purchases, processing, and rate histories of telecommunications companies.",
      done: [
        "Optimized work with tariffs, creation of phone numbers with privileges",
        "Developed dynamic form for whole project that depends on initial state, where you build the exact amount of fields and types you need",
        "Implemented token refresh with axios interceptors",
      ],
      stack: ["ReactJS", "Redux-saga", "React-toasts", "Mocha", "Sass", "JWT"],
    },
    {
      id: 4,
      project: "Beeline Agent",
      position: "Key Frontend Engineer",
      link: "https://beeline.kg/ky",
      desc: "service that allows you to register SIM-cards for new subscribers, the subscriber himself can change their tariffs/plans and many other activities.",
      done: [
        "Whole project redesign",
        "Props drilling issues solving",
        "Developed electronic sign using canvas",
      ],
      stack: [
        "ReactJS",
        "Redux-thunk",
        "React-toasts",
        "Formik",
        "Mocha",
        "Sass",
        "JWT",
      ],
    },
    {
      id: 5,
      project: "Pikl",
      position: "Full-Stack Engineer",
      link: "",
      desc: "online car insurance assistant.",
      done: [
        "Developed of the chat logic of communication with the consultant",
        `Implemented an interface for reading the paragraph from the driver's license and automatically filling in the fields using Tesseract JS in Node JS`,
        "Written migrations, seeds, configuration for database using KnexfileJs",
        "Created admin side for monitoring purchases",
      ],
      stack: [
        "ReactJS",
        "NodeJS",
        "Redux-saga",
        "Express",
        "PostgreSQL",
        "TesseractJS",
        "React-yandex-map",
        "Formik",
        "Mocha",
        "Sass",
      ],
    },
    {
      id: 6,
      project: "BeeDrivers",
      position: "Frontend Engineer",
      link: "",
      desc: "service that allows you to book drivers to go for commercial meetings.",
      done: [
        "Developed asynchronous middlewares using redux-saga",
        "Created driver reservations using a form and a react-calendar",
        "Written a function that worked with the time in milliseconds",
        "Written authorization, registration, password recovery with jwt-decode library",
      ],
      stack: ["ReactJS", "React-calendar", "Redux-thunk", "Sass"],
    },
    {
      id: 7,
      project: "BeeTarget",
      position: "Frontend Engineer",
      link: "https://target.beeline.kg/home",
      desc: "service that allows you to send SMS or/and e-mails to a target audience of Beeline subscribers according to the selected parameters.",
      done: [
        "Developed a step by step form (depending on the flag, the form of filling changes)",
        "Implemented the download of multiple pdf files with React-dropzone",
        "Made logic of accepting all data with [Promise.all] in the personal area",
      ],
      stack: [
        "ReactJS",
        "Redux-saga",
        "React-google-maps",
        "Carousel",
        "Jest",
        "Sass",
      ],
    },
    {
      id: 8,
      project: "Delivery Beeline",
      link: "https://beeline.kg/ru",
      position: "Frontend Engineer",
      desc: "online sim card purchase and registration, recharge with free shipping.",
      done: [
        "The main task of the projects was to roll out to production in a week, we did it in 2 days",
        "Project development in three languages",
        "Project was developed according to the TDD and SOLID principles",
      ],
      stack: ["ReactJS", "Redux-saga", "Jest", "React-localization", "Sass"],
    },
    {
      id: 9,
      project: "RO.kg",
      position: "Frontend Engineer",
      link: "http://ro.kg/",
      desc: "service that allows you to send SMS messages to a specific customer base according to the selected parameters which are configured in the admin panel.",
      done: [
        "Project development from scratch to deployment",
        "Used all the new technology",
        "Lottie animations throughout the project",
        "Processing queries with the AbortController",
      ],
      stack: [
        "ReactJS",
        "TypeScript",
        "Mocha",
        "Formik",
        "JWT",
        "React-dropzone",
        "Redux-saga",
        "React-localization",
        "React-spring",
      ],
    },
    {
      id: 10,
      project: "Collaboration feedback",
      position: "Full-Stack Engineer",
      link: "",
      desc: "service that allows you to track the rating of an employee within the company, employees can give feedback for each other.",
      done: [
        "Implemented the ability to download a pdf file after receiving a feedback",
        "Developed statistics for the employee as a percentage of all feedback in the chart using the progress-bar",
        "Written authorization, registration, password recovery with jwt-decode library",
      ],
      stack: [
        "ReactJS",
        "React-query",
        "Formik",
        "Sass",
        "NodeJS",
        "Express",
        "MongoDB",
        "Mongoose",
        "Multer",
        "JWT",
      ],
    },
    {
      id: 11,
      project: "Digital discount card",
      position: "Full-Stack Engineer",
      link: "",
      desc: "service that allows employees to track benefits and discounts.",
      done: [
        "Wrote controllers that work with data in SQL DB",
        "Developed a config file that depends on the startup environment",
        "Customized the Dockerfile and docker-compose files",
        "Implemented configuration for database using knexfile.js",
      ],
      stack: [
        "ReactJS",
        "React-query",
        "JWT",
        "React-lottie",
        "Dotenv",
        "NodeJS",
        "Express",
        "Minio",
        "Bcrypt",
        "Knex",
        "PostgreSQL",
        "iOS Application",
        "Swift",
      ],
    },
    {
      id: 12,
      project: `"Selecting the Beeline Number"`,
      position: "Frontend Engineer",
      link: "https://nomer.beeline.kg/#/",
      desc: "service that allows subscribers to book a desired phone number.",
      done: [
        "Service that allows subscribers to book a desired phone number",
        "Developed multi language logic",
        "Created number reservations using a form and a react-input-mask for fields",
        'Implemented logic of the "show more" button',
      ],
      stack: ["ReactJS", "Redux-thunk", "React-show-more", "Sass"],
    },

    {
      id: 13,
      project: "Beeline Onboarding",
      link: "",
      position: "Backend Engineer",
      desc: "Telegram bot for beginners which helps to pass onboarding process.",
      done: [
        "Used MongoDB database for store data",
        "Bot implemented with botFather",
      ],
      stack: ["NodeJS", "Express", "TelegramBot", "MongoDB"],
    },
    {
      id: 14,
      project: "BeeShop",
      link: "",
      position: "Frontend Engineer",
      desc: "online shopping system (e-devices, phones and gadgets).",
      done: [
        "Added other color and memory options for the phone model",
        "Debugged the form with unnecessary renders and rewrote it",
        "Unnecessary queries have been removed, keeping the old data in the redux store",
      ],
      stack: ["ReactJS", "Redux-thunk", "Jest", "Sass"],
    },
    {
      id: 15,
      project: "LANDING PROJECTS",
      position: "Frontend Engineer",
      link: "",
      desc: "I put these projects in one card because they were small and had identical stack, and there were a lot of such projects.",
      done: [
        "Empire tour - travel agency/booking",
        "Kay Tuar LLC - logistics and cargo transportation",
        `"Do as I do" project for the enrollment of students at Almaty Management University`,
        `Stuff “ Shopping & Retail” - online store for phones and accessories with delivery`,
      ],
      stack: ["ReactJS", "Redux-thunk", "Jest", "Sass", "Embla-carousel-react"],
    },
  ];

  const arrows = {
    left: (handleClick: () => void) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <path
          d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
          fill="currentColor"
        />
      </svg>
    ),
    right: (handleClick: () => void) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <path
          d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
          fill="currentColor"
        />
      </svg>
    ),
  };

  return (
    <StyledProjectsSection className="animation unselect">
      <div className="projects-title">
        <h1 className="card-subtitle">PROJECTS</h1>

        <div className="swiper-buttons">
          {arrows.left(() => swiperRef.slidePrev())}
          <p className="project-count">
            {itemIndex + 1}/{projectsData.length}
          </p>
          {arrows.right(() => swiperRef.slideNext())}
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        centeredSlides={true}
        onSlideChange={(swiper) => setItemIndex(swiper.realIndex)}
        onSwiper={(swiper) => setSwiperRef(swiper)}
      >
        {projectsData.map((item: IProjectsDataProps) => (
          <SwiperSlide key={item.id}>
            <div className="project">
              <h2 className="project-title">
                {item.link ? (
                  <a href={item.link} rel="noopener noreferrer" target="_blank">
                    {item.project}
                  </a>
                ) : (
                  item.project
                )}{" "}
                - <span>{item.position}</span>
              </h2>
              <p className="project-desc">{item.desc}</p>
              <ul className="project-stack">
                {item.done.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul className="project-stack">
                {item.stack.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledProjectsSection>
  );
}

export default Projects;
