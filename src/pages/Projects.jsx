import React, { useState, useEffect, useMemo } from "react";
import { Pagination, Stack } from "@mui/material";
import Project from "../components/Project";
import SpinLoader from "../components/loaders/SpinLoader";
import { getProjectList } from "../apis/rest/Project";
import { globalDelay, itemsPerPage } from "../utils/constants";
import useScreenDimensions, { ScreenSize } from "../hooks/useScreenDimensions";
import "./Projects.css";


const Projects = () => {
    const [projectList, setProjectList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

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

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProjects = projectList.slice(startIndex, startIndex + itemsPerPage);

    const handleChangePage = (_, newPage) => {
        setCurrentPage(newPage);
    };

    const { screenSize } = useScreenDimensions();

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
                {
                    (screenSize === ScreenSize.XS) ? (
                        projectList.map((project, index) => (
                            <Project key={index} id={index} {...project} />
                        ))
                    ) : (
                        visibleProjects.map((project, index) => (
                            <Project key={index} id={index} {...project} />
                        ))
                    )
                }
            </div>
            {
                !(screenSize === ScreenSize.XS) && (
                    <Stack spacing={2} justifyContent="center" mt={3}>
                        <Pagination
                            count={Math.ceil(projectList.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handleChangePage}
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    color: 'var(--text-color-primary)',
                                    fontWeight: 'bold'
                                }
                            }}
                        />
                    </Stack>
                )
            }
        </div>
    );
};

export default Projects;
