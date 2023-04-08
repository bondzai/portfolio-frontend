import { React } from "react";
import Skill from "./Skill";
import { SkillList } from "../apis/SkillList";
import "../styles/Skills.css";

const SkillsFilter = ({topic}) => {
    const skillsTopicFilter = SkillList.filter((skill)=> { 
        return skill.topic === topic; 
    });
    return (
        <div className="skill-list">
            {skillsTopicFilter.map((item, index) => {
                return <Skill key={index} id={index} {...item}/>
            })}
        </div>
    );
};

export default SkillsFilter;