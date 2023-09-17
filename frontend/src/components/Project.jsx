import React from 'react';

import { Empty } from 'antd';

import { useNavigate } from 'react-router-dom';

import { AiFillStar } from 'react-icons/ai';

import { getLampStatusStyle } from './LampStatus';
import { getHighlightStatusStyle } from './HighlightStatus';

import { openInNewTab } from "../utils/utils.js"

const Project = ({ ...project }) => {
    const navigate = useNavigate();

    const lampStatusStyle = getLampStatusStyle(project.status);
    const highlightStatusStyle = getHighlightStatusStyle(project.is_highlight);

    return (
        <div className="projectItem" style={{ position: 'relative' }}>
            {project.is_highlight && (
                <div className="highlightIcon" style={highlightStatusStyle}>
                    <AiFillStar size={30} />
                </div>
            )}
            {
                project.image_url ? (<div style={{ backgroundImage: `url(${project.image_url})` }} className="bgImage" />) : (<Empty className="bgImage" />)
            }
            <h1> {project.name} </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button onClick={() => navigate('/project/' + project.id)}> Detail </button>
                    <button onClick={() => openInNewTab(project.host_url)}> Demo </button>
                    <div style={lampStatusStyle} />
                </div>
            </div>
            <div>
                <small>
                    { project.is_sleep && <> *Automatically sleep after after a period of inactivity. </> }
                </small>
            </div>
        </div>
    );
};

export default Project;
