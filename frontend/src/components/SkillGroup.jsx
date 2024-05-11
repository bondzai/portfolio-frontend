import React from "react";
import { openInNewTab } from "../utils/utils.js";
import { Tooltip } from "antd";


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

export default SkillGroup;
