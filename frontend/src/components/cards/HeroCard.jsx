import React from "react";
import { Avatar, Card } from 'antd';
import { GithubFilled, LinkOutlined } from '@ant-design/icons';

const { Meta } = Card;

export const HeroCard = ({avatar, title, description}) => {
    return (
        <Card 
            style={{ 
                width: "360px",
                height: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
            actions={[
                <GithubFilled key="github" />,
                <LinkOutlined key="link" />
            ]}
        >
            <Meta
                avatar={<Avatar src={avatar} />}
                title={title}
                description={description}
            />
        </Card>
    )
}
