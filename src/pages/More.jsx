import React from "react";
import { avengers } from "../apis/rest/Avengers.js";
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
            <div style={{width: "60%", marginBottom: "40px"}}>
                <p>
                    Welcome to the <strong>Brotherhood</strong>.
                </p>
                <p>
                    “This space honors the people who shaped my journey as a software engineer. <br />
                    Each name here represents real guidance, real support, and real impact. <br />
                    This is my way of saying thank you—to those who helped me move forward.”
                </p>
                Thanks for reading, <br />
                James Bond
            </div>
            <div style={{width: "60%"}}>
                <Avengers />
            </div>
            <AutoplayCarousel />
            <br />
            <small> Last updated: 2026-01-12 </small>
        </div>
    );
};

export default More;
