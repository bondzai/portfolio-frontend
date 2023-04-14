import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CertificationList } from "../apis/CertificationList";
import "../styles/CertificationDisplay.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Modal, Box } from '@mui/material';

const CertificationDisplay = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // useNavigate hook from react-router-dom
    const [current, setCurrent] = useState(id);

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
        if (current === 0) {
            setCurrent(CertificationList.length - 1);
        } else {
            setCurrent(parseInt(current) - 1);
        }
    };

    const slideForward = () => {
        if (current === CertificationList.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(parseInt(current) + 1);
        }
    };

    const closeModal = () => {
        navigate('/certifications');
    }

    return (
        <div className="certification-display">
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
                        gap: '1rem',
                        flexDirection: 'column',
                        width: '50vw',
                        height: 'auto',
                    }}
                >
                    <AiOutlineArrowLeft className="arrow-left" onClick={slideBack} />
                    <img src={CertificationList[current].image} alt={CertificationList[current].name} />
                    <AiOutlineArrowRight className="arrow-right" onClick={slideForward} />
                </Box>
            </Modal>
        </div>
    );
};

export default CertificationDisplay;
