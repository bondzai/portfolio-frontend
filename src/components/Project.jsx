import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

const Project = ({ ...project }) => {
    const navigate = useNavigate();
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer');
    };

    const getStatusStyle = () => {
        switch (project.status) {
            case 'online':
                return {
                    backgroundColor: 'green',
                    display: 'inline-block',
                    borderRadius: '50%',
                    width: '12px',
                    height: '12px',
                    marginRight: '5px',
                    animation: 'blinking 1s infinite'
                };
            case 'offline':
                return {
                    backgroundColor: 'red',
                    display: 'inline-block',
                    borderRadius: '50%',
                    width: '12px',
                    height: '12px',
                    marginRight: '5px'
                };
            case 'inprogress':
                return {
                    backgroundColor: 'orange',
                    display: 'inline-block',
                    borderRadius: '50%',
                    width: '12px',
                    height: '12px',
                    marginRight: '5px',
                    animation: 'blinking 1s infinite'
                };
            default:
                return {};
        }
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button onClick={() => navigate("/project/" + project.id)}> Detail </button>
                    <button onClick={() => openInNewTab(project.url)}> Demo </button>
                        <div style={getStatusStyle()}> </div>
                </div>
            </div>
            <div>
                <small> {project.remark} </small>
            </div>
        </div>
    )
}

export default Project;
