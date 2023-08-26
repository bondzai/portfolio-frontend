import React, { useState, useEffect } from "react";

import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SkillsFilter from "../components/SkillsFilter";
import SpinComponent from "../components/SpinComponent";

import useScroll from "../hooks/useScroll";
import { getSkillList } from "../apis/SkillList";
import "../styles/Home.css";

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

    const accordionStyle = {
        borderRadius: "10px",
        boxShadow: "0px 3px 15px rgba(58, 58, 58, 0.2)",
        marginBottom: "5px",
    };

    return (
        <div className="home">
            <div className="skills">
                {isLoading ? (<SpinComponent />) : (
                    <div className="list">
                        <Accordion defaultExpanded style={accordionStyle}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">OS</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SkillsFilter topic="os" skills={skills} />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion defaultExpanded style={accordionStyle}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Programming Languages</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SkillsFilter topic="language" skills={skills} />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion defaultExpanded style={accordionStyle}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Infrastructure Tools</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SkillsFilter topic="tools" skills={skills} />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion defaultExpanded style={accordionStyle}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Databases</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SkillsFilter topic="database" skills={skills} />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion defaultExpanded style={accordionStyle}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Backend</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SkillsFilter topic="backend" skills={skills} />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion defaultExpanded style={accordionStyle}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Frontend</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SkillsFilter topic="frontend" skills={skills} />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion defaultExpanded style={accordionStyle}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Automation & IOT Stuff</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SkillsFilter topic="automation" skills={skills} />
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )}
            </div>
            <ArrowUpwardIcon
                className={`scroll-button ${showScrollButton ? "visible" : ""}`}
                onClick={scrollToTop}
            >
            </ArrowUpwardIcon>
            <ArrowDownwardIcon
                className={`scroll-button ${!showScrollButton ? "hidden" : ""}`}
                onClick={scrollToBottom}
            >
            </ArrowDownwardIcon>
        </div>
    );
};

export default Skills;
