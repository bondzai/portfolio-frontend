import React, { useEffect, useState } from "react";
import './Cube.css';

const Cube = () => {

    return (
        <div class="cube-container">
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

export default Cube;
