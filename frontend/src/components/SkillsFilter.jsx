import { React, useState, useEffect } from "react";
import Skill from "./Skill";
import { getSkillList } from "../apis/SkillList";
import "../styles/Skills.css";

const SkillsFilter = ({topic}) => {
    const [skillList, setSkillList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSkillList();
            setSkillList(result);
        };
        fetchData();
    }, []);

    const skillsTopicFilter = skillList.filter((skill)=> { 
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