import React, { useState, useEffect } from "react";
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md"
import SkillGroup from "../components/SkillGroup";
import SpinComponent from "../components/loaders/SpinComponent";
import ScrollButton from "../components/ScrollButon";
import useScroll from "../hooks/useScroll";
import { getSkillList } from "../apis/rest/Skill";
import { globalDelay } from "../utils/constants";
import "../styles/Home.css";

const skillsData = [
    { topic: "language", label: "Programming Languages" },
    { topic: "backend", label: "Backend" },
    { topic: "database", label: "Databases" },
    { topic: "commu", label: "Communication technology & protocols" },
    { topic: "tools", label: "Infrastructure & tools" },
    { topic: "frontend", label: "Frontend" },
    { topic: "os", label: "OS" },
    { topic: "automation", label: "Industrial automation & IoT" },
];

const accordionStyle = {
    borderRadius: "10px",
    boxShadow: "0px 3px 15px rgba(58, 58, 58, 0.2)",
    marginBottom: "5px",
};

const SkillGroupWraper = ({ topic, skills }) => (
    <Accordion defaultExpanded style={accordionStyle}>
        <AccordionSummary expandIcon={<MdExpandMore />}>
            <Typography variant="h6">{topic.label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <SkillGroup topic={topic.topic} skills={skills} />
        </AccordionDetails>
    </Accordion>
);

const Skills = () => {
    const { showScrollButton, scrollToTop, scrollToBottom } = useScroll();
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getSkillList();
                setSkills(result);
                setIsLoading(false);
            }, globalDelay);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <SpinComponent />
        );
    }
    
    return (
        <div className="home">
            <div className="skills">
                <div className="list">
                    {skillsData.map((topic) => (
                        <SkillGroupWraper key={topic.topic} topic={topic} skills={skills} />
                    ))}
                </div>
            </div>
            <ScrollButton
                showScrollButton={showScrollButton}
                scrollToTop={scrollToTop}
                scrollToBottom={scrollToBottom}
            />
        </div>
    );
    
    
};

export default Skills;
