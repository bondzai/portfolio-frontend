import React, { useState, useEffect, useMemo } from "react";
import { Pagination, Stack } from "@mui/material";
import Project from "../components/Project";
import SpinLoader from "../components/loaders/SpinLoader";
import { getProjectList } from "../apis/rest/Project";
import { globalDelay, itemsPerPage } from "../utils/constants";
import "../styles/Projects.css";

const Projects = () => {
    const [projectList, setProjectList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const maxWidth = 850
    const [isMobile, setIsMobile] = useState(window.innerWidth < maxWidth);

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

    const totalPageCount = Math.ceil(projectList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProjects = projectList.slice(startIndex, startIndex + itemsPerPage);

    const handleChangePage = (_, newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < maxWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
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
            <div className="projectList">
                {isMobile ? (
                    projectList.map((project, index) => (
                        <Project key={index} id={index} {...project} />
                    ))
                ) : (
                    visibleProjects.map((project, index) => (
                        <Project key={index} id={index} {...project} />
                    ))
                )}
            </div>
            {!isMobile && (
                <Stack spacing={2} justifyContent="center" mt={3}>
                    <Pagination
                        count={totalPageCount}
                        page={currentPage}
                        onChange={handleChangePage}
                    />
                </Stack>
            )}
        </div>
    );
};

export default Projects;
