import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ScrollButton = ({ showScrollButton, scrollToTop, scrollToBottom }) => {
    return (
        <div className="scroll-buttons">
            <ArrowUpwardIcon
                className={`scroll-button ${showScrollButton ? "visible" : ""}`}
                onClick={scrollToTop}
            />
            <ArrowDownwardIcon
                className={`scroll-button ${!showScrollButton ? "hidden" : ""}`}
                onClick={scrollToBottom}
            />
        </div>
    );
};

export default ScrollButton;
