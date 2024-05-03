import React from "react";
import { useLocation } from "react-router-dom";
import Counter from "../../components/Counter";
import "./Footer.css"

const Footer = () => {
    const location = useLocation();
    const paths = ["/experience", "/skills", "/projects", "/certifications"];

    const isRender = () => {
        return !paths.includes(location.pathname);
    };

    return (
        <div className="footer">
            <Counter />
            {/* {isRender() && ( */}
            {/* )} */}
        </div>
    );
};

export default Footer;
