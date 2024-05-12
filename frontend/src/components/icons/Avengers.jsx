import React from 'react';
import { Avatar, Tooltip } from 'antd';
import { openInNewTab } from "../../utils/utils.js";
import { avengers } from '../../apis/rest/Heroes.js';

const Avenger = ({ avatar, title, repoUrl, url, description }) => {
    return (
        <div style={{ cursor: "pointer" }}>
            <Tooltip title={title}>
                <Avatar size={40} src={avatar} onClick={() => openInNewTab(repoUrl)} />
            </Tooltip>
        </div>
    );
};

const Avengers = () => {
    return (
        <div style={{ display: "flex", marginTop: "30px", marginBottom: "20px" }}>
            {Object.values(avengers).map((avenger) => (
                <Avenger 
                    key={avenger.title} 
                    avatar={avenger.avatar} 
                    title={avenger.title} 
                    repoUrl={avenger.repoUrl} 
                    url={avenger.url} 
                    description={avenger.description} 
                />
            ))}
        </div>
    );
}

export default Avengers;
