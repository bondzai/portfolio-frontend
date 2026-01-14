import React from "react";
import { Empty, Tooltip } from "antd";
import {
    PlayCircleOutlined,
    MoonOutlined
} from '@ant-design/icons';
import { openInNewTab } from "../../utils/utils.js";

const Project = ({ ...project }) => {
    if (!project) return <Empty />;

    return (
        <div className="project-card">
            {/* Glass Status Badge (Top Right) */}
            {project.is_sleep && (
                <Tooltip title="Status: Sleeping (Auto-sleeps on inactivity)">
                    <div className="status-glass">
                        <MoonOutlined />
                    </div>
                </Tooltip>
            )}

            {/* Cover Image */}
            {project.image_url && (
                <div className="project-cover">
                    <img
                        alt={project.name}
                        src={project.image_url}
                        loading="lazy"
                    />
                    {/* Glass Action Button (Solid, visible on hover) */}
                    <div className="glass-btn" onClick={() => openInNewTab(project.host_url)}>
                        <PlayCircleOutlined />
                        <span>Demo</span>
                    </div>
                </div>
            )}

            <div className="project-content">
                {/* Header with Avatar and Title */}
                <div className="project-header">
                    {project.avatar && (
                        <img
                            src={project.avatar}
                            alt={`${project.name} avatar`}
                            className="project-avatar"
                        />
                    )}
                    <h3 className="project-title" title={project.name}>
                        {project.name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Project;