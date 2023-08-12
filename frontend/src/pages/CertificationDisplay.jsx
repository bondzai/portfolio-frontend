import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCertificationList } from "../apis/CertificationList";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import "../styles/CertificationDisplay.css";

const CertificationDisplay = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [current, setCurrent] = useState(Number(id));
    const [certificationList, setCertificationList] = useState([]);
    const [certificationListFetched, setCertificationListFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCertificationList();
            setCertificationList(result);
            setCertificationListFetched(true);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { keyCode } = event;
            if (!certificationListFetched) {
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
    }, [current, certificationListFetched]);

    const slideForward = () => {
        setCurrent(prev => (prev === 1 ? certificationList.length : prev - 1));
    };

    const slideBack = () => {
        setCurrent(prev => (prev === certificationList.length ? 1 : prev + 1));
    };

    const closeModal = () => {
        navigate('/certifications');
    };

    const cert = certificationList.find(item => item.id === current);

    return (
        <div className="certification-display">
            {cert && (
                <Modal open={true} onClose={closeModal}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            width: '60vw',
                            height: 'auto',
                            zIndex: '1000',
                        }}
                    >
                        <Box sx={{ position: 'absolute', top: '2.5rem', right: '1rem' }}>
                            <IconButton onClick={closeModal}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <Box>
                            <AiOutlineArrowLeft className="arrow-left" onClick={slideBack} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                            <img src={cert.image_url} alt={cert.name} className="certification-image" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <AiOutlineArrowRight className="arrow-right" onClick={slideForward} />
                        </Box>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default CertificationDisplay;