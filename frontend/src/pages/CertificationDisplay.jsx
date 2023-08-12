import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

import { getCertificationList } from "../apis/CertificationList";
import "../styles/CertificationDisplay.css";


const CertificationDisplay = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [current, setCurrent] = useState(Number(id));
    const [dataList, setDataList] = useState([]);
    const [dataListFetched, setDataListFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCertificationList();
            setDataList(result);
            setDataListFetched(true);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { keyCode } = event;
            if (!dataListFetched) {
                return;
            }

            if (keyCode === 37) {
                slideBack();
            } else if (keyCode === 39) {
                slideForward();
            } else if (keyCode === 27) {
                closeModal();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [current, dataListFetched]);

    const slideForward = () => {
        setCurrent(prev => (prev === 1 ? dataList.length : prev - 1));
    };

    const slideBack = () => {
        setCurrent(prev => (prev === dataList.length ? 1 : prev + 1));
    };

    const closeModal = () => {
        navigate('/certifications');
    };

    const data = dataList.find(item => item.id === current);

    return (
        <div className="certification-display">
            {data && (
                <Modal open={true} onClose={closeModal}>
                    <Box
                        sx={{
                            position: 'relative',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            width: '60vw',
                            height: '100vh',
                            zIndex: '1000',
                            margin: 'auto',
                        }}
                    >
                        <IconButton
                            onClick={closeModal}
                            sx={{ position: 'absolute', right: '1rem', top: '0.5rem' }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <AiOutlineArrowLeft
                            className="arrow-left"
                            onClick={slideBack}
                            sx={{ position: 'absolute', left: '10px', top: '50vh' }}
                        />

                        <AiOutlineArrowRight
                            className="arrow-right"
                            onClick={slideForward}
                            sx={{ position: 'absolute', right: '10px', top: '50vh' }}
                        />

                        <Box
                            sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                        >
                            <img src={data.image_url} alt={data.name} className="certification-image" />
                        </Box>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default CertificationDisplay;