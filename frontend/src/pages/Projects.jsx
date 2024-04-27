import React, { useState, useEffect, useMemo } from "react";
import { Pagination, Stack } from "@mui/material";
import Project from "../components/Project";
import SpinComponent from "../components/loaders/SpinComponent";
import { getProjectList } from "../apis/rest/Project";
import { globalDelay, itemsPerPage } from "../utils/constants";
import "../styles/Projects.css";

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

    const filteredProjects = useMemo(() => {
        if (isLoading) {
            return [];
        }
        return projectList
    }, [isLoading, projectList]);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPageCount = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

    const handleChangePage = (_, newPage) => {
        setCurrentPage(newPage);
    };

    if (isLoading) {
        return (
            <div className="spin-container">
                <SpinComponent size="large" />
            </div>
        )
    }

    return (
        <div className="projects">
            <div className="projectList">
                {visibleProjects.map((project, index) => (
                    <Project key={index} id={index} {...project} />
                ))}
            </div>
            <Stack spacing={2} justifyContent="center" mt={3}>
                <Pagination
                    count={totalPageCount}
                    page={currentPage}
                    onChange={handleChangePage}
                />
            </Stack>
        </div>
    );

};

export default Projects;
