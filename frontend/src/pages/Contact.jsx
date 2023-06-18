import React, { useState } from "react";
import Github from '../components/Github';
import Typewriter from 'typewriter-effect';

import "../styles/Contact.css";

const Contact = () => {
    const [linkClicked, setLinkClicked] = useState(false);

    return (
        <div className="background">
            <div className="contact">
                <div className="content">

                    <p> <strong>Github :</strong> <a
                        href="https://github.com/introbond"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClicked ? "grey-link" : "white-link"}
                    >https://github.com/introbond</a></p>


                    <p> <strong>Replit :</strong> <a
                        href="https://replit.com/@introbond"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClicked ? "grey-link" : "white-link"}
                    >https://replit.com/@introbond</a></p>

                    <p> <strong>Dockerhub :</strong> <a
                        href="https://hub.docker.com/u/introbondocker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClicked ? "grey-link" : "white-link"}
                    >https://hub.docker.com/u/introbondocker</a></p>

                    <p> <strong>Facebook :</strong> <a
                        href="https://www.facebook.com/jamesbond.puri.1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClicked ? "grey-link" : "white-link"}
                    >https://www.facebook.com/jamesbond.puri.1</a></p>

                    <p> <strong>Email :</strong> <a
                        href="mailto:introbond.dev@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClicked ? "grey-link" : "white-link"}
                    >introbond.dev@gmail.com</a></p>
                </div>

                <div className="github">
                    <Github />
                </div>

                <div className="typewriter">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.start()
                                .typeString('Still finding myself.')
                                .pauseFor(10)
                                .typeString('<strong>     - James Bond </strong>')
                        }}
                    />
                </div>

                <p> &copy; JB </p>

            </div>
        </div>
    );
};

export default Contact;
