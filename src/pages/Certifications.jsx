import React, { useState, useEffect } from "react";
import Certification from "../components/cards/Certification";
import SpinLoader from "../components/loaders/SpinLoader";
import { getCertificationList } from "../apis/rest/Certification";
import { globalDelay } from "../utils/constants";
import "./Certifications.css";


const Certifications = () => {
    const [certificationList, setCertificationList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getCertificationList();
                setCertificationList(result);
                setIsLoading(false);
            }, globalDelay);
        };
        fetchData();
    }, []);

    if (isLoading) return <SpinLoader />;

    return (
        <div className="certifications">
            <div className="certification-list">
            {
                certificationList.map((certification, index) => (
                    <Certification key={index} id={index} {...certification} />
                ))
            }
            </div>
        </div>
    );
};

export default Certifications;
