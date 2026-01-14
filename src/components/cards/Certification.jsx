import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Certification = ({ ...certification }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Simple navigation without logic check for now, can be sophisticated if needed
        navigate("/certification/" + certification.id);
    };

    return (
        <div className="cert-card" onClick={handleClick}>
            <div className="cert-image-container">
                <LazyLoadImage
                    src={certification.image_url}
                    effect="blur"
                    alt={certification.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div className="cert-content">
                <span className="cert-title">{certification.name}</span>
            </div>
        </div>
    );
};

export default Certification;
