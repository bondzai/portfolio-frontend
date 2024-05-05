import React from "react";
import { Avatar, Card } from 'antd';

const { Meta } = Card;

export const HeroCard = ({avatar, title, description}) => {
    return (
        <Card style={{ width: "400px", height: "200px" }}>
            <Meta
                avatar={<Avatar src={avatar} />}
                title={title}
                description={description}
            />
        </Card>
    )
}
