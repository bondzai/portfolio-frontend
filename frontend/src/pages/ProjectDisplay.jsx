import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectList } from "../apis/ProjectList";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
    const { id } = useParams();
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProjectList();
            setProjectList(result);
        };
        fetchData();
    }, []);

    let project = {};

    for (const i in projectList) {
        if (projectList[i].id == id) {
            project = projectList[i];
        }
    }

    return (
        <div className="project">
            {project && (
                <>
                    <img src={project.image_url} alt={project.name} />
                    <ul>
                        <li>
                            <p>
                                <b> Language: </b> {project.language}
                            </p>
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default ProjectDisplay;
