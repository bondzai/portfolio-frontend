import React from 'react';
import { Avatar, Tooltip } from 'antd';
import { openInNewTab } from "../../utils/utils.js";


const Avengers = ({avatar, title, repoUrl, url, description}) => {
    url = "https://avatars.githubusercontent.com/u/108642001?v=4";
    repoUrl = url;
    return (
        <Tooltip title={repoUrl}>
        <Avatar size={40} src={<img src={url}/>} onClick={() => openInNewTab(repoUrl)} />
        </Tooltip>
    );
};

export default Avengers;
