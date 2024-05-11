import React, { useEffect, useState } from "react";
import { DatabaseOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';


export const MemoryUsage = () => {
    const [memoryUsage, setMemoryUsage] = useState(null);

    useEffect(() => {
        const updateMemoryUsage = () => {
            if (performance && performance.memory) {
                const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
                const memoryUsedInMB = (usedJSHeapSize / (1024 * 1024)).toFixed(2);
                const totalMemoryInMB = (totalJSHeapSize / (1024 * 1024)).toFixed(2);
                setMemoryUsage(`${memoryUsedInMB}/${totalMemoryInMB} MB`);
            }
        };

        const interval = setInterval(updateMemoryUsage, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ cursor: "default" }}>
            <Tooltip placement="top" title="Memory usage">
                <DatabaseOutlined className="status-icon" /> <small>{memoryUsage}</small>
            </Tooltip>
        </div>
    );
};
