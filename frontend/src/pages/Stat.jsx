import React, { useState, useEffect } from "react";

import WakatimeStat from "../components/WakatimeStat";
import Github from '../components/Github';

import "../styles/Stat.css";

const Stat = () => {
    return (
        <div className="stat-background">
            <div className="stat-content">
                <div className="stat-waka">
                    <WakatimeStat />
                </div>
                <div className="stat-github">
                    <Github />
                </div>
            </div>
        </div>
    );
};

export default Stat;
