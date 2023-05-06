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

                {/* <div className="contact-form">
                    <Box className="contact-info" py={6}>
                        <h2> TEXT ME </h2>
                        <form target="_blank" action="https://formsubmit.co/c2e294745ff3985265b640a8e8e94e60" method="POST">
                            <FormControl>
                                <Input type="text" name="name" placeholder="Your Name" required />
                            </FormControl>
                            <FormControl>
                                <Input type="email" name="email" placeholder="Your Email Address" required />
                            </FormControl>
                            <FormControl>
                                <Textarea name="message" rows="6" placeholder="Your Message" required />
                            </FormControl>
                            <Button type="submit" colorScheme="blue">Send</Button>
                        </form>
                    </Box>
                </div> */}

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