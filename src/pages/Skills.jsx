import React from "react";
import SkillsFilter from "../components/SkillsFilter";
import "../styles/Home.css";

const Skills = () => {
    return (
        <div className="home">
            <div className="skills">  
                <ol className="list">
                    <li> <b> Programming Languages </b> <SkillsFilter topic = "language"/> </li>
                    <li> <b> Frontend </b> <SkillsFilter topic = "frontend"/> </li>
                    <li> <b> Backend </b> <SkillsFilter topic = "backend"/> </li>
                    <li> <b> Databases </b> <SkillsFilter topic = "database"/> </li>
                    <li> <b> DevOps & Other Tools </b> <SkillsFilter topic = "tools"/> </li>
                    <li> <b> OS </b> <SkillsFilter topic = "os"/> </li>
                    <li> <b> Automation & IOT Stuff </b> <SkillsFilter topic = "automation"/> </li>
                </ol>
            </div>
        </div>
    )
}

export default Skills;