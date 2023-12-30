import React, { useState, useEffect } from "react";
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md"
import SkillsFilter from "../components/SkillsFilter";
import SpinComponent from "../components/SpinComponent";
import ScrollButton from "../components/ScrollButon";
import useScroll from "../hooks/useScroll";
import { getSkillList } from "../apis/rest/Skill";
import "../styles/Home.css";

const skillsData = [
    { topic: "os", label: "OS" },
    { topic: "language", label: "Programming Languages" },
    { topic: "tools", label: "Infrastructure Tools" },
    { topic: "database", label: "Databases" },
    { topic: "backend", label: "Backend" },
    { topic: "frontend", label: "Frontend" },
    { topic: "automation", label: "Industrial automation & IoT" },
];

const accordionStyle = {
    borderRadius: "10px",
    boxShadow: "0px 3px 15px rgba(58, 58, 58, 0.2)",
    marginBottom: "5px",
};

const SkillsFilterWrapper = ({ topic, skills }) => (
    <Accordion defaultExpanded style={accordionStyle}>
        <AccordionSummary expandIcon={<MdExpandMore />}>
            <Typography variant="h6">{topic.label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <SkillsFilter topic={topic.topic} skills={skills} />
        </AccordionDetails>
    </Accordion>
);

const Skills = () => {
    const { showScrollButton, scrollToTop, scrollToBottom } = useScroll();
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSkillList();
            setSkills(result);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="home">
            <div className="skills">
                {isLoading ? <SpinComponent /> : (
                    <div className="list">
                        {skillsData.map((topic) => (
                            <SkillsFilterWrapper key={topic.topic} topic={topic} skills={skills} />
                        ))}
                    </div>
                )}
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
