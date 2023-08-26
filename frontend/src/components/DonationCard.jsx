import React, { useState } from 'react';
import { Input, QRCode, Space, Select } from 'antd';

const options = [
    {
        value: '0x1c45e086ed143aef83c1209521a2ff5369f39abc',
        label: 'ETH',
    },
    {
        value: '0x2f35e086ed143aef83c1209521a2ff5369f39def',
        label: 'BSC',
    },
];

const DonationCard = () => {
    const [selectedValue, setSelectedValue] = useState(options[0].value);

    return (
        <Space direction="vertical" align="center">
            <QRCode value={selectedValue || '-'} />
            <Space.Compact>
                <Select
                    defaultValue={selectedValue}
                    options={options}
                    onChange={value => setSelectedValue(value)}
                />
                <Input value={selectedValue} />
            </Space.Compact>
        </Space>
    );
};

export default DonationCard;
