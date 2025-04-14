import React, { useState, useMemo } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { IoMdPulse, IoMdSchool } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { BiSort } from "react-icons/bi";
import { Avatar, Tooltip } from "antd";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";


const TimelineElement = ({ date, icon, title, content, avatarSrc, avatarBorderColor }) => {
    const formatKeyValue = (text) => {
        const parts = text.split(':');
        if (parts.length === 2) {
            return (
                <React.Fragment>
                    <strong>{parts[0]}</strong>:{parts[1]}
                </React.Fragment>
            );
        } else {
            return text;
        }
    };

    const formattedContent = content.split('\n').map((item, index) => (
        <React.Fragment key={index}>
            {formatKeyValue(item)}
            <br />
        </React.Fragment>
    ));

    return (
        <VerticalTimelineElement
            className="vertical-timeline-elemt--education"
            date={date}
            icon={icon}
            iconClassName="timeline-icon"
        >
            <div className="timeline-element-header">
                {avatarSrc && <Avatar size={30} className="timeline-avatar" src={avatarSrc} />}
                &nbsp;
                <h3 className="vertical-timeline-element-title">{title}</h3>
            </div>
            <p>{formattedContent}</p>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const [reverseOrder, setReverseOrder] = useState(false);

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthdateObj = new Date(birthdate);
        const years = today.getFullYear() - birthdateObj.getFullYear();
        const months = today.getMonth() - birthdateObj.getMonth();

        if (months < 0 || (months === 0 && today.getDate() < birthdateObj.getDate())) {
            return `${years - 1} year ${12 - birthdateObj.getMonth() + today.getMonth()} months`;
        } else {
            return `${years} years ${months} months`;
        }
    };

    const timelineElementsData = [
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
            date: `May 2024 - Present (${calculateAge("05/08/2024")})`,
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
    ];

    // Memoized timeline elements
    const timelineElements = useMemo(() => {
        const elements = timelineElementsData.map((element, index) => (
            <TimelineElement
                key={index}
                date={element.date}
                icon={element.icon}
                title={element.title}
                content={element.content}
                avatarSrc={element.avatarSrc}
                avatarBorderColor={element.avatarBorderColor}
            />
        ));
        return reverseOrder ? elements.reverse() : elements;
    }, [reverseOrder, timelineElementsData]);

    const toggleOrder = () => {
        setReverseOrder(!reverseOrder);
    };

    return (
        <div className="experience">
            <Tooltip title="Click to forward/reverse timeline." placement="left">
                <button onClick={toggleOrder} className="icon">
                    <BiSort />
                </button>
            </Tooltip>
            <VerticalTimeline>
                {timelineElements}
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
