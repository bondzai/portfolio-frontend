import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { IoMdPulse, IoMdSchool } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import ScrollButton from "../components/ScrollButon";
import useScroll from "../hooks/useScroll";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

const TimelineElement = ({ date, icon, iconStyle, title, content }) => {
    const formatKeyValue = (text) => {
        const parts = text.split(':');
        if (parts.length === 2) {
            return (
                <>
                    <strong>{parts[0]}</strong>:{parts[1]}
                </>
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
            iconStyle={iconStyle}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <p>{formattedContent}</p>
        </VerticalTimelineElement>
    );
};


const Experience = () => {
    const { showScrollButton, scrollToTop, scrollToBottom } = useScroll();

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

    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <TimelineElement
                    date={`Feb 1994 (Age: ${calculateAge("02/03/1994")})`}
                    icon={<IoMdPulse />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    title="Born in Ubon Rachatani, Thailand"
                    content=""
                />

                <TimelineElement
                    date="2009 - 2012 (3 years)"
                    icon={<IoMdSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    title="Benchama Maharat Ubon Ratchatani"
                    content="High School Diploma Sci-Math"
                />

                <TimelineElement
                    date="2012 - 2016 (4 years)"
                    icon={<IoMdSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    title="King Mongkut's Institute of Technology Ladkrabang"
                    content="Bachelor's Degree Automation Engineering"
                />

                <TimelineElement
                    date="Jul 2016 - Jan 2022 (5 years 7 months)"
                    icon={<MdWork />}
                    iconStyle={{ background: "royalblue", color: "#fff" }}
                    title="Synergetech Co., Ltd., Nonthaburi, Thailand"
                    content={`Role: Automation System Engineer
                    Responsibilities:
                        - Designed, developed, debugged, deployed & delivered industrial automation projects (especially automated batch control system).
                        - Industrial automation & control system programming. (PLC, SCADA, MES & Database)
                        - Implement analog signals, digital devices, I/O server & other 3rd party integrations by any protocol of choices.
                    `}
                />

                <TimelineElement
                    date="Jan 2022 - Nov 2022 (10 months)"
                    icon={<FaBookOpenReader />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    title="Self-learning: Software Development"
                    content={`Q2:
                        - Traditional system programming practice. Laser focus on logics, data structures & algorithms.
                        - Built blockchain's data monitoring mobile application using Google cloud environment(GoogleSheet, AppSheet, AppsScript).
                    Q3:
                        - Start using Git & GitHub.
                        - Start learning web development libraries & frameworks.(JavaScript stack - React.js & Express.js).
                    Q4:
                        - Learn more about backend services (Python-Django, Go-Fiber), infrasturcture tools & software life cycle.
                    `}
                />

                <TimelineElement
                    date={`Nov 2022 - Present (${calculateAge("11/03/2022")})`}
                    icon={<MdWork />}
                    iconStyle={{ background: "royalblue", color: "#fff" }}
                    title="Swift Dynamics Co., Ltd., Bangkok, Thailand"
                    content={`Role: Backend Developer
                    Responsibilities:
                        - Fully focus on design & develop many types of backend services.
                        - Co-work with peer engineers in coding & code reviews.
                    Challenges:
                        - Become a master backend engineer.
                        - Deep understanding of software architectural patterns (especially microservices event-driven base architecture).
                        - Learn more about DevSecOps & cloud engines.
                    `}
                />

            </VerticalTimeline>
            <ScrollButton
                showScrollButton={showScrollButton}
                scrollToTop={scrollToTop}
                scrollToBottom={scrollToBottom}
            />
        </div>
    );
};

export default Experience;
