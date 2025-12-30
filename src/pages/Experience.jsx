import React, { useState, useMemo, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { BiSort } from "react-icons/bi";
import { Avatar, Tooltip } from "antd";
import SpinLoader from "../components/loaders/SpinLoader";
import { getExperienceList } from "../apis/rest/Experience";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";


const TimelineElement = ({ date, icon, title, content, avatarSrc, avatarBorderColor }) => {
    const formatKeyValue = (text) => {
        const parts = text.split(':');
        if (parts.length === 2) {
            return (
                <React.Fragment>
                    <strong>{parts[0]}</strong>:{parts[1]}
                </React.Fragment>
            );
        } else {
            return text;
        }
    };

    const formattedContent = content.split('\n').map((item, index) => (
        <React.Fragment key={index}>
            {formatKeyValue(item)}
            <br />
        </React.Fragment>
    ));

    return (
        <VerticalTimelineElement
            className="vertical-timeline-elemt--education"
            date={date}
            icon={icon}
            iconClassName="timeline-icon"
        >
            <div className="timeline-element-header">
                {avatarSrc && <Avatar size={30} className="timeline-avatar" src={avatarSrc} />}
                &nbsp;
                <h3 className="vertical-timeline-element-title">{title}</h3>
            </div>
            <p>{formattedContent}</p>
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
