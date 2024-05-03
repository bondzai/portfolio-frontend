import React from "react";
import Cube from "../components/decorators/Cube.jsx"
import "../styles/HallofFame.css";

const HallofFame = () => {
    return (
        <div className="hof-background">
            <div>
                <Cube />
            </div>
        </div>
    );
};

export default HallofFame;
