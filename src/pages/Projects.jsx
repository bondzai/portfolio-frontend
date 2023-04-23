import "../styles/Projects.css";
import React, { useState } from "react";
import Project from "../components/Project";
import { ProjectList } from "../apis/ProjectList";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { DataGrid } from '@mui/x-data-grid';
import { MenuItem, Select, InputAdornment, TextField, Toolbar, ToggleButton, ToggleButtonGroup, FormControl, InputLabel, Box } from '@mui/material';

const statusOptions = [
    { value: "", label: "all" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "inprogress", label: "In progress" }
];

const columns = [
    { field: 'id', headerName: 'id', width: 90 },
    {
        field: 'name',
        headerName: 'name',
        width: 300,
    },
    {
        field: 'language',
        headerName: 'language',
        width: 200,
    },
    {
        field: 'status',
        headerName: 'status',
        width: 150,
    },
];


const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [viewMode, setViewMode] = useState("module");

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

    const filteredProjects = ProjectList.filter((project) => {
        const nameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
        const statusMatch = selectedStatus === "" || project.status === selectedStatus;
        return nameMatch && statusMatch;
    });

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
            {viewMode === "module" ? (
                <div className="projectList">
                    {filteredProjects.map((project, index) => (
                        <Project key={index} id={index} {...project} />
                    ))}
                </div>
            ) : (
                <div style={{width: '80%'}}>
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
