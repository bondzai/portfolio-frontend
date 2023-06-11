import React, { useState, useEffect } from "react";
import Certification from "../components/Certification";
import { getCertificationList } from "../apis/CertificationList";
import SpinComponent from "../components/SpinComponent";
import "../styles/Certifications.css";

const Certifications = () => {
    const [certificationList, setCertificationList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCertificationList();
            setCertificationList(result);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="certifications">
            {isLoading ? (<SpinComponent />) : (
                <div className="certificationList">
                    {certificationList.map((certification, index) => {
                        return <Certification key={index} id={index} {...certification} />
                    })}
                </div>
            )}
        </div>
    );
};

export default Certifications;