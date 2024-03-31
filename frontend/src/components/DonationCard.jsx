import React, { useState } from "react";
import { Input, QRCode, Space, Select, Tooltip, Avatar, message } from "antd";
import { InfoCircleOutlined, UserOutlined, CopyOutlined } from "@ant-design/icons";

const options = [
    {
        id: 1,
        value: "0x1c45e086ed143aef83c1209521a2ff5369f39abc",
        label: "BTC",
        iconUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=029",
    },
    {
        id: 2,
        value: "0x1c45e086ed143aef83c1209521a2ff5369f39abc",
        label: "ETH",
        iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
    },
    {
        id: 3,
        value: "0x1c45e086ed143aef83c1209521a2ff5369f39abc",
        label: "AVAX",
        iconUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=029",
    },
];

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
