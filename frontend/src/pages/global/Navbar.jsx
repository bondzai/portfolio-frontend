import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import '../../styles/Navbar.css';

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

    return (
        <div className="navbar">
            <div className="toggleButton">
            <h6> {activeLink} </h6>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
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
                <Link to="/projects" onClick={handleLinkClick} className={activeLink === "projects" ? "active" : ""}>
                    Lab
                </Link>
                <Link to="/certifications" onClick={handleLinkClick} className={activeLink === "certifications" ? "active" : ""}>
                    Certifications
                </Link>
                <Link to="/stats" onClick={handleLinkClick} className={activeLink === "stats" ? "active" : ""}>
                    Stats
                </Link>
                <Link to="/contact" onClick={handleLinkClick} className={activeLink === "contact" ? "active" : ""}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
