import React, { useState } from "react";
import Project from "../components/Project";
import { ProjectList } from "../apis/ProjectList";
import "../styles/Projects.css";
import Select from "react-select";
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

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

    console.log(viewMode)

    return (
        <div className="projects">
            <div className="searchBar">
                <div>
                    <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} />
                </div>
                <div style={{ width: '120px' }}>
                    <Select
                        options={statusOptions}
                        value={statusOptions.find(option => option.value === selectedStatus)}
                        onChange={handleStatusChange}
                    />
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
                </div>
            </div>
            {viewMode === "module" ? (
                <div className="projectList">
                    {filteredProjects.map((project, index) => (
                        <Project key={index} id={index} {...project} />
                    ))}
                </div>
            ) : (
                <div className="projectList">
                    <h1>list view</h1>
                    {/* Render the list view mode here */}
                </div>
            )}
        </div>
    );
};

export default Projects;
