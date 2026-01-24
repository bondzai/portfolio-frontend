import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate } from "react-router-dom";
import {
    SearchOutlined,
    DoubleLeftOutlined,
    FilePdfOutlined,
    ReadOutlined
} from "@ant-design/icons";
import { RESEARCH_PAPERS } from "../apis/rest/ResearchData";
import "./Research.css";

const Research = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    // Force white background for Research page isolation
    useEffect(() => {
        // Save original styles
        const originalBg = document.body.style.backgroundColor;
        const originalOverflow = document.body.style.overflow;

        // Apply Research styles
        document.body.style.backgroundColor = "#f5f5f5"; // Match specific shelf/paper bg
        document.body.style.overflow = "auto"; // Ensure scrolling is enabled

        // Cleanup on unmount
        return () => {
            document.body.style.backgroundColor = originalBg;
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    const filteredPapers = RESEARCH_PAPERS.filter(paper =>
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // List Row Component
    const ThesisListItem = ({ paper }) => (
        <div className="thesis-list-item" onClick={() => navigate(`/research/${paper.id}`)}>
            <div className="list-id">{paper.id}</div>
            <div className="list-main">
                <h3 className="list-title">{paper.title}</h3>
                <p className="list-abstract">{paper.abstract}</p>
                <div className="list-meta">
                    <span className="list-author">{paper.author}</span>
                    <span className="list-divider">•</span>
                    <span className="list-date">{paper.date}</span>
                </div>
            </div>
            <div className="list-tags">
                {paper.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="list-tag">{tag}</span>
                ))}
            </div>
            <div className="list-action">
                <ReadOutlined />
            </div>
        </div>
    );

    // Footer Component
    const ResearchFooter = () => (
        <div className="research-footer">
            <div className="footer-left">
                Powered by <a href="https://jamesbond.live" target="_blank" rel="noopener noreferrer">jamesbond.live</a>
            </div>
            <div className="footer-right">
                © {new Date().getFullYear()} Puritat Chamart. All Rights Reserved.
            </div>
        </div>
    );

    // Full Paper View (The A4 Layout)
    const PaperView = ({ paper }) => (
        <div className="research-container paper-view">
            <button className="back-to-shelf-btn" onClick={() => navigate('/research')}>
                <DoubleLeftOutlined /> Back to Shelf
            </button>

            <div className="research-page-header">
                <h1>{paper.title}</h1>
                <p className="research-subtitle">{paper.id} • {paper.version}</p>
                <div className="author-name">{paper.author}</div>
            </div>

            <article className="research-paper-article">
                <div className="article-body">
                    {paper.content ? (
                        <div className="markdown-content">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{paper.content}</ReactMarkdown>
                        </div>
                    ) : (
                        <>
                            <section className="section-abstract">
                                <span className="label">ABSTRACT:</span>
                                <p>{paper.abstract}</p>
                            </section>

                            <div className="rd-grid">
                                <section className="rd-section">
                                    <h3>Problem Framing</h3>
                                    <p>{paper.problemFraming}</p>
                                </section>

                                <section className="rd-section">
                                    <h3>Hypothesis & Model</h3>
                                    <p>{paper.hypothesis}</p>
                                </section>
                            </div>

                            <div className="rd-grid">
                                <section className="rd-section">
                                    <h3>Limitations (Unknowns)</h3>
                                    <p>{paper.limitations}</p>
                                </section>

                                <section className="rd-section">
                                    <h3>Future Work</h3>
                                    <p>{paper.futureWork}</p>
                                </section>
                            </div>
                        </>
                    )}

                    <footer className="article-footer">
                        <div className="keywords">
                            <span className="label">Keywords:</span>
                            {paper.tags.join(", ")}
                        </div>

                        <div className="article-actions">
                            <button className="download-btn">
                                <FilePdfOutlined /> Download PDF
                            </button>
                        </div>
                    </footer>
                </div>
            </article>
            <ResearchFooter />
        </div>
    );

    // Determine Logic: If ID exists, show Paper. Else show Shelf.
    if (id) {
        const foundPaper = RESEARCH_PAPERS.find(p => p.id === id);
        if (foundPaper) {
            return <PaperView paper={foundPaper} />;
        }
        // Fallback if not found (optional: could show 404 or just shelf)
        return (
            <div className="shelf-container">
                <div className="empty-shelf">
                    <h2>Paper not found</h2>
                    <button className="back-to-shelf-btn" style={{ position: 'static', margin: '20px auto' }} onClick={() => navigate('/research')}>
                        Return to Archives
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="shelf-container">
            <div className="shelf-header">
                <h1>RESEARCH & DEVELOPMENT LABORATORY</h1>
                <p className="shelf-subtitle">White-papers, micro-theses, and engineering proof of work.</p>

                <div className="shelf-controls">
                    <div className="shelf-search">
                        <SearchOutlined />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="shelf-list">
                {filteredPapers.map(paper => (
                    <ThesisListItem key={paper.id} paper={paper} />
                ))}
            </div>

            {filteredPapers.length === 0 && (
                <div className="empty-shelf">No research found.</div>
            )}

            <ResearchFooter />
        </div>
    );
};

export default Research;
