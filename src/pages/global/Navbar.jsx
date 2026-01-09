import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeSwitcher from "../../components/buttons/ThemeSwitcher";
import "./Navbar.css";


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
                <button onClick={toggleNavbar}>
                    <GiHamburgerMenu />
                </button>
            </div>
            <div className={`links ${expandNavbar ? "open" : "closed"}`}>
                <Link to="/" onClick={handleLinkClick} className={activeLink === "" ? "active" : ""}>
                    Home
                </Link>
                <Link to="/about" onClick={handleLinkClick} className={activeLink === "about" ? "active" : ""}>
                    About
                </Link>
                <Link to="/experience" onClick={handleLinkClick} className={activeLink === "experience" ? "active" : ""}>
                    Exp
                </Link>
                <Link to="/skills" onClick={handleLinkClick} className={activeLink === "skills" ? "active" : ""}>
                    Skills
                </Link>
                <Link to="/projects" onClick={handleLinkClick} className={activeLink === "projects" ? "active" : ""}>
                    Projects
                </Link>
                <Link to="/certifications" onClick={handleLinkClick} className={activeLink === "certifications" ? "active" : ""}>
                    Certs
                </Link>
                <Link to="/more" onClick={handleLinkClick} className={activeLink === "more" ? "active" : ""}>
                    More
                </Link>
            </div>
            <ThemeSwitcher />
        </div>
    );
};

export default Navbar;
