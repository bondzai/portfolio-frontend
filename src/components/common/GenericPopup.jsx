import React, { useState } from "react";
import { Modal, ConfigProvider } from "antd";
import { usePopup } from "../../contexts/PopupContext";
import useScreenDimensions from "../../hooks/useScreenDimensions"; // Import hook
import "./GenericPopup.css";

const GenericPopup = () => {
    const { popupQueue, dismissPopup } = usePopup();
    const [hovered, setHovered] = useState(false);
    const { width: screenWidth } = useScreenDimensions(); // Get screen width

    if (popupQueue.length === 0) return null;

    // Show the first popup in the queue
    const currentPopup = popupQueue[0];

    const handleOk = () => {
        if (currentPopup.onOk) currentPopup.onOk();
        dismissPopup(currentPopup.id);
    };

    const handleCancel = () => {
        if (currentPopup.onCancel) currentPopup.onCancel();
        dismissPopup(currentPopup.id);
    };

    // Responsive Width Calculation
    // Mobile: 90% of screen
    // Desktop: Fixed 400px (or scaled if screen is small)
    const modalWidth = screenWidth < 768 ? '90%' : 400;

    // Traffic Light Configuration
    const {
        showClose = true,
        showMinimize = false,
        showMaximize = false
    } = currentPopup.trafficLights || {};

    return (
        <ConfigProvider>
            <Modal
                title={null}
                open={true}
                footer={null}
                closable={false}
                centered
                width={modalWidth}
                wrapClassName="mac-popup-wrapper"
                styles={{
                    mask: {
                        backdropFilter: 'blur(4px)',
                        background: 'rgba(0, 0, 0, 0.4)'
                    }
                }}
            >
                <div
                    className="mac-popup-header"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="mac-traffic-lights">
                        {showClose && <div className="mac-button close" onClick={handleCancel}></div>}
                        {showMinimize && <div className="mac-button minimize"></div>}
                        {showMaximize && <div className="mac-button maximize"></div>}
                    </div>
                    {currentPopup.title && <div className="mac-popup-title">{currentPopup.title}</div>}
                </div>

                <div className="mac-popup-content">
                    {currentPopup.content}
                </div>

                <div className="mac-popup-footer">
                    <button className="mac-popup-btn" onClick={handleOk}>
                        {currentPopup.okText || "OK"}
                    </button>
                </div>
            </Modal>
        </ConfigProvider>
    );
};

export default GenericPopup;
