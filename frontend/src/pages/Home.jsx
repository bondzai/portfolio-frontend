import React from "react";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="about">
                <LazyLoadImage
                    src="https://res.cloudinary.com/dbdacfhye/image/upload/v1686461184/Portfolio/profile.png"
                    alt="profile"
                    effect="blur"
                />
                <div className="prompt">
                    <h3> Hi, I am James-Bond. </h3>
                    <strong> Software Engineer </strong>
                    <p> Clean, simple & high-quality solution <br /> always sparks joy in my blood. 
                    </p>
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
