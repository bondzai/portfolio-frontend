import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CertificationList } from "../apis/CertificationList";
import "../styles/CertificationDisplay.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const CertificationDisplay = () => {
    let { id } = useParams();
    const [current, setCurrent] = useState(id)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 37) {
                slideBack();
            } else if (event.keyCode === 39) {
                slideForward();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [current]);

    const slideBack = () => {
        if (current === 0) {
            setCurrent(CertificationList.length - 1)
        } else {
            setCurrent(parseInt(current) - 1)
        }
    }
    const slideForward = () => {
        if (current === CertificationList.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(parseInt(current) + 1)
        }
    }
    id = current;

    return (
        <div className="certification-display" >
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AiOutlineArrowLeft className="arrow-left" onClick={slideBack} />
                <img src={CertificationList[id].image} alt={CertificationList[id].name} />
                <AiOutlineArrowRight className="arrow-right" onClick={slideForward} />
            </Modal>
        </div>
    )
}

export default CertificationDisplay;
