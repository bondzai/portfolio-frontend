import { useState, useEffect } from "react";


const useScrollEffect = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const behavior = "smooth"

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: behavior });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.offsetHeight, behavior: behavior });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { showScrollButton, scrollToTop, scrollToBottom };
};

export default useScrollEffect;
