import React from 'react';
import { Avatar } from 'antd';
import versionData from "../../version.json";

const BrandIcon = () => (
    <div style={{position: 'fixed', left: "5px", top:"5px", color: "whitesmoke"}}>
        <Avatar 
            size={40}
            src={<img src={"https://avatars.githubusercontent.com/u/108642001?v=4"}/>}
        />
        <small> V:{versionData.version} </small>
    </div>
);

export default BrandIcon;
