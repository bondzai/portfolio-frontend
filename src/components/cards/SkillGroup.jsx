import React from "react";
import { openInNewTab } from "../../utils/utils.js";
import { Tooltip } from "antd";
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md"


const Skill = ({ ...skill }) => {
    return (
        <div className="skill">
            <Tooltip title={skill.name}>
                <button onClick={() => openInNewTab(skill.url)}>
                    <img
                        src={skill.image_url}
                        alt={skill.name}
                    />
                </button>
            </Tooltip>
        </div>
    );
};

const SkillGroup = ({ skills, topic }) => {
    const skillGroupByTopic = skills.filter((skill) => {
        return skill.topic === topic && skill.is_showing === true;
    });

    return (
        <div className="skill-list">
            {skillGroupByTopic.map((element, index) => (
                <Skill key={index} id={index} {...element} />
            ))}
        </div>
    );
};

const accordionStyle = {
    borderRadius: "10px",
    boxShadow: "0px 3px 15px rgba(58, 58, 58, 0.2)",
    marginBottom: "5px",
};

const SkillGroupWraper = ({ topic, skills }) => (
    <Accordion defaultExpanded style={accordionStyle}>
        <AccordionSummary expandIcon={<MdExpandMore />}>
            <Typography variant="h6">
                {topic.label}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <SkillGroup topic={topic.topic} skills={skills} />
        </AccordionDetails>
    </Accordion>
);

export default SkillGroupWraper;
