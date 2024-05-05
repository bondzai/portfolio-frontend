import React from "react";
import { Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { getLampStatusStyle } from "./StatusStyles";
import { openInNewTab } from "../utils/utils.js"
import { StarFilled } from '@ant-design/icons';
import { Badge } from "antd";


const Project = ({ ...project }) => {
    const navigate = useNavigate();

    const lampStatusStyle = getLampStatusStyle(project.status);

    return (
        <div className="project-item">
            { project.is_highlight && (<Badge.Ribbon text={<StarFilled />} color="blue" />) }
            {
                project.image_url ? 
                    (<div style={{ backgroundImage: `url(${project.image_url})` }} className="bg-image" />) : 
                    (<Empty className="bg-image" />)
            }
            <h1> {project.name} </h1>
            <div className="project-item-control-panel">
                <div className="project-item-buttons">
                    <button onClick={() => navigate("/project/" + project.id)}> Detail </button>
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
