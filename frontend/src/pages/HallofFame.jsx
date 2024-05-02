import React from "react";
import Counter from "../components/Counter";
import "../styles/Stats.css";

const HallofFame = () => {
    return (
        <div className="background">
            <div className="footer">
                <div>
                    <Counter />
                </div>
            </div>
        </div>
    );
};

export default HallofFame;
