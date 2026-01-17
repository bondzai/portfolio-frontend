import React from "react";
import { Modal, ConfigProvider } from "antd";
import { usePopup } from "../../contexts/PopupContext";
import "./GenericPopup.css";

const GenericPopup = () => {
    const { popupQueue, dismissPopup } = usePopup();

    if (popupQueue.length === 0) return null;

    // Show the first popup in the queue
    const currentPopup = popupQueue[0];

    const handleOk = () => {
        if (currentPopup.onOk) currentPopup.onOk();
        dismissPopup(currentPopup.id);
    };

    // iOS-like Theme via ConfigProvider
    const modalTheme = {
        token: {
            colorBgElevated: "rgba(240, 240, 240, 0.85)", // Light glass fallback
        }
    };

    return (
        <ConfigProvider theme={modalTheme}>
            <Modal
                title={null}
                open={true}
                footer={null}
                closable={false}
                centered
                width={270}
                wrapClassName="ios-popup-wrapper"
                styles={{
                    content: {
                        padding: 0,
                        backgroundColor: 'rgba(250, 250, 250, 0.85)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        boxShadow: '0 0 15px rgba(0,0,0,0.2)',
                        border: 'none',
                        textAlign: 'center'
                    },
                    mask: {
                        backdropFilter: 'blur(2px)',
                        background: 'rgba(0, 0, 0, 0.3)'
                    }
                }}
            >
                <div className="ios-popup-content">
                    {currentPopup.title && <div className="ios-popup-title">{currentPopup.title}</div>}
                    <div className="ios-popup-message">
                        {currentPopup.content}
                    </div>
                </div>

                <div className="ios-popup-footer">
                    <button className="ios-popup-button" onClick={handleOk}>
                        {currentPopup.okText || "OK"}
                    </button>
                </div>
            </Modal>
        </ConfigProvider>
    );
};

export default GenericPopup;
