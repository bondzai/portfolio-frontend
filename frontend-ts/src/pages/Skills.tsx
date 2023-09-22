import { useState, useEffect } from "react";

import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";

import { MdExpandMore } from "react-icons/md"

import SkillsFilter from "../components/SkillsFilter";
import ScrollButton from "../components/buttons/ScrollButon";
// import SpinComponent from "../components/SpinComponent";

import useScroll from "../hooks/useScroll";

import { getSkillList } from "../apis/rest/endpoints";

import "../styles/Home.css";

const Skills = () => {
    const { showScrollButton, scrollToTop, scrollToBottom } = useScroll();

    const [skills, setSkills] = useState<any[]>([]); // Replace 'any[]' with the actual type of your skills data if known

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
                            <SkillsFilter topic="os" skills={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Programming Languages</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillsFilter topic="language" skills={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Infrastructure Tools</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillsFilter topic="tools" skills={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Databases</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillsFilter topic="database" skills={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Backend</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillsFilter topic="backend" skills={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Frontend</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillsFilter topic="frontend" skills={skills} />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded style={accordionStyle}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                            <Typography variant="h6">Automation & IOT Stuff</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillsFilter topic="automation" skills={skills} />
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
