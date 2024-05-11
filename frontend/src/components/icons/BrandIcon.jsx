import React from 'react';
import { Avatar } from 'antd';

const url = "https://avatars.githubusercontent.com/u/108642001?v=4";

const BrandIcon = () => (
    <div style={{position: 'fixed', left: "5px", top:"5px"}}>
        <Avatar 
            size={40}
            src={
                <img src={url} alt="avatar" />
            }
        />
    </div>
);

export default BrandIcon;
