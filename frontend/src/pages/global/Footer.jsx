import React from "react";
import Counter from "../../components/icons/Counter";
import Coppyright from "../../components/icons/Copyright";
import StatusIcons from "../../components/icons/StatusIcons";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="status-icons">
                <StatusIcons />
            </div>
            <Coppyright /> &nbsp; <Counter />
        </div>
    );
};

export default Footer;
