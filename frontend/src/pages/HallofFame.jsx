import React from "react";
import { cardDetails } from "../apis/rest/Heroes";
import { HeroCard } from "../components/cards/HeroCard";
import "./HallofFame.css";

const CarouselItem = ({props}) => {
    return (
        <HeroCard {...props}/>
    );
}

const AutoplayCarousel = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem props={cardDetails[detailKey]} />
                    );
                })}
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem props={cardDetails[detailKey]} />
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
