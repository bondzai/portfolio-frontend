import React, { useState, useEffect, useMemo } from "react";
import { getProjectList, statusOptions, columns } from "../apis/ProjectList";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Project from "../components/Project";
import SpinComponent from "../components/SpinComponent";
import CustomToolbar from '../components/CustomToolbar';
import "../styles/Projects.css";

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [viewMode, setViewMode] = useState("module");
    const [projectList, setProjectList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProjectList();
            setProjectList(result);
            setLoading(false);
        };
        fetchData();
    }, []);

    const filteredProjects = useMemo(() => {
        if (loading) {
            return [];
        }
        return projectList.filter((project) => {
            const nameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
            const statusMatch = selectedStatus === "" || project.status === selectedStatus;
            return nameMatch && statusMatch;
        });
    }, [loading, projectList, searchTerm, selectedStatus]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusChange = (option) => {
        setSelectedStatus(option.props.value);
    };

    const handleViewModeChange = (selectedOption) => {
        if (selectedOption === "module") {
            setViewMode("module");
        } else if (selectedOption === "list") {
            setViewMode("list");
        }
    };

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPageCount = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="projects">
            <CustomToolbar
                selectedStatus={selectedStatus}
                handleStatusChange={handleStatusChange}
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
                viewMode={viewMode}
                handleViewModeChange={handleViewModeChange}
            />
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
                <div style={{ width: '80%' }}>
                    <Box sx={{ height: 'auto', width: '100%' }}>
                        <DataGrid
                            rows={filteredProjects}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 20,
                                    },
                                },
                            }}
                            pageSizeOptions={[15, 20]}
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
