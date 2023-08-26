import React from 'react';
import { Input, QRCode, Space } from 'antd';

const DonationCard = () => {
    const [text, setText] = React.useState('https://ant.design/');
    
    return (
        <Space direction="vertical" align="center">
            <QRCode 
                value={text || '-'}
                // color= "#fff"
                // bgColor=
            />
            <Input
                placeholder="-"
                maxLength={60}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </Space>
    );
};

export default DonationCard;
