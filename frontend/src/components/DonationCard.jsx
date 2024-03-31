import React, { useState } from "react";
import { Input, QRCode, Space, Select, Tooltip, Avatar, message } from "antd";
import { InfoCircleOutlined, UserOutlined, CopyOutlined } from "@ant-design/icons";
import options from "../apis/rest/Wallets";


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

const DonationCard = () => {
    const [selectedId, setSelectedId] = useState(options[0].id);

    const selectedOption = options.find(option => option.id === selectedId);

    const handleCopyToClipboard = (value) => {
        navigator.clipboard.writeText(value);
        message.success("Copied to clipboard");
    };

    return (
        <div style={{ width: "50%" }}>

            <Space direction="horizontal" align="center" >
                <img
                    src={selectedOption?.iconUrl}
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                />

                <QRCode value={selectedOption?.value || "-"} />
            </Space>

            <Space.Compact direction="vertical" align="center">
                <InputWithIcons
                    value={selectedOption?.value}
                    handleCopyToClipboard={handleCopyToClipboard}
                />
                <Select
                    defaultValue={selectedId}
                    options={options.map(option => ({ label: option.label, value: option.id }))}
                    onChange={id => setSelectedId(id)}
                />
            </Space.Compact>

        </div>
    );
};

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
        style={{ width: "400px" }}
    />
);

export default DonationCard;
