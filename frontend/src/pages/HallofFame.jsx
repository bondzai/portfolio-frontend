import React from "react";
import "../styles/HallofFame.css";
import { Avatar, Card } from 'antd';
import { cardDetails } from "../apis/rest/Heroes";

const { Meta } = Card;

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
