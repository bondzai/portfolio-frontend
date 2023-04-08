import React from "react";
import Github from '../components/Github';
import Typewriter from 'typewriter-effect';
import IconGithub from "@material-ui/icons/GitHub";
import { SiReplit } from "react-icons/si";

import "../styles/Contact.css";

const Contact = () => {
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="background">
            <div className="contact">
                <h1> C O N T A C T </h1>
                <div className="contact-info">
                    <p> <strong> Name: </strong> James-Bond, Puritat Chamart</p>
                    <p> <strong> Social Media: </strong> </p>
                    <p> <strong> - GitHub: </strong> https://github.com/introbond </p>
                    <p> <strong> - Replit: </strong> https://replit.com/@introbond </p>
                    <p> <strong> - Email: </strong> introbond.dev@gmail.com </p>
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

                <div className="socialMedia">
                    <IconGithub onClick={() => openInNewTab('https://github.com/introbond')} />
                    <SiReplit onClick={() => openInNewTab('https://replit.com/@introbond')} />
                </div>

            </div>
        </div>
    );
};

export default Contact;