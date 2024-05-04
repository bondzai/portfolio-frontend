import React, { useState, useEffect } from "react";
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md"
import SkillGroup from "../components/SkillGroup";
import SpinLoader from "../components/loaders/SpinLoader";
import ScrollButton from "../components/buttons/ScrollButton";
import useScroll from "../hooks/useScroll";
import { getSkillList } from "../apis/rest/Skill";
import { globalDelay } from "../utils/constants";
import "../styles/Home.css";

const skillsData = [
    { topic: "os", label: "OS" },
    { topic: "language", label: "Programming Languages" },
    { topic: "frontend", label: "Frontend" },
    { topic: "backend", label: "Backend" },
    { topic: "database", label: "Databases & Caches" },
    { topic: "commu", label: "Communication Technology & protocols" },
    { topic: "tools", label: "Infra & More" },
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
            <SpinLoader />
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
