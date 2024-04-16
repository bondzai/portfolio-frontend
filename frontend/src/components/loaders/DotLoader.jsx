import React from "react";
import PropTypes from "prop-types";
import "../../styles/Loader.css";

const DotLoader = ({ customColor, customHeight}) => {
    const dynamicStyle = {
        "--custom-spin-color": customColor || "#1677ff",
        // "--custom-loader-height": customHeight || "100vh",
    };

    return (
        <div className="loader-container" style={dynamicStyle}>
            <div class="loader">
                <div class="circle">
                    <div class="dot"></div>
                    <div class="outline"></div>
                </div>
                <div class="circle">
                    <div class="dot"></div>
                    <div class="outline"></div>
                </div>
                <div class="circle">
                    <div class="dot"></div>
                    <div class="outline"></div>
                </div>
                <div class="circle">
                    <div class="dot"></div>
                    <div class="outline"></div>
                </div>
            </div>
        </div>
    );
};

DotLoader.propTypes = {
    customColor: PropTypes.string,
};

export default DotLoader;
