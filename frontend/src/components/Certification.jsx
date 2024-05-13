import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useRotation from "../hooks/useRotation";


const Certification = ({ ...certification }) => {
    const { rotation, handleMouseMove, handleMouseLeave } = useRotation();
    const navigate = useNavigate();

    const disableClick = window.matchMedia("(max-width: 600px)").matches;
    const handleClick = () => {
        if (!disableClick) {
            navigate("/certification/" + certification.id);
        }
    };

    return (
        <div 
            className="certification" 
            onClick={handleClick} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            }}
        >
            <LazyLoadImage
                src={certification.image_url}
                alt=""
                effect="blur"
                className="bg-image"
            />
        </div>
    );
};

export default Certification;
