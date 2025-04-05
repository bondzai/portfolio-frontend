import React, { useState, useEffect } from "react";
import SkillGroupWraper from "../components/cards/SkillGroup";
import SpinLoader from "../components/loaders/SpinLoader";
import { getSkillList } from "../apis/rest/Skill";
import { globalDelay } from "../utils/constants";
import "./Skills.css";


const skillsData = [
    { topic: "os", label: "OS" },
    { topic: "language", label: "Programming Languages" },
    { topic: "frontend", label: "Frontend" },
    { topic: "backend", label: "Backend" },
    { topic: "database", label: "Databases & Caches" },
    { topic: "commu", label: "Communication Technology & protocols" },
    { topic: "tools", label: "Infra & More" },
    { topic: "automation", label: "Industrial automation & IoT" },
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
