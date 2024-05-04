import React, {useState, useEffect} from "react";
import { Popover } from "antd";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai"
import { SiGitbook, SiBitcoin } from "react-icons/si";
import DonationCard from "../components/cards/DonationCard";
import CustomModalButton from "../components/buttons/CustomModalButton";
import { openInNewTab } from "../utils/utils.js"

const donationIconContent = (
    <div>
        <p>All project in this site is open-source.</p>
        <p>Feel free to clone & contribute me some code or crypto!</p>
    </div>
);

const SocialMediaIcons = () => {
    const maxWidth = 850
    const [isMobile, setIsMobile] = useState(window.innerWidth < maxWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < maxWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let rightPosition = "40px";
    if (isMobile) {
        rightPosition = "5px";
    };

    return (
        <div>
            <AiOutlineMail
                className="icon-social"
                style={{ bottom: "250px", right: rightPosition }}
                onClick={() => openInNewTab("")}
            />
            <AiFillLinkedin
                className="icon-social"
                style={{ bottom: "200px", right: rightPosition }}
                onClick={() => openInNewTab("https://www.linkedin.com/in/0xthejb/")}
            />
            <SiGitbook
                className="icon-social"
                style={{ bottom: "150px", right: rightPosition }}
                onClick={() => openInNewTab("https://thejb.gitbook.io/core")}
            />
            <AiFillGithub
                className="icon-social"
                style={{ bottom: "100px", right: rightPosition }}
                onClick={() => openInNewTab("https://github.com/bondzai")}
            />
            <CustomModalButton
                buttonText="Buy me a coffee"
                title="Buy me a coffee"
                content={<DonationCard />}
                icon={
                    <Popover placement="left" title={"Buy me a coffee."} content={donationIconContent} >
                        <SiBitcoin className="icon-social" style={{ bottom: "50px", right: rightPosition }}/>
                    </Popover>
                }
                hideButtons
            />
        </div>
    );
};

export default SocialMediaIcons;
