import React from "react";
import { useNavigate } from "react-router-dom";

const Certification = ({...certification}) => {
    const navigate = useNavigate();
    return (
        <div className="certification" onClick={() => navigate("/certification/" + certification.id)}>
            <div style={{backgroundImage: `url(${certification.image})`}} className="bgImage" />
        </div>
    )
}

export default Certification;