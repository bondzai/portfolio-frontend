import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CertificationList } from "../apis/CertificationList";
import "../styles/CertificationDisplay.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const CertificationDisplay = () => {
    let { id } = useParams();
    const [current, setCurrent] = useState(id)
    const slideBack = () => {
        if (current === 0) {
            setCurrent(CertificationList.length - 1)
        } else {
            setCurrent(parseInt(current) - 1)
        }
    }
    const slideForward = () => {
        if (current === CertificationList.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(parseInt(current) + 1)
        }
    }
    id = current;

    return (
        <div className="certification-display">
            <AiOutlineArrowLeft className="arrow-left" onClick={slideBack} />
            <img src={CertificationList[id].image} alt={CertificationList[id].name} />
            <AiOutlineArrowRight className="arrow-right" onClick= {slideForward} />
        </div>
    )
}

export default CertificationDisplay;