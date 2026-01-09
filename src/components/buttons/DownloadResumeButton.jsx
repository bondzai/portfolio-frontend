import React from 'react';
import { Button } from 'antd';
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
        <Button
            type="primary"
            onClick={handleDownload}
            icon={<FaDownload />}
            size="large"
            style={{
                backgroundColor: 'var(--color-secondary)',
                borderColor: 'var(--color-secondary)',
                fontFamily: 'var(--font-family-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0 25px',
                height: '45px',
                borderRadius: '8px',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
            }}
        >
            Download Resume
        </Button>
    );
};

export default DownloadResumeButton;
