import React from 'react';
import { Form, Input, Button, message, Tooltip } from 'antd';
import { BulbOutlined, SendOutlined } from '@ant-design/icons';
import OSWindow from '../OSWindow';

const { TextArea } = Input;

const FeatureWindow = ({ isOpen, onClose, onMinimize, isMinimized }) => {
    const handleFeatureSubmit = () => {
        message.success("Feature request sent to developer!");
        onClose();
    };

    return (
        <OSWindow
            title="Feature Request"
            icon={<BulbOutlined />}
            isOpen={isOpen}
            onClose={onClose}
            onMinimize={onMinimize}
            isMinimized={isMinimized}
            width={400}
            height={350}
        >
            <div style={{ padding: '20px', color: 'white', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <p style={{ margin: 0, opacity: 0.8 }}>Have an idea? Send it directly to the developer.</p>
                <Form layout="vertical" onFinish={handleFeatureSubmit}>
                    <Form.Item name="title" label={<span style={{ color: 'white' }}>Title</span>} style={{ marginBottom: '10px' }}>
                        <Input placeholder="Feature title" style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }} />
                    </Form.Item>
                    <Form.Item name="description" label={<span style={{ color: 'white' }}>Description</span>}>
                        <TextArea rows={4} placeholder="Describe your idea..." style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }} />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" icon={<SendOutlined />} block>
                        Send Request
                    </Button>
                </Form>
            </div>
        </OSWindow>
    );
};

export default FeatureWindow;
