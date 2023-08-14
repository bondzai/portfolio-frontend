import React, { useState, useEffect } from "react";

import SkillsFilter from "../components/SkillsFilter";
import SpinComponent from "../components/SpinComponent";
import { getSkillList } from "../apis/SkillList";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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

    const [showScrollButton, setShowScrollButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
                            <b>Infrastructure Tools</b>
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
            <KeyboardArrowUpIcon
                className={`scroll-button ${showScrollButton ? "visible" : ""}`}
                onClick={scrollToTop}
            >
            </KeyboardArrowUpIcon>
        </div>
    );
};

export default Skills;
