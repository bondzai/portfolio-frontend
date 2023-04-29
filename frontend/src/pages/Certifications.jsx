import React from "react";
import Certification from "../components/Certification";
import { CertificationList } from "../apis/CertificationList";
import "../styles/Certifications.css";

const Certifications = () => {
    return (
        <div className="certifications">
            <div className="certificationList">
                {CertificationList.map((certification, index) => {
                    return <Certification key={index} id={index} {...certification} />
                })}
            </div>
        </div>
    );
};

export default Certifications;