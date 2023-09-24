import React, { useState, useEffect, useMemo } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Pagination, Stack } from '@mui/material';
import Lab from "../components/Lab";
import CustomToolbar from '../components/CustomToolbar';
import { getProjectList } from "../apis/rest/endpoints";

import { LabType } from "../types";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'language', headerName: 'Language', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
];

import "../styles/Projects.css";

const Labs: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [viewMode, setViewMode] = useState("module");
    const [projectList, setProjectList] = useState<LabType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const result: LabType[] = await getProjectList();
            setProjectList(result);
        };
        fetchData();
    }, []);

    const filteredProjects = useMemo(() => {
        return projectList.filter(project => {
            const nameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
            const statusMatch = !selectedStatus || project.status === selectedStatus;
            return nameMatch && statusMatch;
        });
    }, [projectList, searchTerm, selectedStatus]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusChange = (value: string) => {
        setSelectedStatus(value);
    };
    
    const handleViewModeChange = (selectedOption: string) => {
        setViewMode(selectedOption);
    };

    const itemsPerPage = 6;
    const totalPageCount = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

    const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
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
            {viewMode === "module" ? (
                <div className="projectList">
                    {visibleProjects.map((project, index) => (
                        <Lab key={index} data={project} />
                    ))}
                </div>
            ) : (
                <div style={{ width: '80%' }}>
                    <Box sx={{ height: 'auto', width: '100%' }}>
                        <DataGrid
                            rows={filteredProjects}
                            columns={columns}
                            initialState={{
                                pagination: { paginationModel: { pageSize: 10 } }
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

export default Labs;
