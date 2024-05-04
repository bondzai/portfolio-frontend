import React from "react";
import "../styles/HallofFame.css";
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const cardDetails = {
    1: {
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
        title: "Text 1",
        description: "This is the description 1"
    },
    2: {
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
        title: "Text 2",
        description: "This is the description 2"
    },
    3: {
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
        title: "Text 3",
        description: "This is the description 3"
    },
}

const HeroCard = ({avatar, title, description}) => {
    return (
        <Card style={{ width: 300 }}>
            <Meta
                avatar={<Avatar src={avatar} />}
                title={title}
                description={description}
            />
        </Card>
    )
}

function CarouselItem({props}) {
    console.log("debug")
    console.log(props)
    return (
        <HeroCard {...props}/>
    );
}

function AutoplayCarousel() {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            props={cardDetails[detailKey]}
                        ></CarouselItem>
                    );
                })}
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            props={cardDetails[detailKey]}
                        ></CarouselItem>
                    );
                })}
            </div>
        </div>
    );
}

const HallofFame = () => {
    return (
        <div className="hof-background">
            <AutoplayCarousel />
        </div>
    );
};

export default HallofFame;
