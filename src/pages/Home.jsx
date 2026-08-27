import React, { useContext } from "react";
import { HoverContext } from "../contexts/HoverContext";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { profileImageURL, hoverProfileImageURL } from "../utils/constants";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Home.css";

const Home = () => {
    const { isHovered, setIsHovered } = useContext(HoverContext);

    return (
        <div className="home">
            <div className="about">
                <div
                    className="profile-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ position: 'relative', width: '180px', height: '180px', margin: '0 auto', zIndex: 1 }}
                >
                    <LazyLoadImage
                        src={isHovered ? hoverProfileImageURL : profileImageURL}
                        alt="profile"
                        effect="blur"
                        style={{ position: 'relative', borderRadius: '50%' }}
                    />
                </div>
                <div className="prompt">
                    <h3> Hi, I am Puritat Chamart (James-Bond). </h3>
                    <p> <strong> Staff Software Engineer · System Design </strong> </p>
                    <p> “Clean, simple, & high-quality solution <br /> always sparks joy in my blood.” </p>
                </div>
                <Typewriter
                    options={{
                        strings: [
                            "<strong>3,000+ REQ/SEC IN PRODUCTION</strong>",
                            "<strong>~260M REQUESTS/DAY AT PEAK</strong>",
                            "<strong>4 HOURS &rarr; 10 SECONDS</strong>",
                            "<strong>BACKEND SQUADS OF 5-7 ENGINEERS</strong>",
                        ],
                        autoStart: true,
                        loop: true,
                        escapeHtml: false,
                    }}
                />
            </div>
        </div>
    )
}

export default Home;
