import { Space } from "antd";

import Typewriter from 'typewriter-effect';

import SocialMediaIcons from "../components/icons/SocialMediaIcons.js";
import WakatimeStat from "../components/WakatimeStats.js";
import Github from '../components/Github.js';

import "../styles/Stats.css";

const Stats = () => {

    return (
        <div className="stats-background">

            <div className="stats-content">
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>

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

                    <SocialMediaIcons />
                </Space>
            </div>

            <div className="footer">
                <div>
                    <p> &copy; JB, Running since October 23, 2022. </p>
                </div>
            </div>

        </div>
    );
};

export default Stats;
