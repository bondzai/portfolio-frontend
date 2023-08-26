import React from "react";
import Typewriter from 'typewriter-effect';
import SocialMediaIcons from "../components/SocialMediaIcons";
import WakatimeStat from "../components/WakatimeStats";
import Github from '../components/Github';
import "../styles/Stats.css";

const Stats = () => {

    return (
        <div className="stats-background">
            <div className="stats-content">

                <div className="stats-waka">
                    <WakatimeStat />
                </div>

                <div className="stats-github">
                    <Github />
                </div>

                <div className="typewriter">
                    <Typewriter
                        options={{
                            delay: 80,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .start()
                                .typeString('"To succeed, you must study the endgame before everything else." <br>')
                                .pauseFor(50)
                                .typeString('<br> <strong>     José Raúl Capablanca, </strong>')
                                .pauseFor(50)
                                .typeString('<strong>     Chess Grandmaster </strong>')
                                .start();
                        }}
                    />
                </div>

                <SocialMediaIcons/>

                <div className="footer">
                    <p> &copy; JB </p>
                </div>

            </div>

        </div>
    );
};

export default Stats;
