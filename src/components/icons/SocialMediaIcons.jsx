import React, { useState, useEffect } from "react";
import { Tooltip, Popover, Button } from "antd";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub, AiFillYoutube, AiOutlineShareAlt } from "react-icons/ai"
import { SiGitbook, SiBitcoin, SiWakatime } from "react-icons/si";
import DonationCard from "../cards/DonationCard.jsx";
import CustomModalButton from "../buttons/CustomModalButton.jsx";
import { openInNewTab } from "../../utils/utils.js"
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";

const SocialMediaIcons = () => {
    const { screenSize } = useScreenDimensions();
    const isMobile = screenSize === ScreenSize.XS;
    const [isOpen, setIsOpen] = useState(false);

    // Auto-show popover on mobile first connect
    useEffect(() => {
        if (isMobile) {
            setIsOpen(true);
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isMobile]);

    const handleOpenChange = (newOpen) => {
        setIsOpen(newOpen);
    };

    const iconStyle = {
        fontSize: "16px",
        color: "white",
        cursor: "pointer",
        transition: "all 0.3s ease"
    };

    const SocialContent = (
        <div style={{ display: "flex", gap: "15px", alignItems: "center", flexWrap: "wrap", justifyContent: "center", maxWidth: "200px" }}>
            <Tooltip title="https://www.linkedin.com/in/0xthejb" placement="top" getPopupContainer={() => document.body}>
                <span onClick={() => openInNewTab("https://www.linkedin.com/in/0xthejb")}>
                    <AiFillLinkedin
                        style={{ ...iconStyle, color: isMobile ? 'rgba(0,0,0,0.65)' : 'white' }}
                    />
                </span>
            </Tooltip>

            <Tooltip title="Mail" placement="top" getPopupContainer={() => document.body}>
                <span>
                    <AiOutlineMail
                        style={{ ...iconStyle, color: isMobile ? 'rgba(0,0,0,0.65)' : 'white' }}
                    />
                </span>
            </Tooltip>

            <Tooltip title="https://www.youtube.com/@VibeVanilla" placement="top" getPopupContainer={() => document.body}>
                <span onClick={() => openInNewTab("https://www.youtube.com/@VibeVanilla")}>
                    <AiFillYoutube
                        style={{ ...iconStyle, color: isMobile ? 'rgba(0,0,0,0.65)' : 'white' }}
                    />
                </span>
            </Tooltip>

            <Tooltip title="https://thejb.gitbook.io/core" placement="top" getPopupContainer={() => document.body}>
                <span onClick={() => openInNewTab("https://thejb.gitbook.io/core")}>
                    <SiGitbook
                        style={{ ...iconStyle, color: isMobile ? 'rgba(0,0,0,0.65)' : 'white' }}
                    />
                </span>
            </Tooltip>

            <Tooltip title="https://github.com/bondzai" placement="top" getPopupContainer={() => document.body}>
                <span onClick={() => openInNewTab("https://github.com/bondzai")}>
                    <AiFillGithub
                        style={{ ...iconStyle, color: isMobile ? 'rgba(0,0,0,0.65)' : 'white' }}
                    />
                </span>
            </Tooltip>

            <Tooltip title="https://wakatime.com/@bondzai" placement="topRight" getPopupContainer={() => document.body}>
                <span onClick={() => openInNewTab("https://wakatime.com/@bondzai")}>
                    <SiWakatime
                        style={{ ...iconStyle, color: isMobile ? 'rgba(0,0,0,0.65)' : 'white' }}
                    />
                </span>
            </Tooltip>

            <CustomModalButton
                buttonText="Buy me a coffee"
                title="Buy me a coffee"
                content={<DonationCard />}
                icon={
                    <Tooltip title="Buy me a coffee." placement="topRight" getPopupContainer={() => document.body}>
                        <span>
                            <SiBitcoin style={{ ...iconStyle, color: isMobile ? 'rgba(0,0,0,0.65)' : 'white' }} />
                        </span>
                    </Tooltip>
                }
                hideButtons
            />
        </div>
    );

    if (isMobile) {
        return (
            <Popover
                content={SocialContent}
                trigger="click"
                open={isOpen}
                onOpenChange={handleOpenChange}
                placement="topRight"
                overlayStyle={{ zIndex: 2000 }}
            >
                <Button
                    type="text"
                    icon={<AiOutlineShareAlt style={{ color: "white", fontSize: "16px" }} />}
                />
            </Popover>
        );
    }

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {SocialContent}
            {/* Note: Logic duplication here is tricky because of the color prop change for popover (white bg) vs footer (dark bg).
               Refactoring inner content to be cleaner. */}
        </div>
    );
};


export default SocialMediaIcons;
