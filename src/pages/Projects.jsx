import React, { useState } from "react";
import Project from "../components/Project";
import { ProjectList } from "../apis/ProjectList";
import "../styles/Projects.css";

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusFilterChange = (event) => {
        setStatusFilter(event.target.value);
    };

    const filteredProjects = ProjectList.filter((project) => {
        const nameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
        const statusMatch = project.status.toLowerCase().includes(statusFilter.toLowerCase());
        return nameMatch && statusMatch;
    });

    return (
        <div className="projects">
            <div className="searchBar">
                <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} />
                <select value={statusFilter} onChange={handleStatusFilterChange}>
                    <option value="">Filter by status</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="inprogress">In progress</option>
                </select>
            </div>
            <div className="projectList">
                {filteredProjects.map((project, index) => {
                    return <Project key={index} id={index} {...project} />;
                })}
            </div>
        </div>
    );
};

export default Projects;
