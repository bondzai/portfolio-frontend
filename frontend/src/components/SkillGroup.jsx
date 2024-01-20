import React from "react";
import Skill from "./Skill";
import "../styles/Skills.css";

const SkillGroup = ({ skills, topic }) => {
    const skillGroupByTopic = skills.filter((skill) => {
        return skill.topic === topic && skill.is_showing === true;
    });

    return (
        <div className="skill-list">
            {skillGroupByTopic.map((item, index) => (
                <Skill key={index} id={index} {...item} />
            ))}
        </div>
    );
};

export default SkillGroup;
