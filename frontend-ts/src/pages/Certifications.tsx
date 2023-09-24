import React, { FC, useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CertificationCard from '../components/cards/CertificationCard';
import { getCertificationList } from '../apis/rest/endpoints';
import '../styles/Certifications.css';

import { CertificationType } from '../types/';

const Certifications: FC = () => {
    const itemsPerPage: number = 6;
    const [certificationList, setCertificationList] = useState<CertificationType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            const result: CertificationType[] = await getCertificationList();
            setCertificationList(result);
        };
        fetchData();
    }, []);

    const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
        setCurrentPage(newPage);
    };

    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const visibleCertifications: CertificationType[] = certificationList.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <div className="certifications">
            <div className="certificationList">
                {visibleCertifications.map((certification, index) => (
                    <CertificationCard key={startIndex + index} data={certification} />
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
