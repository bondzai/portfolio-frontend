import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCertificationList } from "../apis/CertificationList";
import "../styles/CertificationDisplay.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import { Modal, Box } from '@mui/material';

const CertificationDisplay = () => {
    let { id } = useParams();
    id = Number(id)
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

    const slideForward = () => {
        if (current <= 1) {
            setCurrent(certificationList.length);
        } else {
            setCurrent(parseInt(current) - 1);
        }
    };
    
    const slideBack = () => {
        console.log("This is current" + current)
        console.log("This cert len" + certificationList.length)
        // if (current >= certificationList.length) {
        if (current >= 7) {
            setCurrent(1);
        } else {
            setCurrent(parseInt(current) + 1);
        }
    };

    id = current;
    let cert = certificationList.find(item => item.id === id);

    const closeModal = () => {
        navigate('/certifications');
    }

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
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '10%' }}>
                            <AiOutlineClose className="close-icon" onClick={closeModal} />
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
