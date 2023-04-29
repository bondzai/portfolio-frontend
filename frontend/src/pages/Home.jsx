import React from "react";

import Typewriter from 'typewriter-effect';
import "../styles/Home.css";

const Home = () => {

    return (
        <div className="home">
            <div className="about">
                <img src="https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/profile.png" alt="profile"/>
                <div className="prompt">
                    <h2> Hi, I am James-Bond. </h2> <h3> Software Engineer </h3>
                    <p> Clean, simple & high-quality code <br/> always sparks joy in my blood. </p>
                </div>
                <Typewriter
                        options={{
                            strings: ['GROWTH MINDSET', 'GRIT', 'SELF-ACTUALIZATION'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                <p> &copy; JB </p>
            </div>
        </div>
    )
}

export default Home;