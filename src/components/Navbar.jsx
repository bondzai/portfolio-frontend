import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const toggleNavbar = () => {
        setExpandNavbar((prev) => !prev);
    };

    const handleLinkClick = (e) => {
        setActiveLink(e.target.innerText);
        setExpandNavbar(false);
    };

    return (
        <div className="navbar">
            <div className="toggleButton">
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
            <div className={`links ${expandNavbar ? "open" : "closed"}`}>
                <Link to="/" onClick={handleLinkClick} className={activeLink === "Home" ? "active" : ""}>
                    Home
                </Link>
                <Link to="/experience" onClick={handleLinkClick} className={activeLink === "Experience" ? "active" : ""}>
                    Experience
                </Link>
                <Link to="/skills" onClick={handleLinkClick} className={activeLink === "Skills" ? "active" : ""}>
                    Skills
                </Link>
                <Link to="/projects" onClick={handleLinkClick} className={activeLink === "Projects" ? "active" : ""}>
                    Projects
                </Link>
                <Link to="/certifications" onClick={handleLinkClick} className={activeLink === "Certifications" ? "active" : ""}>
                    Certifications
                </Link>
                <Link to="/contact" onClick={handleLinkClick} className={activeLink === "Contact" ? "active" : ""}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
