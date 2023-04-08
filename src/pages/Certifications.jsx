import React from "react";
import Certification from "../components/Certification";
import { CertificationList } from "../apis/CertificationList";
import "../styles/Certifications.css";

const Certifications = () => {
    return (
        <div className="certifications">
            <h1> C E R T I F I C A T I O N S </h1>
            <div className="certificationList">
                {CertificationList.map((certification, index) => {
                    return <Certification key={index} id={index} {...certification} />
                })}
            </div>
        </div>
    );
};

export default Certifications;