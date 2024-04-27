import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Certification from "../components/Certification";
import SpinComponent from "../components/loaders/SpinComponent";
import { getCertificationList } from "../apis/rest/Certification";
import { globalDelay, itemsPerPage } from "../utils/constants";
import "../styles/Certifications.css";

const Certifications = () => {
    const [certificationList, setCertificationList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

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

    const handleChangePage = (_, newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleCertifications = certificationList.slice(startIndex, startIndex + itemsPerPage);

    if (isLoading) {
        return (
            <SpinComponent />
        );
    };

    return (
        <div className="certifications">
            <div className="certificationList">
                {visibleCertifications.map((certification, index) => (
                    <Certification key={startIndex + index} id={startIndex + index} {...certification} />
                ))}
            </div>
            <Stack spacing={2} justifyContent="center" mt={3}>
                <Pagination
                    count={Math.ceil(certificationList.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handleChangePage}
                />
            </Stack>
        </div>
    );
};

export default Certifications;
