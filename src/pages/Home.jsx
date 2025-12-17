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
                <LazyLoadImage
                    src={isHovered ? hoverProfileImageURL : profileImageURL}
                    alt="profile"
                    effect="blur"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
                <div className="prompt">
                    <h3> Hi, I am James-Bond. </h3>
                    <p> <strong>  Architect | Engineer | Builder </strong> </p>
                    <p> “Clean, simple, & high-quality solution <br /> always sparks joy in my blood.” </p>
                </div>
                <Typewriter
                    options={{
                        strings: [
                            "<strong>GROWTH MINDSET</strong>",
                            "<strong>GRIT</strong>",
                            "<strong>SELF-ACTUALIZATION</strong>",
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
