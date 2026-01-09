import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card } from 'antd';
import useRotation from "../../hooks/useRotation";
import "react-lazy-load-image-component/src/effects/blur.css";


const Badge = ({ text }) => (
    <div className="badge-container">
        <span className="badge-text">{text}</span>
    </div>
);

const Certification = ({ ...certification }) => {
    const { rotation, handleMouseMove, handleMouseLeave } = useRotation();
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const disableClick = window.matchMedia("(max-width: 600px)").matches;
    const handleClick = () => {
        if (!disableClick) {
            navigate("/certification/" + certification.id);
        }
    };

    const onMouseLeave = () => {
        setIsHovered(false);
        handleMouseLeave();
    };

    // Extract year or use default 'CERT' for badge
    const yearMatch = certification.name.match(/\b20\d{2}\b/);
    const badgeText = yearMatch ? yearMatch[0] : "CERT";

    return (
        <Card
            className="certification" 
            onClick={handleClick} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            style={{ 
                transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.02) translateY(-5px)' : ''}`
            }}
            bodyStyle={{ padding: 0, height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <div className="cert-image-container">
                 <LazyLoadImage src={certification.image_url} effect="blur" className="bg-image" />
            </div>
            <div className="cert-content">
                <span className="cert-title">{certification.name}</span>
            </div>
            <Badge text={badgeText} />
        </Card>
    );
};

export default Certification;

