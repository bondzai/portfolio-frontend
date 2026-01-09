import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card } from 'antd';
import useRotation from "../../hooks/useRotation";
import "react-lazy-load-image-component/src/effects/blur.css";


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

    return (
        <Card
            cover={<LazyLoadImage src={certification.image_url} effect="blur" className="bg-image" />}
            className="certification" 
            onClick={handleClick} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            style={{ 
                transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.02) translateY(-5px)' : ''}`
            }}
        />
    );
};

export default Certification;

