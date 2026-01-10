import React from "react";
import { Layout } from "antd";
import Counter from "../../components/icons/Counter";
import Coppyright from "../../components/icons/Copyright";
import StatusIcons from "../../components/icons/StatusIcons";
import Watchers from "../../components/icons/Watchers";
import BrandIcon from "../../components/icons/BrandIcon";
import { Users } from "../../apis/websocket/Users";
import "./Footer.css";


const { Footer: AntFooter } = Layout;

const Footer = () => {
    const [activeUsersCount, , isConnected] = Users();

    return (
        <AntFooter className="footer">
            <div className="status-icons">
                <StatusIcons />
            </div>
            <Coppyright /> &nbsp; <Counter />
            <div className="footer-right-actions">
                <BrandIcon />
                <Watchers activeUsersCount={activeUsersCount} isConnected={isConnected} />
            </div>
        </AntFooter>
    );
};

export default Footer;
