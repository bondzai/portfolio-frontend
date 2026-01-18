import React, { useState } from 'react';
import { Modal, Input, Button, App as AntApp, ConfigProvider, Tooltip, Select } from 'antd';
import { GithubOutlined, FacebookFilled, GoogleOutlined, MessageOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '../../contexts/AuthContext';
import './FeedbackModal.css';

const { TextArea } = Input;
const { Option } = Select;

const FeedbackModalContent = ({ visible, onClose }) => {
    const { message } = AntApp.useApp();
    const { user, loginWithGoogle, loginWithGithub, loginWithFacebook, logout } = useAuth();
    const [feedback, setFeedback] = useState('');
    const [feedbackType, setFeedbackType] = useState('feature');
    const [sending, setSending] = useState(false);

    const getTypeColor = (type) => {
        switch (type) {
            case 'feature': return 3447003; // Blue
            case 'bug': return 15158332; // Red
            case 'contact': return 15844367; // Gold
            default: return 9807270; // Grey
        }
    };

    const handleSend = async () => {
        if (!feedback.trim()) return message.warning("Please enter a message.");

        setSending(true);
        try {
            const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
            if (!webhookUrl) throw new Error("Webhook URL not configured");

            const payload = {
                username: "Portfolio Feedback",
                avatar_url: "https://cdn-icons-png.flaticon.com/512/2965/2965300.png",
                embeds: [{
                    title: `New Feedback: ${feedbackType.toUpperCase().replace('_', ' ')}`,
                    description: feedback,
                    color: getTypeColor(feedbackType),
                    fields: [
                        { name: "Type", value: feedbackType, inline: true },
                        { name: "User", value: user.displayName || "Anonymous", inline: true },
                        { name: "Email", value: user.email || "No Email", inline: true },
                        { name: "Provider", value: user.providerData?.[0]?.providerId || "Unknown", inline: true }
                    ],
                    footer: { text: `UID: ${user.uid}` },
                    timestamp: new Date().toISOString()
                }]
            };

            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            message.success("Feedback sent! Thank you.");
            setFeedback('');
            setFeedbackType('feature');
            onClose();
        } catch (error) {
            console.error(error);
            message.error("Failed to send feedback.");
        } finally {
            setSending(false);
        }
    };

    return (

        <Modal
            title={null}
            open={visible}
            onCancel={onClose}
            footer={null}
            width={400}
            centered
            wrapClassName="feedback-modal-wrapper"
            className="feedback-modal"
        >
            <div className="feedback-header">
                <MessageOutlined className="feedback-icon" />
                <h3>Send Feedback</h3>
                <p>Help me improve this portfolio!</p>
            </div>

            {!user ? (
                <div className="feedback-auth">
                    <p className="auth-hint">Please login to send messages.</p>
                    <div className="auth-buttons">
                        <Button icon={<GoogleOutlined />} onClick={loginWithGoogle} block>
                            Continue with Google
                        </Button>
                        <Button icon={<GithubOutlined />} disabled block>
                            Continue with GitHub (Soon)
                        </Button>
                        <Button icon={<FacebookFilled />} disabled block>
                            Continue with Facebook (Soon)
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="feedback-form">
                    <div className="user-info">
                        <img src={user.photoURL || 'https://via.placeholder.com/32'} alt="User" />
                        <span>{user.displayName}</span>
                    </div>

                    <Select
                        value={feedbackType}
                        onChange={setFeedbackType}
                        style={{ width: '100%', marginBottom: 12 }}
                        className="feedback-select"
                    >
                        <Option value="feature">🚀 Feature Request</Option>
                        <Option value="bug">🐛 Bug Report</Option>
                        <Option value="contact">💼 Business Contact</Option>
                        <Option value="other">📝 Other</Option>
                    </Select>

                    <TextArea
                        rows={4}
                        placeholder="Write your details here..."
                        value={feedback}
                        onChange={e => setFeedback(e.target.value)}
                        className="bg-transparent"
                    />
                    <div className="feedback-actions">
                        <Tooltip title="Sign Out">
                            <Button icon={<LogoutOutlined />} onClick={logout} danger style={{ marginRight: 'auto' }} />
                        </Tooltip>
                        <Button onClick={onClose} ghost>Cancel</Button>
                        <Button type="primary" onClick={handleSend} loading={sending}>
                            Send Feedback
                        </Button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

const FeedbackModal = (props) => (
    <ConfigProvider>
        <AntApp>
            <FeedbackModalContent {...props} />
        </AntApp>
    </ConfigProvider>
);

export default FeedbackModal;
