import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const CustomModal = ({ ...props }) => {
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

    const renderButton = () => {
        const buttonStyle = { backgroundColor: props.buttonColor };
        
        if (props.buttonIcon) {
            return (
                <Button type="primary" onClick={showModal} icon={props.buttonIcon} style={buttonStyle}>
                    {props.buttonText || null}
                </Button>
            );
        } else {
            return (
                <Button type="primary" onClick={showModal} style={buttonStyle}>
                    {props.buttonText || 'Open Modal'}
                </Button>
            );
        }
    };

    return (
        <div>
            {renderButton()}
            <Modal
                title={props.title}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={!props.hideButtons && [
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        OK
                    </Button>,
                ]}
                {...props}
            >
                {props.content}
            </Modal>
        </div>
    );
};

export default CustomModal;
