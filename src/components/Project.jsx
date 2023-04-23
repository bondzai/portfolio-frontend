import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

const Project = ({ ...project }) => {
    const navigate = useNavigate();
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="projectItem" style={{ position: "relative" }}>
            {project.is_highlight && (
                <div className="highlightIcon"
                    style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        color: "greenyellow",
                    }}>
                    <AiFillStar size={30} />
                </div>
            )}
            <div style={{ backgroundImage: `url(${project.image})` }} className="bgImage" />
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
