import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({...project}) => {
    const navigate = useNavigate();
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="projectItem">
            <div style={{backgroundImage: `url(${project.image})`}} className="bgImage" />
            <h1> {project.name} </h1>
            <button onClick={() => navigate("/project/" + project.id)}> Detail </button>
            <button onClick={() => openInNewTab(project.url)}> Demo </button>
            <div>
                <small> {project.remark} </small>
            </div>
        </div>
    )
}

export default Project;