import { useState } from "react";


const useRotation = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        setRotation({
            x: -y / 20,
            y: x / 20
        });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return { rotation, handleMouseMove, handleMouseLeave };
};

export default useRotation;
