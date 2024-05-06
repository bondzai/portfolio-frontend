import React from "react";
import { cardDetails } from "../apis/rest/Heroes.js";
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
                        <CarouselItem key={detailKey} props={cardDetails[detailKey]} />
                    );
                })}
            </div>
        </div>
    );
}

const HallofFame = () => {
    return (
        <div className="more-background" >
            <div style={{width: "70%", marginBottom: "100px"}}>
                <p>
                    Step into the heart of my blog: the <strong>Brotherhood</strong>.
                </p>
                <p>
                    “Here, I pay homage to the remarkable souls who've guided and supported my software engineering journey. <br />
                    Each name etched in this <strong>Hall of Fame</strong> reflects the profound impact of their mentorship. With deep respect and humility, <br />
                    I invite you to explore the <strong>Brotherhood</strong>—a place where gratitude and resilience shine bright, illuminating our path forward.”
                </p>
                Thanks for reading, <br />
                James Bond
            </div>
            <AutoplayCarousel />
            <br />
            <small> Last updated: 2024-05-05 </small>
        </div>
    );
};

export default HallofFame;
