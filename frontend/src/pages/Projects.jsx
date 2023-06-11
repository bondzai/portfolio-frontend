import "../styles/Projects.css";
import React, { useState, useEffect, useMemo } from "react";
import Project from "../components/Project";
import { getProjectList, statusOptions, columns } from "../apis/ProjectList";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { DataGrid } from '@mui/x-data-grid';
import { MenuItem, Select, InputAdornment, TextField, Toolbar, ToggleButton, ToggleButtonGroup, FormControl, InputLabel, Box } from '@mui/material';
import SpinComponent from "../components/SpinComponent";

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

    return (
        <div className="projects">
            <Toolbar className="projectToolbar">
                <FormControl fullWidth>
                    <InputLabel>Fitler by status</InputLabel>
                    <Select
                        label="Search by status"
                        variant="outlined"
                        value={selectedStatus}
                        onChange={(event, value) => handleStatusChange(value)}
                        sx={{ minWidth: '150px' }}
                    >
                        {statusOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    id="search-bar"
                    label="Search by name"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{ minWidth: '330px' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <ToggleButtonGroup
                                    value={viewMode}
                                    exclusive
                                    onChange={(event, value) => handleViewModeChange(value)}
                                >
                                    <ToggleButton value="module" aria-label="module">
                                        <ViewModuleIcon />
                                    </ToggleButton>
                                    <ToggleButton value="list" aria-label="list">
                                        <ViewListIcon />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </InputAdornment>
                        )
                    }}
                />
            </Toolbar>
            {loading ? (
                <div className="spin-container">
                    <SpinComponent size="large" />
                </div>
            ) : viewMode === "module" ? (
                <div className="projectList">
                    {filteredProjects.map((project, index) => (
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
        </div>
    );
    
};

export default Projects;
