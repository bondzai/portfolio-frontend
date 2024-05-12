import React from "react";
import { avengers } from "../apis/rest/Heroes.js";
import { HeroCard } from "../components/cards/HeroCard.jsx";
import Avengers from "../components/icons/Avengers.jsx";
import "./More.css";


const CarouselItem = ({props}) => {
    return (
        <HeroCard {...props}/>
    );
}

const AutoplayCarousel = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {Object.keys(avengers).map((detailKey) => {
                    return (
                        <CarouselItem key={detailKey} props={avengers[detailKey]} />
                    );
                })}
            </div>
        </div>
    );
}

const More = () => {
    return (
        <div className="more-background" >
            <div style={{width: "60%", marginBottom: "100px"}}>
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
            <div style={{width: "60%"}}>
                <Avengers />
            </div>
            <AutoplayCarousel />
            <br />
            <small> Last updated: 2024-05-05 </small>
        </div>
    );
};

export default More;
