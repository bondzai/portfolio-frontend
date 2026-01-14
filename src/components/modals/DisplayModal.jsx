import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    GlobalOutlined,
    GithubOutlined,
    LinkOutlined,
    CloseOutlined,
    LeftOutlined,
    RightOutlined
} from "@ant-design/icons";
import { openInNewTab } from "../../utils/utils.js";
import "./DisplayModal.css";

const DisplayModal = ({ getDataList, dataRoutePath }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [current, setCurrent] = useState(id);
    const [dataList, setDataList] = useState([]);
    const [dataListFetched, setDataListFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataList();
            setDataList(result);
            setDataListFetched(true);
        };
        fetchData();
    }, [getDataList]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { keyCode } = event;
            if (!dataListFetched) return;

            if (keyCode === 37) slideBack();
            else if (keyCode === 39) slideForward();
            else if (keyCode === 27) closeModal();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [current, dataListFetched, dataList]);

    const slideForward = (e) => {
        if (e) e.stopPropagation();
        const currentIndex = dataList.findIndex(item => item.id === current);
        if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % dataList.length;
            setCurrent(dataList[nextIndex].id);
        }
    };

    const slideBack = (e) => {
        if (e) e.stopPropagation();
        const currentIndex = dataList.findIndex(item => item.id === current);
        if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + dataList.length) % dataList.length;
            setCurrent(dataList[prevIndex].id);
        }
    };

    const closeModal = () => {
        navigate(dataRoutePath);
    };

    const data = dataList.find(item => item.id === current);

    if (!data) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {/* Navigation Arrows */}
                <div className="nav-arrow nav-prev" onClick={slideBack}>
                    <LeftOutlined />
                </div>
                <div className="nav-arrow nav-next" onClick={slideForward}>
                    <RightOutlined />
                </div>

                {/* Close Button */}
                <button className="close-btn" onClick={closeModal}>
                    <CloseOutlined />
                </button>

                {/* Left: Image Section */}
                <div className="modal-image-section">
                    <img src={data.image_url} alt={data.name} className="modal-image" />
                </div>

                {/* Right: Details Section */}
                <div className="modal-details-section">
                    <h2 className="modal-title">{data.name}</h2>

                    {data.description && (
                        <p className="modal-description">{data.description}</p>
                    )}

                    {/* Metadata Grid */}
                    <div className="modal-meta">
                        <div className="meta-item">
                            <label>Technology</label>
                            <span>{data.language || "N/A"}</span>
                        </div>
                        {data.status && (
                            <div className="meta-item">
                                <label>Status</label>
                                <span style={{ textTransform: 'capitalize' }}>{data.status}</span>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="modal-actions">
                        {data.host_url && (
                            <div className="glass-action-btn primary" onClick={() => openInNewTab(data.host_url)}>
                                <GlobalOutlined />
                                <span>Live Demo</span>
                            </div>
                        )}

                        {data.source_url && (
                            <div className="glass-action-btn" onClick={() => openInNewTab(data.source_url)}>
                                <GithubOutlined />
                                <span>Source Code</span>
                            </div>
                        )}

                        {data.other_url && (
                            <div className="glass-action-btn" onClick={() => openInNewTab(data.other_url)}>
                                <LinkOutlined />
                                <span>More Info</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayModal;
