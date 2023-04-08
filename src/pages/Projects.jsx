import React from "react";
import Project from "../components/Project";
import { ProjectList } from "../apis/ProjectList";
import "../styles/Projects.css";

const Projects = () => {
    return (
        <div className="projects">
            <h1> P R O J E C T S </h1>
            <div className="projectList">
                {ProjectList.map((project, index) => {
                    return <Project key={index} id={index} {...project} />
                })}
            </div>
        </div>
    );
};

export default Projects;