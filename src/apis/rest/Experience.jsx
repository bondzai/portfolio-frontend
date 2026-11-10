import { IoMdPulse, IoMdSchool } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { getList } from "./common/logics.js";
import { BACKEND_URLS } from "./common/urls.js";
import { CustomSortEnum } from "../../utils/choices.js";
import { calculateAge, formatDateRange } from "../../utils/utils.js";

const getExperienceList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/experiences/",
    customSort: CustomSortEnum.DESCENDING,
    defaultData: defaultData,
});

const defaultData = [
    {
        date: `Feb 1994 (Age: ${calculateAge("02/03/1994")})`,
        icon: <IoMdPulse />,
        title: "Born in Ubon Ratchathani, Thailand",
        content: "",
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: "2009 - 2012 (3 years)",
        icon: <IoMdSchool />,
        title: "Benchama Maharat School, Ubon Ratchathani",
        content: "High School Diploma, Science–Mathematics Program",
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: "2012 - 2016 (4 years)",
        icon: <IoMdSchool />,
        title: "King Mongkut's Institute of Technology Ladkrabang",
        content: "Bachelor of Engineering in Automation Engineering",
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: formatDateRange("07/01/2016", "01/31/2022"),
        icon: <MdWork />,
        title: "Synergetech Co., Ltd., Nonthaburi, Thailand",
        content: `Role: Automation System Engineer (On-site)
        Highlights:
            - Built full-stack web applications to monitor and manage production storage systems for Lion Corp, designing the data model and integrating PLC/SCADA telemetry into SQL Server for operational visibility.
            - Developed MES and database integration layers that link industrial control systems to enterprise software.
            - Designed and delivered complete industrial control systems from the ground up — PLC automation, Wonderware ArchestrA SCADA, fiber-optic networking across buildings, and self-hosted VMware vSphere/ESXi infrastructure.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: formatDateRange("01/01/2022", "10/31/2022"),
        icon: <FaBookOpenReader />,
        title: "Self-Learning Journey: Software Development",
        content: `
        Q2:
            - Dedicated a self-learning period to fundamental programming practices, with an emphasis on logic, data structures, and algorithms.
            - Built a blockchain data monitoring mobile app using Google services such as Google Sheets, AppSheet, and Apps Script.
        Q3:
            - Started learning Git and GitHub while exploring web development libraries and frameworks, particularly the JavaScript stack (React.js and Express.js).
        Q4:
            - Explored backend development with Python and Go, along with infrastructure tools and software development lifecycle practices.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: formatDateRange("11/01/2022", "05/31/2024"),
        icon: <MdWork />,
        title: "Swift Dynamics Co., Ltd., Bangkok, Thailand",
        content: `Role: Backend Developer (On-site)
        Highlights:
        - Built a real-time IoT metrics system for Airports of Thailand (AOT), integrating MQTT sensor data and sustaining 2,500+ req/sec at peak, with full-stack ownership of live analytics, automated alerts, and scheduled reporting.
        - Reverse-engineered legacy recursive logic with custom data structures and hash-based algorithms, cutting runtime from 4 hours to ~10 seconds.
        - Built MS Project-compatible scheduling that supports importing and exporting project plans spanning 10+ years.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: formatDateRange("05/08/2024", "12/31/2025"),
        icon: <MdWork />,
        title: "Zero Friction Co., Ltd., Bangkok, Thailand",
        content: `Role: Software Engineer (Hybrid)
        Highlights:
        - Led a backend squad of 5–7 engineers across multiple services, owning architecture decisions, service boundaries, performance, and production reliability.
        - Architected and maintained an advertisement delivery system handling 3,000+ req/sec at peak load.
        - Built and maintained Go-based modular microservices communicating over REST, gRPC, Kafka, and webhooks.
        - Built real-time systems — chat, live bidding, location tracking, notification pipelines — using SSE, WebSocket, RabbitMQ workers, and Redis Pub/Sub.
        - Configured and operated infrastructure on Ubuntu and Red Hat within Virtuozzo cloud, managing an Apache APISIX gateway and Nginx load balancing.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
    {
        date: formatDateRange("01/14/2026"),
        icon: <MdWork />,
        title: "Vulcan Coalition Co., Ltd., Bangkok, Thailand",
        content: `Role: Senior Software Engineer → Project Manager/Technical Lead (Hybrid)
        Highlights:
        - Built the proof of concept that won an AI enterprise platform engagement with Thai Samsung Electronics (TSE) and was then promoted to lead delivery end-to-end.
        - Own architecture and technical decisions across frontend, backend, and infrastructure — service boundaries, engineering standards, and LLM-based automation in core product flows.
        - Lead delivery of the SF+ Dealer Support Platform for TSE — UAT release cycles, client communications, and technical documentation, while leading a team of 5 engineers.
        - Designed a client-facing development log and status lifecycle protocol that cut communication issues by 80%.
        `,
        avatarSrc: null,
        avatarBorderColor: null
    },
];

export { getExperienceList };
