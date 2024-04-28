import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Certification from "../components/Certification";
import SpinLoader from "../components/loaders/SpinLoader";
import { getCertificationList } from "../apis/rest/Certification";
import { globalDelay, itemsPerPage } from "../utils/constants";
import "../styles/Certifications.css";

const Certifications = () => {
    const [certificationList, setCertificationList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const maxWidth = 850
    const [isMobile, setIsMobile] = useState(window.innerWidth < maxWidth);

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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < maxWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleCertifications = certificationList.slice(startIndex, startIndex + itemsPerPage);

    if (isLoading) {
        return (
            <SpinLoader />
        );
    };

    return (
        <div className="certifications">
            <div className="certificationList">
            {
                isMobile ? (
                    certificationList.map((certification, index) => (
                        <Certification key={startIndex + index} id={startIndex + index} {...certification} />
                    ))
                ): (
                    visibleCertifications.map((certification, index) => (
                        <Certification key={startIndex + index} id={startIndex + index} {...certification} />
                    ))
                )
            }
            </div>
            {
                !isMobile && (
                    <Stack spacing={2} justifyContent="center" mt={3}>
                        <Pagination
                            count={Math.ceil(certificationList.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handleChangePage}
                        />
                    </Stack>
                )
            }
        </div>
    );
};

export default Certifications;
