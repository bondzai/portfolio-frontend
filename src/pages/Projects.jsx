import React, { useState, useEffect } from "react";
import Project from "../components/cards/Project";
import CollectionBrowser from "../components/collection/CollectionBrowser";
import SpinLoader from "../components/loaders/SpinLoader";
import { getProjectList } from "../apis/rest/Project";
import { globalDelay } from "../utils/constants";
import "./Projects.css";

const SEARCH_KEYS = ["name", "language", "tools", "status"];
const PAGE_SIZE = 8;

// Module constants: a new array each render would re-derive the options.
const FACETS = [
    { key: "status", label: "Status", format: (value) => value.replace(/^./, (c) => c.toUpperCase()) },
    { key: "language", label: "Language" },
];

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
            <CollectionBrowser
                items={projectList}
                searchKeys={SEARCH_KEYS}
                facets={FACETS}
                pageSize={PAGE_SIZE}
                listClassName="project-list"
                searchPlaceholder="Search projects..."
                itemNoun="projects"
                emptyMessage="No projects match your search."
                renderItem={(project) => <Project key={project.id} {...project} />}
            />
        </div>
    );
};

export default Projects;
