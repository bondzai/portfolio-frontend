import React from 'react';
import { FloatButton } from 'antd';
import { FaDownload } from 'react-icons/fa';

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
        <FloatButton
            tooltip="Download Resume"
            onClick={handleDownload}
            icon={<FaDownload size={12} />}
            style={{
                position: 'fixed',
                top: '10px',
                left: '48px',
                opacity: 0.9,
                zIndex: 1000,
                width: '30px',
                height: '30px',
            }}
        />
    );
};

export default DownloadResumeButton;
