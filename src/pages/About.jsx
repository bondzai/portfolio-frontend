import React from "react";
import DownloadResumeButton from "../components/buttons/DownloadResumeButton";
import "./About.css";

const ABOUT_CONTENT = [
    {
        id: 1,
        text: "I am a software engineer and technical founder focused on designing systems that work in the real world. My foundation is <strong>end-to-end system design</strong>—frontend, backend, infrastructure, and communication layers—with an emphasis on <strong>performance, simplicity, and long-term reliability</strong>."
    },
    {
        id: 2,
        text: "I have worked across a wide range of software systems, including <strong>microservices, high-load platforms, and real-time applications</strong>. I focus on simplifying complex problems into clean, scalable architectures—systems that are easy to reason about, resilient under pressure, and practical to operate at scale."
    },
    {
        id: 3,
        text: "I have hands-on experience <strong>integrating AI into production environments</strong>, including AI-as-a-service architectures. I approach AI as part of the infrastructure stack, carefully balancing capability with cost, latency, and operational constraints, and using it only where it delivers real value."
    },
    {
        id: 4,
        text: "I am the founder of <strong>Decentera</strong>, a long-term initiative centered on decentralized system design. I work with decentralization and blockchain as engineering tools—not ideologies—using them where they improve security, reduce single points of failure, and enable more resilient and transparent coordination. The focus is on real-world utility beyond finance."
    },
    {
        id: 5,
        text: "I continuously refine my thinking through <strong>self-directed R&D</strong>, writing micro-theses and internal whitepapers to test ideas before turning them into systems. This discipline keeps my work grounded and ensures that design decisions are driven by understanding rather than trend."
    },
    {
        id: 6,
        text: "I collaborate as a <strong>technical co-founder</strong> across multiple teams, contributing architecture, execution, and systems thinking without focus on visibility. My interests extend across economics, decentralized systems, software, and maintaining a healthy, disciplined lifestyle—believing that clear systems are built by clear minds."
    }
];

const About = () => {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-title">About Me</h1>
                    <div className="about-subtitle">
                        Greetings, Voyager. My name is <strong>Puritat Chamart</strong> (James-Bond).
                    </div>
                    <div className="about-resume-container">
                        <DownloadResumeButton />
                    </div>
                </div>
                
                <div className="about-content">
                    {ABOUT_CONTENT.map((paragraph) => (
                        <p 
                            key={paragraph.id} 
                            className="about-text-block"
                            dangerouslySetInnerHTML={{ __html: paragraph.text }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
