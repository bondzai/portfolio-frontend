import React from 'react';
import { Button, Modal } from 'antd';
import { FaDownload, FaEye } from 'react-icons/fa';
import "./DownloadResumeButton.css";

const DownloadResumeButton = () => {
    const RESUME_URL = "/resume.pdf";
    const RESUME_FILENAME = "Puritat_Chamart_Resume.pdf";

    const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = RESUME_URL;
        link.download = RESUME_FILENAME;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-btn-container">
            <Button
                type="primary"
                onClick={() => setIsPreviewOpen(true)}
                icon={<FaEye />}
                size="large"
                className="resume-btn"
            >
                View Resume
            </Button>
            <Modal
                title="Resume Preview"
                open={isPreviewOpen}
                onCancel={() => setIsPreviewOpen(false)}
                footer={[
                    <Button key="close" onClick={() => setIsPreviewOpen(false)}>
                        Close
                    </Button>
                ]}
                width={800}
                centered
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ fontSize: '16px', fontWeight: '500', color: '#555' }}>
                        Last Update: November 2026
                    </span>
                    <Button key="download" type="primary" onClick={handleDownload} icon={<FaDownload />}>
                        Download
                    </Button>
                </div>
                <iframe
                    src={RESUME_URL}
                    width="100%"
                    height="600px"
                    style={{ border: 'none' }}
                    title="Resume Preview"
                />
            </Modal>
        </div>
    );
};

export default DownloadResumeButton;
