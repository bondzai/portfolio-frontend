import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Watchers from "../../components/badges/Watchers";
import "./Navbar.css";

import { Statistic } from 'antd';
import CountUp from 'react-countup';


const formatter = (value) => <CountUp end={value} separator="," />;
const TotalUsers = ({totalUsersCount}) => (
    <Statistic title="Active Users" value={totalUsersCount} formatter={formatter} />
);

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const location = useLocation();

    const toggleNavbar = () => {
        setExpandNavbar((prev) => !prev);
    };

    const handleLinkClick = (e) => {
        setActiveLink(e.target.innerText);
        setExpandNavbar(false);
    };

    useEffect(() => {
        setActiveLink(location.pathname.slice(1));
    }, [location]);

    const [activeUsersCount, setActiveUsersCount] = useState(0);
    const [totalUsersCount, setTotalUsersCount] = useState(0);
    const wsUrl = import.meta.env.VITE_WS_URL;
    let ws;

    useEffect(() => {
        ws = new WebSocket(wsUrl);

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                let activeUsers = parseInt(data.activeUsers);
                if (!activeUsers || isNaN(activeUsers)) {
                    activeUsers = 0;
                }
                setActiveUsersCount(activeUsers);

                let totalUsers = parseInt(data.totalUsers);
                if (!totalUsers || isNaN(totalUsers)) {
                    totalUsers = 0;
                }
                setTotalUsersCount(totalUsers);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            ws.close();
        };
    }, []);

    const handleBeforeUnload = () => {
        ws.close();
    };

    return (
        <div className="navbar">
            <div className="toggleButton">
            <h6> {activeLink} </h6>
                <button onClick={toggleNavbar}>
                    <GiHamburgerMenu />
                </button>
            </div>
            <div className={`links ${expandNavbar ? "open" : "closed"}`}>
                <Link to="/" onClick={handleLinkClick} className={activeLink === "" ? "active" : ""}>
                    Home
                </Link>
                <Link to="/experience" onClick={handleLinkClick} className={activeLink === "experience" ? "active" : ""}>
                    Exp
                </Link>
                <Link to="/skills" onClick={handleLinkClick} className={activeLink === "skills" ? "active" : ""}>
                    Skills
                </Link>
                <Link to="/projects" onClick={handleLinkClick} className={activeLink === "projects" ? "active" : ""}>
                    Labs
                </Link>
                <Link to="/certifications" onClick={handleLinkClick} className={activeLink === "certifications" ? "active" : ""}>
                    Certs
                </Link>
                <Link to="/stats" onClick={handleLinkClick} className={activeLink === "stats" ? "active" : ""}>
                    Stats
                </Link>
                <Link to="/hof" onClick={handleLinkClick} className={activeLink === "hof" ? "active" : ""}>
                    Hall of Fame
                </Link>
            </div>
            <Watchers activeUsersCount={activeUsersCount} />
        </div>
    );
};

export default Navbar;
