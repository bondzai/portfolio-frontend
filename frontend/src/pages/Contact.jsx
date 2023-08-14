import React from "react";
import Github from '../components/Github';
import Typewriter from 'typewriter-effect';

import "../styles/Contact.css";

const linkStyles = "white-link";
const LinkWithStyle = ({ href, text }) => (
    <p>
        <strong>{text}</strong>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
        >
            {href}
        </a>
    </p>
);


const Contact = () => {
    return (
        <div className="background">
            <div className="contact">
                <div className="content">
                    <strong> Contact links </strong>
                    <LinkWithStyle
                        href="https://replit.com/@introbond"
                        text="Replit : "
                    />
                    <LinkWithStyle
                        href="https://github.com/introbond"
                        text="Github : "
                    />
                    <LinkWithStyle
                        href="https://hub.docker.com/u/introbondocker"
                        text="Dockerhub : "
                    />
                    <LinkWithStyle
                        href="introbond.dev@gmail.com"
                        text="Email : "
                    />
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

                <div className="footer">
                    <p> &copy; JB </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
