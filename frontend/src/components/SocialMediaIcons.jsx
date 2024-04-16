import React from "react";
import { Popover } from "antd";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai"
import { SiGitbook, SiBitcoin } from "react-icons/si";
import DonationCard from "../components/DonationCard";
import CustomModalButton from "../components/CustomModalButton";
import { openInNewTab } from "../utils/utils.js"

const donationIconContent = (
    <div>
        <p>All project in this site is open-source and fully design by me.</p>
        <p>Feel free to clone and contribute me some code or crypto!</p>
    </div>
);

const SocialMediaIcons = () => {

    return (
        <div>
            <AiOutlineMail
                className="icon-social"
                style={{ bottom: "250px", right: "40px" }}
                onClick={() => openInNewTab("")}
            />
            <AiFillLinkedin
                className="icon-social"
                style={{ bottom: "200px", right: "40px" }}
                onClick={() => openInNewTab("https://www.linkedin.com/in/0xthejb/")}
            />
            <SiGitbook
                className="icon-social"
                style={{ bottom: "150px", right: "40px" }}
                onClick={() => openInNewTab("https://thejb.gitbook.io/core")}
            />
            <AiFillGithub
                className="icon-social"
                style={{ bottom: "100px", right: "40px" }}
                onClick={() => openInNewTab("https://github.com/bondzai")}
            />
            <CustomModalButton
                buttonText="Buy me a coffee"
                title="Buy me a coffee"
                content={<DonationCard />}
                icon={
                    <Popover placement="left" title={"Buy me a coffee."} content={donationIconContent} >
                        <SiBitcoin className="icon-social" style={{ bottom: "50px", right: "40px" }}/>
                    </Popover>
                }
                hideButtons
            />
        </div>
    );
};

export default SocialMediaIcons;
