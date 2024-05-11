import React, { useState } from "react";
import { Button, Modal } from "antd";


const CustomModalButton = ({ ...props }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const renderIcon = () => {
        if (props.icon) {
            return React.cloneElement(props.icon, { onClick: showModal });
        }
        return (
            <Button type="primary" onClick={showModal} style={{ backgroundColor: props.buttonColor }}>
                {props.buttonText || "Open Modal"}
            </Button>
        );
    };

    return (
        <div>
            {renderIcon()}
            <Modal
                title={props.title}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={
                    !props.hideButtons && [
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" onClick={handleOk}>
                            OK
                        </Button>,
                    ]
                }
                {...props}
            >
                {props.content}
            </Modal>
        </div>
    );
};

export default CustomModalButton;
