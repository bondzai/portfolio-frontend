import React from "react";
import { Tooltip } from "antd";
import { openInNewTab } from "../utils/utils";
import "../styles/Skills.css";

interface Skill {
    name: string;
    url: string;
    image_url: string;
    topic: string;
    is_showing: boolean;
}

interface Props {
    skills: Skill[];
    topic: string;
}

const SkillsFilter: React.FC<Props> = ({ skills, topic }) => {
    const skillsTopicFilter = skills.filter((skill) => {
        return skill.topic === topic && skill.is_showing === true;
    });

    return (
        <div className="skill-list">
            {skillsTopicFilter.map((item, index) => (
                <div className="skill" key={index}>
                    <Tooltip title={item.name}>
                        <button onClick={() => openInNewTab(item.url)}>
                            <img
                                src={item.image_url}
                                alt={item.name}
                                style={{ width: "50px", height: "auto" }}
                            />
                        </button>
                    </Tooltip>
                </div>
            ))}
        </div>
    );
};

export default SkillsFilter;
