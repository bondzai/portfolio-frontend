import React, { useState } from "react";
import { avengers } from "../apis/rest/Avengers.js";
import { HeroCard } from "../components/cards/HeroCard.jsx";
import AvengersModal from "../components/modals/AvengersModal.jsx";
import { TeamOutlined } from "@ant-design/icons";
import "./More.css";

const CarouselItem = ({ props }) => {
    return (
        <div style={{ margin: '0 10px' }}>
            <HeroCard {...props} />
        </div>
    );
}

const AutoplayCarousel = () => {
    // Duplicate data to create seamless loop
    const items = Object.keys(avengers);
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {duplicatedItems.map((detailKey, index) => {
                    return (
                        <CarouselItem key={`${detailKey}-${index}`} props={avengers[detailKey]} />
                    );
                })}
            </div>
        </div>
    );
}

const More = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="more-background">
            <div className="more-content">
                <p>
                    Welcome to the <strong>Brotherhood</strong>.
                </p>
                <p>
                    “This space honors the people who shaped my journey as a software engineer. <br />
                    Each name here represents real guidance, real support, and real impact. <br />
                    This is my way of saying thank you—to those who helped me move forward.”
                </p>
                <p style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '14px' }}>
                    Thanks for reading, <br />
                    <strong>James Bond</strong>
                </p>
            </div>

            <AutoplayCarousel />

            <div className="view-more-container">
                <button className="view-more-btn" onClick={() => setIsModalOpen(true)}>
                    <TeamOutlined />
                    <span>View All</span>
                </button>
            </div>

            <AvengersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default More;
