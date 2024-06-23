import React from 'react';
import { Avatar } from 'antd';
import versionData from "../../version.json";

const BrandIcon = () => (
    <>
        <div style={{position: 'fixed', left: "3px", top:"5px", color: "whitesmoke"}}>
            <Avatar 
                size={40}
                src={<img src={"https://avatars.githubusercontent.com/u/108642001?v=4"}/>}
            />
        </div>
        <div style={{position: 'fixed', left: "45px", top:"5px", color: "whitesmoke", fontSize: "12px"}}>
            <small> V:{versionData.version} </small>
        </div>
    </>
);

export default BrandIcon;
