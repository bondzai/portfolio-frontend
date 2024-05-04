import React from "react";
import Cube from "../components/decorators/Cube.jsx"
import "../styles/HallofFame.css";

const HallofFame = () => {
    const cubeStyle = {
        "size": "200px",
        "aura": "100px",
        "transform": "100px",
        "perspective": "800px",
    }

    return (
        <div className="hof-background">
            <div>
                <Cube {...cubeStyle}/>
            </div>
        </div>
    );
};

export default HallofFame;
