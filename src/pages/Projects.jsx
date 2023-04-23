import React, { useState } from "react";
import Project from "../components/Project";
import { ProjectList } from "../apis/ProjectList";
import "../styles/Projects.css";
import Select from "react-select";

const statusOptions = [
    { value: "", label: "Status" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "inprogress", label: "In progress" }
];

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusChange = (option) => {
        setSelectedStatus(option.value);
    };

    const filteredProjects = ProjectList.filter((project) => {
        const nameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
        const statusMatch = selectedStatus === "" || project.status === selectedStatus;
        return nameMatch && statusMatch;
    });

    return (
        <div className="projects">
            <div className="searchBar">
                <div>
                    <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} />
                </div>
                <div style={{ width: '120px'}}>
                    <Select
                        options={statusOptions}
                        value={statusOptions.find(option => option.value === selectedStatus)}
                        onChange={handleStatusChange}
                    />
                </div>
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
