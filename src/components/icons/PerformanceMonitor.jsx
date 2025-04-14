import React, { useEffect, useState } from "react";
import { DatabaseOutlined, SyncOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';


export const MemoryUsage = () => {
    const [memoryUsage, setMemoryUsage] = useState(null);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <React.Fragment>
                <DatabaseOutlined className="status-icon" /> <SyncOutlined className="status-icon" spin />
            </React.Fragment>
        );
    }

    return (
        <div style={{ cursor: "default" }}>
            <Tooltip placement="top" title="Memory usage">
                <DatabaseOutlined className="status-icon" /> <small>{memoryUsage}</small>
            </Tooltip>
        </div>
    );
};
