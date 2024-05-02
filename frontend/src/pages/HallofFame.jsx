import React from "react";
import Counter from "../components/Counter";
import Cube from "../components/decorators/Cube.jsx"
import "../styles/HallofFame.css";

const HallofFame = () => {
    return (
        <div className="background">
            <div>
                <Cube />
            </div>
            <div className="footer">
                <div>
                    <Counter />
                </div>
            </div>
        </div>
    );
};

export default HallofFame;
