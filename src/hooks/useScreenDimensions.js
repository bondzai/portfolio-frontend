import { useEffect, useState } from "react";


export const ScreenSize = {
    XS: "xs",
    SM: "sm",
    MD: "md",
    LG: "lg",
    XL: "xl"
};

const getScreenSize = (width) => {
    if (width < 576) return ScreenSize.XS;
    if (width >= 576 && width < 768) return ScreenSize.SM;
    if (width >= 768 && width < 992) return ScreenSize.MD;
    if (width >= 992 && width < 1200) return ScreenSize.LG;
    return ScreenSize.XL;
};

const useScreenDimensions = () => {
    const [screenDimensions, setScreenDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const screenSize = getScreenSize(screenDimensions.width);

    return { ...screenDimensions, screenSize };
};

export default useScreenDimensions;
