import React from "react";
import { Tooltip } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { openInNewTab } from "../../utils/utils.js";
import "./HeroCard.css";

export const HeroCard = ({ avatar, title, repoUrl, url, description }) => {
    return (
        <div className="hero-card">
            <div className="hero-header">
                <img src={avatar} alt={title} className="hero-avatar" />
                <div className="hero-info">
                    <div className="hero-title">{title}</div>
                    <div className="hero-desc">{description}</div>
                </div>
            </div>

            <div className="hero-actions">
                {repoUrl && (
                    <Tooltip title="GitHub">
                        <div className="hero-btn" onClick={() => openInNewTab(repoUrl)}>
                            <GithubOutlined />
                        </div>
                    </Tooltip>
                )}
                {url && (
                    <Tooltip title="Website">
                        <div className="hero-btn" onClick={() => openInNewTab(url)}>
                            <LinkOutlined />
                        </div>
                    </Tooltip>
                )}
            </div>
        </div>
    )
}
