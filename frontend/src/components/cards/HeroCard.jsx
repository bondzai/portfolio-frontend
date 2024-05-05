import React from "react";
import { Avatar, Card, Tooltip } from 'antd';
import { GithubFilled, LinkOutlined } from '@ant-design/icons';
import { openInNewTab } from "../../utils/utils.js";
import "./HeroCard.css";

const { Meta } = Card;

export const HeroCard = ({avatar, title, repoUrl, url, description}) => {
    return (
        <Card 
            className="hero-card"
            actions={[
                <Tooltip title={repoUrl}>
                    <GithubFilled onClick={() => openInNewTab(repoUrl)} />
                </Tooltip>, 
                <Tooltip title={url}>
                    <LinkOutlined onClick={() => openInNewTab(url)}/>
                </Tooltip>, 
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
