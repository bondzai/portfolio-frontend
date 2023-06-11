import React, { useState, useEffect } from "react";
import SkillsFilter from "../components/SkillsFilter";
import { getSkillList } from "../apis/SkillList";
import SpinComponent from "../components/SpinComponent";
import "../styles/Home.css";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSkillList();
            setSkills(result);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="home">
            <div className="skills">
                {isLoading ? (<SpinComponent />) : (
                    <ol className="list">
                        <li>
                            <b>OS</b>
                            <SkillsFilter topic="os" skills={skills} />
                        </li>
                        <li>
                            <b>Programming Languages</b>
                            <SkillsFilter topic="language" skills={skills} />
                        </li>
                        <li>
                            <b>DevSecOps</b>
                            <SkillsFilter topic="tools" skills={skills} />
                        </li>
                        <li>
                            <b>Databases</b>
                            <SkillsFilter topic="database" skills={skills} />
                        </li>
                        <li>
                            <b>Backend</b>
                            <SkillsFilter topic="backend" skills={skills} />
                        </li>
                        <li>
                            <b>Frontend</b>
                            <SkillsFilter topic="frontend" skills={skills} />
                        </li>
                        <li>
                            <b>Automation & IOT Stuff</b>
                            <SkillsFilter topic="automation" skills={skills} />
                        </li>
                    </ol>
                )}
            </div>
        </div>
    );
};

export default Skills;
