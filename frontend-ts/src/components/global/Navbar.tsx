import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import "../../styles/Navbar.css";

const Navbar: React.FC = () => {
    const [expandNavbar, setExpandNavbar] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("");
    const location = useLocation();

    const toggleNavbar = () => {
        setExpandNavbar((prev: boolean) => !prev);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setActiveLink(e.currentTarget.innerText);
        setExpandNavbar(false);
    };

    useEffect(() => {
        setActiveLink(location.pathname.slice(1));
    }, [location]);

    // Conditionally render the development link if running on localhost
    const renderDevelopmentLink = () => {
        if (import.meta.env.DEV) {
            return (
                <Link to="/development" onClick={handleLinkClick} className={activeLink === "development" ? "active" : ""}>
                    Development
                </Link>
            );
        }
        return null; // Don't render the link in production
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
                    Experience
                </Link>
                <Link to="/skills" onClick={handleLinkClick} className={activeLink === "skills" ? "active" : ""}>
                    Skills
                </Link>
                <Link to="/labs" onClick={handleLinkClick} className={activeLink === "labs" ? "active" : ""}>
                    Labs
                </Link>
                <Link to="/certifications" onClick={handleLinkClick} className={activeLink === "certifications" ? "active" : ""}>
                    Certifications
                </Link>
                <Link to="/roadmap" onClick={handleLinkClick} className={activeLink === "roadmap" ? "active" : ""}>
                    Roadmap
                </Link>
                <Link to="/stats" onClick={handleLinkClick} className={activeLink === "stats" ? "active" : ""}>
                    Contact & More
                </Link>
                {renderDevelopmentLink()}
            </div>
        </div>
    );
};

export default Navbar;
