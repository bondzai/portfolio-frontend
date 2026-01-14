import React, { useState, useEffect } from "react";
import SkillGroupWraper from "../components/cards/SkillGroup";
import SpinLoader from "../components/loaders/SpinLoader";
import { getSkillList } from "../apis/rest/Skill";
import { globalDelay } from "../utils/constants";
import "./Skills.css";


const skillsData = [
    { topic: "language", label: "Languages" },
    { topic: ["frontend", "backend"], label: "Frameworks & Libraries" },
    { topic: "database", label: "Databases & Caches" },
    { topic: "commu", label: "Protocols, APIs, & Communication Technologies" },
    { topic: "os", label: "OS" },
    { topic: "tools", label: "DevOps & Infrastructures" },
    { topic: "automation", label: "Industrial Automation & IoT" },
];


const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getSkillList();
                setSkills(result);
                setIsLoading(false);
            }, globalDelay);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <SpinLoader />
        );
    }

    return (
        <div className="skills">
            <div className="list">
                {skillsData.map((topic) => (
                    <SkillGroupWraper key={topic.topic} topic={topic} skills={skills} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
