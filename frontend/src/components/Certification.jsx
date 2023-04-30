import React from "react";
import { useNavigate } from "react-router-dom";

const Certification = ({ ...certification }) => {
    const navigate = useNavigate();
    const disableClick = window.matchMedia("(max-width: 600px)").matches;
    const handleClick = () => {
        if (!disableClick) {
            navigate("/certification/" + certification.id);
        };
    };
    
    return (
        <div className="certification" onClick={handleClick}>
            <div style={{ backgroundImage: `url(${certification.image_url})` }} className="bgImage" />
        </div>
    )
}

export default Certification;
