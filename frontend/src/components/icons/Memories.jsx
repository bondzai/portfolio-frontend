import React, { useEffect, useState } from "react";

const MemoryUsage = () => {
    const [memoryUsage, setMemoryUsage] = useState(null);

    useEffect(() => {
        const updateMemoryUsage = () => {
            if (performance && performance.memory) {
                const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
                const memoryUsedInMB = (usedJSHeapSize / (1024 * 1024)).toFixed(2);
                const totalMemoryInMB = (totalJSHeapSize / (1024 * 1024)).toFixed(2);
                setMemoryUsage(`${memoryUsedInMB} MB / ${totalMemoryInMB} MB`);
            }
        };

        const interval = setInterval(updateMemoryUsage, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>Memory Usage:</p>
            <p>{memoryUsage}</p>
        </div>
    );
};

export default MemoryUsage;
