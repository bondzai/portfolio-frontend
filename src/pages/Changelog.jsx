import React from 'react';
import { Typography, Timeline, Card, Tag, Divider, Tooltip } from 'antd';
import {
    RocketOutlined, BugOutlined, CheckCircleOutlined,
    StarFilled, SafetyCertificateFilled, ExperimentFilled,
    CodeFilled, LayoutFilled, ThunderboltFilled
} from '@ant-design/icons';
import './Changelog.css';

const { Title, Text, Paragraph } = Typography;

const changelogData = [
    {
        version: "2.2.1",
        date: "2026-01-24",
        title: "Stability & Rendering Fixes",
        tags: ["fix", "dependencies"],
        color: "orange",
        details: [
            "Fix: Markdown table rendering (Added GFM support).",
            "Fix: Resolve peer dependency conflicts (react-scripts vs Vite).",
            "Fix: Correct Esbuild binary for macOS (yarn/npm mismatch).",
        ]
    },
    {
        version: "2.2.0",
        date: "2026-01-19",
        title: "Research & Development Shelf",
        tags: ["feature", "branding"],
        color: "cyan",
        details: [
            "Feature: New Research & Development Whitepapers.",
            "Fix: Minor UI adjustments.",
            "Improve: Enhanced system performance.",
            "Refactor: Refactor constants format."
        ]
    },
    {
        version: "2.1.0",
        date: "2026-01-18",
        title: "Feedback System & Standardization",
        tags: ["feature", "security"],
        color: "blue",
        details: [
            "New Feature: Feedback System.",
            "Security: Added Google Auth protection for feedback submission.",
            "Security: Implemented 24-hour mandatory session timeout.",
            "UX: Added explicit Logout functionality in Feedback Modal.",
            "Dev: Standardized all localStorage keys to snake_case.",
            "Dev: Implemented graceful error handling for missing configuration."
        ]
    },
    {
        version: "2.0.5",
        date: "2025-01-14",
        title: "Immersive Environments",
        tags: ["feature", "ui"],
        color: "purple",
        details: [
            "Feature: Dynamic Background Effects (Matrix, Starfield, Snow, Moonlight).",
            "UI: Enhanced System Settings for appearance customization.",
            "UI: Added responsive modal sizing for better mobile experience."
        ]
    },
    {
        version: "2.0.0",
        date: "2025-01-01",
        title: "Portfolio OS Refactor",
        tags: ["major", "rewrite"],
        color: "green",
        details: [
            "Major: Complete rewrite of the frontend architecture.",
            "Feature: Implemented new OS-like window management system.",
            "Dev: Added global state management for popups and system settings.",
            "Feature: Integrated Tour guide for new users."
        ]
    }
];

const getDetailIcon = (text) => {
    const lower = text.toLowerCase();
    if (lower.startsWith("new feature") || lower.startsWith("feature"))
        return { icon: <StarFilled style={{ color: '#faad14' }} />, text: text.replace(/^(New )?Feature:?\s*/i, '') };
    if (lower.startsWith("security"))
        return { icon: <SafetyCertificateFilled style={{ color: '#52c41a' }} />, text: text.replace(/^Security:?\s*/i, '') };
    if (lower.startsWith("ux") || lower.startsWith("ui"))
        return { icon: <LayoutFilled style={{ color: '#722ed1' }} />, text: text.replace(/^(UX|UI):?\s*/i, '') };
    if (lower.startsWith("dev") || lower.startsWith("major"))
        return { icon: <CodeFilled style={{ color: '#8c8c8c' }} />, text: text.replace(/^(Dev|Major):?\s*/i, '') };
    if (lower.startsWith("fix"))
        return { icon: <BugOutlined style={{ color: '#ff4d4f' }} />, text: text.replace(/^Fix:?\s*/i, '') };
    if (lower.startsWith("improve"))
        return { icon: <ThunderboltFilled style={{ color: '#1890ff' }} />, text: text.replace(/^Improve:?\s*/i, '') };
    if (lower.startsWith("refactor"))
        return { icon: <CodeFilled style={{ color: '#8c8c8c' }} />, text: text.replace(/^Refactor:?\s*/i, '') };

    return { icon: <CheckCircleOutlined style={{ color: '#1890ff' }} />, text };
};

const Changelog = () => {
    return (
        <div className="changelog-container">
            <div className="changelog-header">
                <Title level={2} style={{ color: 'var(--text-color-primary)', marginBottom: 0 }}>
                    <RocketOutlined style={{ marginRight: 10 }} />
                    System Changelog
                </Title>
                <Text type="secondary" style={{ color: 'var(--text-color-secondary)' }}>
                    Track the evolution of the Portfolio OS.
                </Text>
            </div>

            <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

            <div className="changelog-timeline">
                <Timeline
                    mode="left"
                    items={changelogData.map(item => ({
                        label: <span style={{ color: 'var(--text-color-secondary)' }}>{item.date}</span>,
                        children: (
                            <Card
                                className="changelog-card"
                                title={
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <Tag color={item.color} style={{ marginRight: 0 }}>v{item.version}</Tag>
                                        <span style={{ color: 'var(--text-color-primary)' }}>{item.title}</span>
                                    </div>
                                }
                                bordered={false}
                            >
                                <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                                    {item.details.map((detail, idx) => {
                                        const { icon, text } = getDetailIcon(detail);
                                        return (
                                            <li key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                marginBottom: 8,
                                                color: 'var(--text-color-primary)',
                                                lineHeight: '1.5'
                                            }}>
                                                <span style={{
                                                    marginRight: 10,
                                                    marginTop: 4,
                                                    fontSize: '14px',
                                                    display: 'flex'
                                                }}>
                                                    {icon}
                                                </span>
                                                <span className='changelog-text'>{text}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Card>
                        )
                    }))}
                />
            </div>
        </div>
    );
};

export default Changelog;
