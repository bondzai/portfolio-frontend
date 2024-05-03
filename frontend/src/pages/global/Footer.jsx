import React from "react";
import { useLocation } from "react-router-dom";
import Counter from "../../components/Counter";
import "./Footer.css"

const Footer = () => {
    const location = useLocation();
    const excludedPaths = ["/experience", "/skills", "/projects", "/certifications"];

    const isRender = () => {
        return !excludedPaths.includes(location.pathname);
    };

    return (
        <div className="footer">
            {isRender() && (
                <div>
                    <p>
                        <Counter />
                    </p>
                </div>
            )}
        </div>
    );
};

export default Footer;
