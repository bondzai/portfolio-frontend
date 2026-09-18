import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { openInNewTab } from "../../utils/utils.js";
import { Tooltip } from "antd";

const Skill = ({ ...skill }) => {
    return (
        <div className="skill">
            <Tooltip title={skill.name}>
                <button
                    onClick={() => openInNewTab(skill.url)}
                    onMouseDown={(e) => e.stopPropagation()}
                >
                    {skill.image_url && (
                        <img
                            src={skill.image_url}
                            alt={skill.name}
                        />
                    )}
                    <span className="skill-name">{skill.name}</span>
                </button>
            </Tooltip>
        </div>
    );
};

const SkillGroup = ({ skills, topic }) => {
    const skillGroupByTopic = skills.filter((skill) => {
        if (Array.isArray(topic)) {
            return topic.includes(skill.topic) && skill.is_showing === true;
        }
        return skill.topic === topic && skill.is_showing === true;
    });

    return (
        <div className="skill-list">
            {skillGroupByTopic.map((element, index) => (
                <Skill key={index} id={index} {...element} />
            ))}
        </div>
    );
};

const SkillGroupWraper = ({ topic, skills, onMeasure }) => {
    const headerRef = useRef(null);
    const innerRef = useRef(null);

    // Report the panel's natural height so the grid cell can be sized to fit it,
    // otherwise the panel border cuts through the last row of skills.
    const measure = useCallback(() => {
        const header = headerRef.current;
        const inner = innerRef.current;
        if (!onMeasure || !header || !inner) return;
        // +2 for the panel's own top/bottom border
        onMeasure(topic.i, header.offsetHeight + inner.offsetHeight + 2);
    }, [onMeasure, topic.i]);

    useLayoutEffect(measure, [measure, skills]);

    useEffect(() => {
        if (typeof ResizeObserver === "undefined") return undefined;
        const observer = new ResizeObserver(measure);
        if (headerRef.current) observer.observe(headerRef.current);
        if (innerRef.current) observer.observe(innerRef.current);
        return () => observer.disconnect();
    }, [measure]);

    return (
        <div className="glass-panel">
            <div
                className="accordion-header"
                ref={headerRef}
            >
                {topic.icon && <span className="accordion-icon-container">{topic.icon}</span>}
                <h6 className="accordion-title">
                    {topic.label}
                </h6>
            </div>
            <div
                className="accordion-content expanded"
            >
                <div className="accordion-inner" ref={innerRef}>
                    <SkillGroup topic={topic.topic} skills={skills} />
                </div>
            </div>
        </div>
    );
};

export default SkillGroupWraper;
