import React  from "react";
import PropTypes from "prop-types";
import './Cube.css';

const Cube = ({ size, aura, transform, perspective }) => {
    const dynamicStyle = {
        "--cube-size": size || "200px",
        "--cube-aura": aura || "100px",
        "--cube-transform": transform || "100px",
        "--cube-perspective": perspective || "800px",
    };

    return (
        <div class="cube-container" style={dynamicStyle}>
            <div class="cube">
                <div class="face front"></div>
                <div class="face back"></div>
                <div class="face right"></div>
                <div class="face left"></div>
                <div class="face top"></div>
                <div class="face bottom"></div>
            </div>
        </div>
    );
}

Cube.propTypes = {
    size: PropTypes.string,
    aura: PropTypes.string,
    transform: PropTypes.string,
    perspective: PropTypes.string,
};

export default Cube;
