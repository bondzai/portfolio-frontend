import React from 'react';
import versionData from "../../../package.json";

const BrandIcon = () => (
    <>
        <div style={{position: 'fixed', left: "10px", top:"15px", color: "whitesmoke", fontSize: "12px"}}>
            <small> V:{versionData.version} </small>
        </div>
    </>
);

export default BrandIcon;
