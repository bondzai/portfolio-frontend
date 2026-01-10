import React from 'react';
import { Button, Modal } from 'antd';
import { FaDownload, FaEye } from 'react-icons/fa';
import "./DownloadResumeButton.css";

const DownloadResumeButton = () => {
    const RESUME_URL = "https://drive.google.com/uc?export=download&id=1j325QVi7U5c1Go2O4rL0F65-rq3ul_OR";

    const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);

    // Extract file ID from Google Drive URL
    const getFileId = (url) => {
        try {
            const urlObj = new URL(url);
            return urlObj.searchParams.get("id");
        } catch (e) {
            return null;
        }
    };

    const fileId = getFileId(RESUME_URL);
    const previewUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;

    const handleDownload = () => {
        if (!RESUME_URL) {
            const link = document.createElement('a');
            link.href = '/resume.pdf';
            link.download = 'resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(RESUME_URL, '_blank');
        }
    };

    return (
        <div className="resume-btn-container" style={{ display: 'flex', gap: '10px' }}>
            <Button
                type="primary"
                onClick={handleDownload}
                icon={<FaDownload />}
                size="large"
                className="resume-btn"
            >
                Download Resume
            </Button>
            {previewUrl && (
                <Button
                    onClick={() => setIsPreviewOpen(true)}
                    icon={<FaEye />}
                    size="large"
                    className="resume-preview-btn"
                >
                    Preview
                </Button>
            )}
            <Modal
                title="Resume Preview"
                open={isPreviewOpen}
                onCancel={() => setIsPreviewOpen(false)}
                footer={[
                    <Button key="download" type="primary" onClick={handleDownload} icon={<FaDownload />}>
                        Download
                    </Button>,
                    <Button key="close" onClick={() => setIsPreviewOpen(false)}>
                        Close
                    </Button>
                ]}
                width={800}
                centered
            >
                <iframe
                    src={previewUrl}
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
