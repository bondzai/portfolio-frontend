import React, { useState, useEffect } from "react";
import SkillGroupWraper from "../components/cards/SkillGroup";
import SpinLoader from "../components/loaders/SpinLoader";
import { getSkillList } from "../apis/rest/Skill";
import { globalDelay } from "../utils/constants";
import { Responsive, WidthProvider } from "react-grid-layout";
import { FaCode, FaLayerGroup, FaDatabase, FaNetworkWired, FaTerminal, FaTools, FaRobot } from "react-icons/fa";
import useScreenDimensions, { ScreenSize } from "../hooks/useScreenDimensions";
import "./Skills.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const skillsData = [
    { topic: "language", label: "Languages", i: "language", x: 0, y: 0, w: 1, h: 4, icon: <FaCode /> },
    { topic: ["frontend", "backend"], label: "Frameworks & Libraries", i: "frameworks", x: 1, y: 0, w: 1, h: 4, icon: <FaLayerGroup /> },
    { topic: "database", label: "Databases & Caches", i: "database", x: 2, y: 0, w: 1, h: 3, icon: <FaDatabase /> },
    { topic: "os", label: "OS", i: "os", x: 0, y: 5, w: 1, h: 2, icon: <FaTerminal /> },
    { topic: "commu", label: "Protocols & Communication Technologies", i: "commu", x: 1, y: 5, w: 1, h: 3, icon: <FaNetworkWired /> },
    { topic: "tools", label: "DevOps & Infrastructures", i: "tools", x: 2, y: 5, w: 1, h: 3, icon: <FaTools /> },
    { topic: "automation", label: "IoT & Automation Engineering Stuff", i: "automation", x: 0, y: 8, w: 1, h: 2, icon: <FaRobot /> },
];


const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { screenSize } = useScreenDimensions();
    const isMobile = screenSize === ScreenSize.XS;

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getSkillList();
                setSkills(result);
                setIsLoading(false);
            }, globalDelay);
        };
        fetchData();
    }, []);

    // Generate layout from data
    const generateLayout = () => {
        return skillsData.map((item) => {
            // Calculate height dynamically based on number of skills
            const skillCount = skills.filter(skill => {
                if (Array.isArray(item.topic)) {
                    return item.topic.includes(skill.topic);
                }
                return skill.topic === item.topic;
            }).length;

            // Estimation: Base header (1 unit) + content rows
            // Assume roughly 3 items per row, or standard height per item if wrapping
            // This is a heuristic: 1 unit + (count / 2) roughly
            let calculatedH = Math.ceil(skillCount / 3) + 1;
            if (calculatedH < 2) calculatedH = 2; // Min height

            return {
                i: item.i,
                x: item.x,
                y: item.y,
                w: item.w,
                h: calculatedH,
                minW: 1,
                maxW: 2,
            };
        });
    };

    // Recalculate layout when skills change
    const layout = generateLayout();
    const layouts = { lg: layout, md: layout, sm: layout };

    if (isLoading) {
        return <SpinLoader />;
    }

    return (
        <div className="skills">
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
                rowHeight={60}
                isDraggable={!isMobile}
                isResizable={!isMobile}
                margin={[20, 20]}
            >
                {skillsData.map((topic) => (
                    <div key={topic.i}>
                        <SkillGroupWraper topic={topic} skills={skills} />
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
};

export default Skills;
