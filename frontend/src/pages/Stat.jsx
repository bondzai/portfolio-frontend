import React, { useState, useEffect } from "react";

import SpinComponent from "../components/SpinComponent";
import WakaTimeStats from "../components/Wakatime";

// import "../styles/Certifications.css";

const Stat = () => {
    return (
        <div className="stat">
            <WakaTimeStats />
        </div>
    );
};

export default Stat;
