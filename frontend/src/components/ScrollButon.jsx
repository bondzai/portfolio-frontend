import React from "react";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"

const ScrollButton = ({ showScrollButton, scrollToTop, scrollToBottom }) => {
    return (
        <div className="scroll-buttons">
            <AiOutlineArrowUp
                className={`scroll-button ${showScrollButton ? "visible" : ""}`}
                onClick={scrollToTop}
            />
            <AiOutlineArrowDown
                className={`scroll-button ${!showScrollButton ? "hidden" : ""}`}
                onClick={scrollToBottom}
            />
        </div>
    );
};

export default ScrollButton;
