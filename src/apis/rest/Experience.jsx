import { IoMdPulse, IoMdSchool } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { getList } from "./common/logics.js";
import { BACKEND_URLS } from "./common/urls.js";
import { CustomSortEnum } from "../../utils/choices.js";
import { calculateAge } from "../../utils/utils.js";

const getExperienceList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/experiences/", // Mock endpoint, logic.js uses defaultData fallback
    customSort: CustomSortEnum.DESCENDING,
    // Note: The original data was chronological (oldest to newest). 
    // If we want newest first, we might need CustomSortEnum.DESCENDING or handle it in component.
    // The component has a 'reverseOrder' toggle. The original array started with birth (1994).
    defaultData: defaultData,
});

const defaultData = [
    {
        date: `Feb 1994 (Age: ${calculateAge("02/03/1994")})`,
        icon: <IoMdPulse />,
        title: "Born in Ubon Rachatani, Thailand",
        content: "",
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: "2009 - 2012 (3 years)",
        icon: <IoMdSchool />,
        title: "Benchama Maharat Ubon Ratchatani",
        content: "High School Diploma Sci-Math",
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: "2012 - 2016 (4 years)",
        icon: <IoMdSchool />,
        title: "King Mongkut's Institute of Technology Ladkrabang",
        content: "Bachelor's Degree Automation Engineering",
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: "Jul 2016 - Jan 2022 (5 years 7 months)",
        icon: <MdWork />,
        title: "Synergetech Co., Ltd., Nonthaburi, Thailand",
        content: `Role: Automation System Engineer
        Responsibilities:
            - Spearheaded the design, development, debugging, deployment, and delivery of industrial automation projects, with a specialization in automated batch control systems.
            - Proficient in industrial automation and control system programming, including PLC, SCADA, MES, and database integration.
            - Successfully implemented analog signals, digital devices, I/O servers, and various 3rd-party integrations utilizing preferred protocols.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: "Jan 2022 - Oct 2022 (10 months)",
        icon: <FaBookOpenReader />,
        title: "Self-Learning Journey: Software Development",
        content: `
        Q2:
            - Dedicated self-learning period focused on traditional system programming practices with an emphasis on logic, data structures, and algorithms.
            - Constructed a blockchain data monitoring mobile application leveraging Google cloud services such as GoogleSheet, AppSheet, and AppsScript.
        Q3:
            - Initiated learning of Git and GitHub, alongside exploration of web development libraries and frameworks, particularly the JavaScript stack encompassing React.js and Express.js.
        Q4:
            - Delved into backend services with Python and Go, as well as infrastructure tools and software lifecycle practices.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: "Nov 2022 -May 2024 (1 year 7 months)",
        icon: <MdWork />,
        title: "Swift Dynamics Co., Ltd., Bangkok, Thailand",
        content: `Role: Backend Developer
        Responsibilities:
        - Concentrating efforts on designing and developing a variety of backend services while collaborating with fellow engineers through coding and code reviews.
        - Tackling challenges to master backend engineering, deepen understanding of software architectural patterns (with a focus on microservices and event-driven architecture), and expand knowledge in DevSecOps and cloud technologies.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: `May 2024 - Dec 2025 (${calculateAge("05/08/2024")})`,
        icon: <MdWork />,
        title: "Zero Friction Co., Ltd., Bangkok, Thailand",
        content: `Role: Software Engineer
        Responsibilities:
        - Collaborating with team members to implement and optimize core stack components using Golang, Apache Kafka, Apache APISIX, and gRPC protocol.
        - Particular emphasis on microservices architecture and optimizing data streaming efficiency.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: `Dec 2025 - Present (${calculateAge("12/24/2025")})`,
        icon: <MdWork />,
        title: "Vulcan Coalition Co., Ltd., Bangkok, Thailand",
        content: `Role: Senior Software Engineer
        Responsibilities:
        - Design, develop, and maintain high-quality frontend and backend systems.
        - Architect scalable, maintainable software that aligns with product and business goals.
        - Collaborate with AI engineers to build smart, automated product experiences.
        - Implement and maintain CI/CD pipelines for smooth, zero-drama deployments.
        - Conduct code reviews and mentor junior developers to raise team standards.
        - Stay updated with emerging technologies and best practices in software development.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
];

export { getExperienceList };
