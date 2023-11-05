import React, { useState, useEffect } from "react";

import { Pagination, Stack } from '@mui/material';

import LabCard from "../components/cards/LabCard";
import { getProjectList } from "../apis/rest/endpoints";

import { LabType } from "../types";

import "../styles/Projects.css";

const Labs: React.FC = () => {
    const [projectList, setProjectList] = useState<LabType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const result: LabType[] = await getProjectList();
            setProjectList(result);
        };
        fetchData();
    }, []);

    const itemsPerPage = 6;
    const totalPageCount = Math.ceil(projectList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProjects = projectList.slice(startIndex, startIndex + itemsPerPage);

    const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="projects">
            <div className="projectList">
                {visibleProjects.map((project, index) => (
                    <LabCard key={index} data={project} />
                ))}
            </div>
            <Stack spacing={2} justifyContent="center" mt={3}>
                <Pagination
                    count={totalPageCount}
                    page={currentPage}
                    onChange={handleChangePage}
                />
            </Stack>
        </div>
    );
};

export default Labs;
