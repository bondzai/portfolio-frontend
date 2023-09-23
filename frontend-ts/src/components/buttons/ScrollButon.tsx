import { FC } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

interface ScrollButtonProps {
    showScrollButton: boolean;
    scrollToTop: () => void;
    scrollToBottom: () => void;
}

const ScrollButton: FC<ScrollButtonProps> = ({
    showScrollButton,
    scrollToTop,
    scrollToBottom,
}) => {
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