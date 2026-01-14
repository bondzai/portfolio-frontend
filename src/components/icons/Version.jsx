import React from "react";
import { BranchesOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import versionData from "../../../package.json";
import "./ServerStatus.css";

const Version = () => {
    return (
        <Tooltip title={versionData.changelog || `Version ${versionData.version}`} getPopupContainer={() => document.body}>
            <span className="version-display">
                <BranchesOutlined style={{ marginRight: '4px' }} />
                {versionData.version}
            </span>
        </Tooltip>
    );
};

export default Version;
