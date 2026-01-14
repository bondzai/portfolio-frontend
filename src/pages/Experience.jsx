import React, { useState, useMemo, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { BiSort } from "react-icons/bi";
import { Avatar, Tooltip } from "antd";
import SpinLoader from "../components/loaders/SpinLoader";
import { getExperienceList } from "../apis/rest/Experience";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";


const TimelineElement = ({ date, icon, title, content, avatarSrc, avatarBorderColor }) => {
    // Helper to format "Key: Value" strings
    const formatKeyValue = (text) => {
        const parts = text.split(':');
        if (parts.length >= 2) {
            // Ensure we join the rest in case there are multiple colons
            const key = parts[0];
            const val = parts.slice(1).join(':');
            return (
                <span>
                    <strong style={{ color: '#fff' }}>{key}</strong>:{val}
                </span>
            );
        }
        return text;
    };

    // Parse content into structured elements (bullets vs text)
    const parseContent = (text) => {
        const lines = text.split('\n');
        const elements = [];
        let currentBulletList = [];

        lines.forEach((line, index) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return; // Skip empty lines

            if (trimmedLine.startsWith('-')) {
                // Remove the dash and add to current list
                currentBulletList.push(trimmedLine.substring(1).trim());
            } else {
                // If we have a list building up, push it now
                if (currentBulletList.length > 0) {
                    elements.push(
                        <ul key={`list-${index}`} className="experience-bullet-list">
                            {currentBulletList.map((item, i) => (
                                <li key={i}>{formatKeyValue(item)}</li>
                            ))}
                        </ul>
                    );
                    currentBulletList = [];
                }
                // Push the regular text line
                elements.push(
                    <div key={`text-${index}`} className="experience-text-line">
                        {formatKeyValue(trimmedLine)}
                    </div>
                );
            }
        });

        // Flush any remaining bullets at the end
        if (currentBulletList.length > 0) {
            elements.push(
                <ul key="list-end" className="experience-bullet-list">
                    {currentBulletList.map((item, i) => (
                        <li key={i}>{formatKeyValue(item)}</li>
                    ))}
                </ul>
            );
        }

        return elements;
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
            date={date}
            icon={icon}
            iconClassName="timeline-icon"
        >
            <div className="timeline-element-header">
                {avatarSrc && <Avatar size={30} className="timeline-avatar" src={avatarSrc} />}
                &nbsp;
                <h3 className="vertical-timeline-element-title">{title}</h3>
            </div>
            <div className="vertical-timeline-element-content-body">
                {parseContent(content)}
            </div>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const [reverseOrder, setReverseOrder] = useState(false);

    const [timelineElementsData, setTimelineElementsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getExperienceList();
            setTimelineElementsData(result);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    // Memoized timeline elements
    const timelineElements = useMemo(() => {
        const elements = timelineElementsData.map((element, index) => (
            <TimelineElement
                key={index}
                date={element.date}
                icon={element.icon}
                title={element.title}
                content={element.content}
                avatarSrc={element.avatarSrc}
                avatarBorderColor={element.avatarBorderColor}
            />
        ));
        return reverseOrder ? elements.reverse() : elements;
    }, [reverseOrder, timelineElementsData]);

    if (isLoading) return <SpinLoader />;

    const toggleOrder = () => {
        setReverseOrder(!reverseOrder);
    };

    return (
        <div className="experience">
            <Tooltip title="Click to forward/reverse timeline." placement="left">
                <button onClick={toggleOrder} className="icon">
                    <BiSort />
                </button>
            </Tooltip>
            <VerticalTimeline>
                {timelineElements}
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
