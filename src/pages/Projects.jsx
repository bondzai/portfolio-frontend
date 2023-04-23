import React, { useState } from "react";
import Project from "../components/Project";
import { ProjectList } from "../apis/ProjectList";
import "../styles/Projects.css";
import Select from "react-select";
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { MenuItem } from '@mui/material';

const statusOptions = [
    { value: "", label: "Status" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "inprogress", label: "In progress" }
];

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [viewMode, setViewMode] = useState("module");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusChange = (option) => {
        setSelectedStatus(option.value);
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
            <Toolbar>
                <TextField
                    id="search-bar"
                    label="Search by name"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
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
                <Select
                    id="status-select"
                    options={statusOptions}
                    value={statusOptions.find(option => option.value === selectedStatus)}
                    onChange={handleStatusChange}
                    sx={{ marginLeft: "auto", minWidth: "120px" }}
                >
                    {statusOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </Toolbar>
            {viewMode === "module" ? (
                <div className="projectList">
                    {filteredProjects.map((project, index) => (
                        <Project key={index} id={index} {...project} />
                    ))}
                </div>
            ) : (
                <div className="projectList">
                    <h1> test </h1>
                    {/* Render the list view mode here */}
                </div>
            )}
        </div>
    );
};

export default Projects;
