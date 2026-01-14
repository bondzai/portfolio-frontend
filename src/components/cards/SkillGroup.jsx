import React from "react";
import { openInNewTab } from "../../utils/utils.js";
import { Tooltip } from "antd";

const Skill = ({ ...skill }) => {
    return (
        <div className="skill">
            <Tooltip title={skill.name}>
                <button
                    onClick={() => openInNewTab(skill.url)}
                    onMouseDown={(e) => e.stopPropagation()}
                >
                    {skill.image_url && (
                        <img
                            src={skill.image_url}
                            alt={skill.name}
                        />
                    )}
                    <span className="skill-name">{skill.name}</span>
                </button>
            </Tooltip>
        </div>
    );
};

const SkillGroup = ({ skills, topic }) => {
    const skillGroupByTopic = skills.filter((skill) => {
        if (Array.isArray(topic)) {
            return topic.includes(skill.topic) && skill.is_showing === true;
        }
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

const SkillGroupWraper = ({ topic, skills }) => {
    return (
        <div className="glass-panel">
            <div
                className="accordion-header"
            >
                {topic.icon && <span className="accordion-icon-container">{topic.icon}</span>}
                <h6 className="accordion-title">
                    {topic.label}
                </h6>
            </div>
            <div
                className="accordion-content expanded"
            >
                <div className="accordion-inner">
                    <SkillGroup topic={topic.topic} skills={skills} />
                </div>
            </div>
        </div>
    );
};

export default SkillGroupWraper;
