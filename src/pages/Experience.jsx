import React, { useState, useMemo, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { BiSort } from "react-icons/bi";
import { Avatar, Tooltip } from "antd";
import SpinLoader from "../components/loaders/SpinLoader";
import { getExperienceList } from "../apis/rest/Experience";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

// Helper to format "Key: Value" strings
const formatKeyValue = (text) => {
    const parts = text.split(':');
    if (parts.length < 2) return text;

    const [key, ...rest] = parts;
    const val = rest.join(':');

    return (
        <span>
            <strong style={{ color: '#fff' }}>{key}</strong>:{val}
        </span>
    );
};

// Parse content into structured elements (bullets vs text)
const parseContent = (text) => {
    if (!text) return null;

    const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
    const blocks = [];
    let currentBulletList = [];

    for (const line of lines) {
        if (line.startsWith('-')) {
            currentBulletList.push(line.substring(1).trim());
            continue;
        }

        if (currentBulletList.length > 0) {
            blocks.push({ type: 'list', items: [...currentBulletList] });
            currentBulletList = [];
        }

        blocks.push({ type: 'text', content: line });
    }

    if (currentBulletList.length > 0) {
        blocks.push({ type: 'list', items: currentBulletList });
    }

    return blocks.map((block, index) => {
        if (block.type === 'list') {
            return (
                <ul key={`list-${index}`} className="experience-bullet-list">
                    {block.items.map((item, i) => (
                        <li key={i}>{formatKeyValue(item)}</li>
                    ))}
                </ul>
            );
        }

        return (
            <div key={`text-${index}`} className="experience-text-line">
                {formatKeyValue(block.content)}
            </div>
        );
    });
};

const TimelineElement = ({ date, icon, title, content, avatarSrc }) => (
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

    const timelineElements = useMemo(() => {
        const elements = timelineElementsData.map((element, index) => (
            <TimelineElement
                key={index}
                date={element.date}
                icon={element.icon}
                title={element.title}
                content={element.content}
                avatarSrc={element.avatarSrc}
            />
        ));
        return reverseOrder ? elements.reverse() : elements;
    }, [reverseOrder, timelineElementsData]);

    if (isLoading) return <SpinLoader />;

    return (
        <div className="experience">
            <Tooltip title="Click to forward/reverse timeline." placement="left">
                <button onClick={() => setReverseOrder(!reverseOrder)} className="icon">
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
