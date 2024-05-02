import React from "react";
import Counter from "../components/Counter";
import Cube from "../components/decorators/Cube.jsx"
import "../styles/HallofFame.css";

const HallofFame = () => {
    return (
        <div className="hof-background">
            <div>
                <Cube />
            </div>
            <div className="hof-footer">
                <div>
                    <Counter />
                </div>
            </div>
        </div>
    );
};

export default HallofFame;
