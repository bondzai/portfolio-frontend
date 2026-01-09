import React from "react";
import DownloadResumeButton from "../components/buttons/DownloadResumeButton";
import "./About.css";

const About = () => {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-title">About Me</h1>
                    <div className="about-subtitle">Puritat Chamart (James-Bond)</div>
                </div>
                
                <div className="about-content">
                    <p className="about-text-block">
                        My passion lies at the intersection of <strong>Engineering</strong> and <strong>Economics</strong>. 
                        I thrive on building efficient systems and understanding how the world works, from the code level to the macro level.
                    </p>
                    
                    <p className="about-text-block">
                        I value <strong>Peace, Health, Minimalism, Nature, and Freedom</strong> above all else. 
                        These principles guide my life and my work, ensuring clarity and purpose in everything I do.
                    </p>

                    <p className="about-text-block">
                        I resonate with <strong>smart, calm, and honest people</strong> who respect my life and my time. 
                        Meaningful connections built on mutual respect are what I cherish most.
                    </p>
                </div>

                <div className="about-actions">
                    <DownloadResumeButton />
                </div>
            </div>
        </div>
    );
};

export default About;
