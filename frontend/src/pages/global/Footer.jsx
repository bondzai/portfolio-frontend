import React from "react";
import Counter from "../../components/Counter";
import StatusIcons from "../../components/icons/StatusIcons";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="status-icons">
                <StatusIcons />
            </div>
            <Counter />
        </div>
    );
};

export default Footer;
