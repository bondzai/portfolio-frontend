import React, { useState } from "react";
import { Input, QRCode, Select, Tooltip, Avatar, message } from "antd";
import { InfoCircleOutlined, UserOutlined, CopyOutlined } from "@ant-design/icons";
import { cryptoWallets } from "../../apis/rest/Wallets";
import "./DonationCard.css";


const CopyToClipboardIcon = ({ value, onClick }) => (
    <Tooltip title="Copy to Clipboard">
        <CopyOutlined onClick={() => onClick(value)} style={{ cursor: "pointer" }} />
    </Tooltip>
);

const ExtraInfoIcon = () => (
    <Tooltip title="Extra information">
        <InfoCircleOutlined style={{ color: "rgba(0, 0, 0, 0.45)" }} />
    </Tooltip>
);

const AvatarWithTooltip = () => (
    <Tooltip title="Extra information">
        <Avatar size={21} style={{ backgroundColor: "#3e497a" }} icon={<UserOutlined />} />
    </Tooltip>
);

const InputWithIcons = ({ value, handleCopyToClipboard }) => (
    <Input
        value={value}
        prefix={<AvatarWithTooltip />}
        suffix={
            <>
                <CopyToClipboardIcon value={value} onClick={handleCopyToClipboard} />
                <ExtraInfoIcon />
            </>
        }
    />
);

const DonationCard = () => {
    const [selectedId, setSelectedId] = useState(cryptoWallets[0].id);

    const selectedOption = cryptoWallets.find(option => option.id === selectedId);

    const handleCopyToClipboard = (value) => {
        navigator.clipboard.writeText(value);
        message.success("Copied to clipboard");
    };

    return (
        <div className="donation-card-background">
            <div className="donation-card-head">
                <div style={{ marginLeft: "10px", marginRight: "60px" }}>
                    <img
                        src={selectedOption?.iconUrl}
                        style={{ width: "80px", height: "80px" }}
                        alt=""
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <QRCode value={selectedOption?.value || "-"} />
                </div>
            </div>
            <div className="donation-card-tail">
                <div style={{ marginBottom: "10px", width: "400px" }}>
                    <InputWithIcons
                        value={selectedOption?.value}
                        handleCopyToClipboard={handleCopyToClipboard}
                    />
                </div>
                <Select
                    defaultValue={selectedId}
                    options={cryptoWallets.map(option => ({ label: option.label, value: option.id }))}
                    onChange={id => setSelectedId(id)}
                    style={{width: "400px"}}
                />
            </div>
        </div>
    );
};

export default DonationCard;
