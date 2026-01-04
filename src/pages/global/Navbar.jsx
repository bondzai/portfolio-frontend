import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeSwitcher from "../../components/buttons/ThemeSwitcher";
import DownloadResumeButton from "../../components/buttons/DownloadResumeButton";
import "./Navbar.css";


const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const location = useLocation();

    const toggleNavbar = () => {
        setExpandNavbar((prev) => !prev);
    };

    const handleLinkClick = (id) => {
        setExpandNavbar(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const sections = ["home", "experience", "skills", "projects", "certifications", "more"];
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "experience", label: "Exp" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "certifications", label: "Certs" },
        { id: "more", label: "More" },
    ];

    return (
        <div className="navbar">
            <div className="toggleButton">
                <button onClick={toggleNavbar}>
                    <GiHamburgerMenu />
                </button>
            </div>
            <div className={`links ${expandNavbar ? "open" : "closed"}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(link.id);
                        }}
                        className={activeSection === link.id ? "active" : ""}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
            <div className="nav-actions">
                <ThemeSwitcher />
                <DownloadResumeButton />
            </div>
        </div>
    );
};

export default Navbar;
