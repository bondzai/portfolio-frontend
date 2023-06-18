import React from "react";
import Typewriter from 'typewriter-effect';
import "../styles/Home.css";

const Home = () => {

    return (
        <div className="home">
            <div className="about">
                <img src="https://res.cloudinary.com/dbdacfhye/image/upload/v1686461184/Portfolio/profile.png" alt="profile"/>
                <div className="prompt">
                    <h2> Hi, I am James-Bond. </h2> <h3> Software Engineer </h3>
                    <p> Clean, simple & high-quality solution <br/> always sparks joy in my blood. </p>
                </div>
                <Typewriter
                    options={{
                        strings: [
                            '<strong>GROWTH MINDSET</strong>',
                            '<strong>GRIT</strong>',
                            '<strong>SELF-ACTUALIZATION</strong>'
                        ],
                        autoStart: true,
                        loop: true,
                        escapeHtml: false,
                    }}
                />
                <p> &copy; JB </p>
            </div>
        </div>
    )
}

export default Home;
