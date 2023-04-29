import React, { useState, useEffect } from "react";
import Skill from "./Skill";
import { SkillList } from "../apis/SkillList";
import "../styles/Skills.css";

const SkillsFilter = ({ topic }) => {
    const [shouldAnimate, setShouldAnimate] = useState([]);

    useEffect(() => {
        const timers = skillsTopicFilter.map((item, index) => {
            return setTimeout(() => {
                triggerAnimation(index);
            }, index * 250);
        });

        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    const skillsTopicFilter = SkillList.filter((skill) => {
        return skill.topic === topic;
    });

    const triggerAnimation = (index) => {
        setShouldAnimate((prev) => [...prev, index]);
    };

    return (
        <div className="skill-list">
            {skillsTopicFilter.map((item, index) => {
                const animate = shouldAnimate.includes(index);
                return (
                    <div
                        key={index}
                        className={`skill-item ${animate ? "animate" : ""}`}
                        onAnimationEnd={() =>
                            setShouldAnimate((prev) => prev.filter((i) => i !== index))
                        }
                    >
                        <Skill id={index} {...item} />
                    </div>
                );
            })}
        </div>
    );
};

export default SkillsFilter;
