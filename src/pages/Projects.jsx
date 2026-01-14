import React, { useState, useEffect, useMemo } from "react";
import Project from "../components/cards/Project";
import SpinLoader from "../components/loaders/SpinLoader";
import { getProjectList } from "../apis/rest/Project";
import { globalDelay } from "../utils/constants";
import "./Projects.css";


const Projects = () => {
    const [projectList, setProjectList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getProjectList();
                setProjectList(result);
                setIsLoading(false);
            }, globalDelay);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="spin-container">
                <SpinLoader size="large" />
            </div>
        );
    }

    return (
        <div className="projects">
            <div className="project-list">
                {
                    projectList.map((project, index) => (
                        <Project key={index} id={index} {...project} />
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;
