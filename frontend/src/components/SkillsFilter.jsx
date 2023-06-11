import React from "react";
import Skill from "./Skill";
import "../styles/Skills.css";

const SkillsFilter = ({ skills, topic }) => {
    const skillsTopicFilter = skills.filter((skill) => {
        return skill.topic === topic && skill.is_showing === true;
    });

    return (
        <div className="skill-list">
            {skillsTopicFilter.map((item, index) => (
                <Skill key={index} id={index} {...item} />
            ))}
        </div>
    );
};

export default SkillsFilter;
