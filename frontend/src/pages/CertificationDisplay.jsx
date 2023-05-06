import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCertificationList } from "../apis/CertificationList";
import "../styles/CertificationDisplay.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import { Modal, Box } from '@mui/material';

const CertificationDisplay = () => {
    let { id } = useParams();
    id = Number(id) - 1
    const navigate = useNavigate();
    const [current, setCurrent] = useState(id);
    const [certificationList, setCertificationList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCertificationList();
            setCertificationList(result);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 37) {
                slideBack();
            } else if (event.keyCode === 39) {
                slideForward();
            } else if (event.keyCode === 27) {
                closeModal();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [current]);

    const slideBack = () => {
        if (current <= 0) {
            setCurrent(certificationList.length - 1);
        } else {
            setCurrent(parseInt(current) - 1);
        }
    };

    const slideForward = () => {
        if (current === certificationList.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(parseInt(current) + 1);
        }
    };

    id = current;

    const closeModal = () => {
        navigate('/certifications');
    }

    return (
        <div className="certification-display">
            {certificationList.length > 0 && (
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
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '10%' }}>
                            <AiOutlineClose className="close-icon" onClick={closeModal} />
                        </Box>
                        <Box>
                            <AiOutlineArrowLeft className="arrow-left" onClick={slideBack} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                            <img src={certificationList[id].image_url} alt={certificationList[id].name} className="certification-image" />
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
