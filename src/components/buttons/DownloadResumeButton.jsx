import React from 'react';
import { Button } from 'antd';
import { FaDownload } from 'react-icons/fa';
import "./DownloadResumeButton.css";

const DownloadResumeButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button
            type="primary"
            onClick={handleDownload}
            icon={<FaDownload />}
            size="large"
            className="resume-btn"
        >
            Download Resume
        </Button>
    );
};

export default DownloadResumeButton;
