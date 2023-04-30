import React, { useState, useEffect } from "react";
import Certification from "../components/Certification";
import { getCertificationList } from "../apis/CertificationList";
import "../styles/Certifications.css";

const Certifications = () => {
    const [certificationList, setCertificationList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCertificationList();
            setCertificationList(result);
        };
        fetchData();
    }, []);

    return (
        <div className="certifications">
            <div className="certificationList">
                {certificationList.map((certification, index) => {
                    return <Certification key={index} id={index} {...certification} />
                })}
            </div>
        </div>
    );
};

export default Certifications;