import React from "react";
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import WakatimeStat from "../components/WakatimeStats";
import Github from '../components/Github';
import "../styles/Stats.css";

const Stats = () => {

    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer')
    }

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

                <MailIcon className="icon-social-mail" onClick={() => openInNewTab('')} />
                <FacebookIcon className="icon-social-facebook" onClick={() => openInNewTab('')} />
                <LinkedInIcon className="icon-social-linkedin" onClick={() => openInNewTab('')} />
                <GitHubIcon className="icon-social-github" onClick={() => openInNewTab('https://github.com/introbond')} />

                <div className="footer">
                    <p> &copy; JB </p>
                </div>

            </div>

        </div>
    );
};

export default Stats;
