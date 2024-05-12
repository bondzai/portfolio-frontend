import React from "react";
import Counter from "../../components/icons/Counter";
import Coppyright from "../../components/icons/Copyright";
import StatusIcons from "../../components/icons/StatusIcons";
import Watchers from "../../components/icons/Watchers";
import { Users } from "../../apis/websocket/๊Users";
import "./Footer.css"


const Footer = () => {
    const [activeUsersCount] = Users();

    return (
        <div className="footer">
            <div className="status-icons">
                <StatusIcons />
            </div>
            <Coppyright /> &nbsp; <Counter />
            <Watchers activeUsersCount={activeUsersCount} />
        </div>
    );
};

export default Footer;
