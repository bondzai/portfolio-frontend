import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../apis/ProjectList";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className="project">
            <img src={project.image} alt ={project.name}/>
            <ul>
                <li>
                    <p> <b> Description: </b> {project.description} </p>
                </li>
                <li>
                    <p> <b> Language: </b> {project.language} </p>
                </li>
                <li>
                    <p> <b> Tools: </b> {project.tools} </p>
                </li>
                <li>
                    <p> <b> Note to self: </b> {project.note} </p>
                </li>
            </ul>
        </div>
    )
}

export default ProjectDisplay;