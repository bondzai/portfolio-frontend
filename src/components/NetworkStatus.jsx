import React from "react";
import "./NetworkStatus.css";

const NetworkStatus = ({ isConnected }) => {
    return (
        <div className="network-status-container" title={isConnected ? "WebSocket Connected" : "WebSocket Disconnected"}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="14" 
                height="14" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="server-icon status-icon"
            >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            <div className={`status-badge ${isConnected ? "connected" : "disconnected"}`} />
        </div>
    );
};

export default NetworkStatus;
