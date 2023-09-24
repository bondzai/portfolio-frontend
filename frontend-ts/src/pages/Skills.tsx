import { useState, useEffect } from "react";

import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";

import { MdExpandMore } from "react-icons/md"

import SkillCard from "../components/cards/SkillCard";
import ScrollButton from "../components/buttons/ScrollButon";
// import SpinComponent from "../components/SpinComponent";

import useScroll from "../hooks/useScroll";

import { getSkillList } from "../apis/rest/endpoints";

import { SkillItemType } from "../types";

import "../styles/Home.css";

const Skills = () => {
    const { showScrollButton, scrollToTop, scrollToBottom } = useScroll();

    const [skills, setSkills] = useState<SkillItemType[]>([]);

    // const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getSkillList();
            setSkills(result);
            // setIsLoading(false);
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
                <div className="list">
                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">OS</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillCard topic="os" data={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Programming Languages</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillCard topic="language" data={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Infrastructure Tools</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillCard topic="tools" data={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Databases</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillCard topic="database" data={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Backend</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillCard topic="backend" data={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Frontend</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillCard topic="frontend" data={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Automation & IOT Stuff</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillCard topic="automation" data={skills} />
                        </AccordionDetails>
                    </Accordion>
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
