import React from "react";
import { CalendarOutlined, ReadOutlined } from "@ant-design/icons";
import "./Blog.css";

const MOCKUP_POSTS = [
    {
        id: 1,
        title: "The Future of Web Development",
        date: "October 24, 2024",
        excerpt: "Exploring the latest trends in frontend frameworks, serverless architectures, and the rise of AI-assisted coding.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        title: "Mastering Docker for DevOps",
        date: "November 05, 2024",
        excerpt: "A comprehensive guide to containerization, orchestration with Kubernetes, and optimizing your CI/CD pipelines.",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 3,
        title: "Understanding Blockchain Fundamentals",
        date: "December 12, 2024",
        excerpt: "Deep dive into decentralized ledgers, smart contracts, and how Web3 is reshaping the digital landscape.",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 4,
        title: "The Art of Minimalist UI Design",
        date: "January 10, 2025",
        excerpt: "Why less is more: Principles of spacing, typography, and color theory for creating stunning user interfaces.",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1>Insights & Thoughts</h1>
                <p>Sharing knowledge, experiences, and technical deep dives.</p>
            </div>

            <div className="blog-grid">
                {MOCKUP_POSTS.map(post => (
                    <div key={post.id} className="blog-card glass-card">
                        <div className="blog-card-content">
                            <h2 className="blog-title">{post.title}</h2>
                            <div className="blog-meta">
                                <span className="blog-date">
                                    <CalendarOutlined style={{ marginRight: '6px' }} />
                                    {post.date}
                                </span>
                            </div>
                            <p className="blog-excerpt">
                                {post.excerpt}
                            </p>
                            <div className="blog-actions">
                                <button className="read-more-btn">
                                    Read Article <ReadOutlined style={{ marginLeft: '6px' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
