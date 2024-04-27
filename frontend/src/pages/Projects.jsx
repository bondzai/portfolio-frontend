import React, { useState, useEffect, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Pagination, Stack } from "@mui/material";
import Project from "../components/Project";
import SpinComponent from "../components/loaders/SpinComponent";
import { getProjectList, columns } from "../apis/rest/Project";
import { globalDelay } from "../utils/constants";
import "../styles/Projects.css";

const Projects = () => {
    const [projectList, setProjectList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getProjectList();
                setProjectList(result);
                setLoading(false);
            }, globalDelay);
        };
        fetchData();
    }, []);

    const filteredProjects = useMemo(() => {
        if (loading) {
            return [];
        }
        return projectList
    }, [loading, projectList]);

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPageCount = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="projects">
            {loading ? (
                <div className="spin-container">
                    <SpinComponent size="large" />
                </div>
            ) : viewMode === "module" ? (
                <div className="projectList">
                    {visibleProjects.map((project, index) => (
                        <Project key={index} id={index} {...project} />
                    ))}
                </div>
            ) : (
                <div style={{ width: "80%" }}>
                    <Box sx={{ height: "auto", width: "100%" }}>
                        <DataGrid
                            rows={filteredProjects}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10,
                                    },
                                },
                            }}
                            pageSizeOptions={[5, 10, 15]}
                            disableRowSelectionOnClick
                        />
                    </Box>
                </div>
            )}
            {viewMode === "module" && (
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
