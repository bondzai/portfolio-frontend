import React from "react";
import { useParams } from "react-router-dom";
import { CertificationList } from "../apis/CertificationList";
import "../styles/CertificationDisplay.css";

const CertificationDisplay = () => {
    const { id } = useParams();
    const certification = CertificationList[id];

    return (
        <div className="certification-display">
            <img src={certification.image} alt ={certification.name}/>
        </div>
    )
}

export default CertificationDisplay;