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
            console.log(result)
            setProjectList(result);
        };
        fetchData();
    }, []);

    const project = projectList[Number(id) - 1];

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
