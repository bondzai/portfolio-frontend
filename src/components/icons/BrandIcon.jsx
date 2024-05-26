import React from 'react';
import { Avatar } from 'antd';


const BrandIcon = () => (
    <div style={{position: 'fixed', left: "5px", top:"5px"}}>
        <Avatar 
            size={40}
            src={
                <img 
                    src={"https://avatars.githubusercontent.com/u/108642001?v=4"}
                />
            }
        />
    </div>
);

export default BrandIcon;
