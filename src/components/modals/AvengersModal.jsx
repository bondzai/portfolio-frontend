import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import Avengers from "../icons/Avengers.jsx";
import "./AvengersModal.css";

const AvengersModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="avengers-modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <CloseOutlined />
                </button>

                <div className="avengers-header">
                    <h2 className="avengers-title">The Brotherhood</h2>
                </div>

                <div className="avengers-scroll-area">
                    <Avengers />
                </div>
            </div>
        </div>
    );
};

export default AvengersModal;
