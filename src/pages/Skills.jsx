import React, { useState, useEffect, useCallback } from "react";
import SkillGroupWraper from "../components/cards/SkillGroup";
import SpinLoader from "../components/loaders/SpinLoader";
import { getSkillList } from "../apis/rest/Skill";
import { globalDelay } from "../utils/constants";
import { Responsive, WidthProvider } from "react-grid-layout";
import { FaCode, FaLayerGroup, FaDatabase, FaNetworkWired, FaTerminal, FaTools, FaRobot } from "react-icons/fa";
import useScreenDimensions, { ScreenSize } from "../hooks/useScreenDimensions";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./Skills.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const ROW_HEIGHT = 60;
const GRID_MARGIN = 20;
const MIN_ROWS = 2;

// Panel chrome that is not skill pills: borders, header, inner padding.
const PANEL_CHROME_HEIGHT = 88;
const PILL_HEIGHT = 48;
const PILL_GAP = 12;
// A panel is one column wide, which fits two pills per row.
const PILLS_PER_ROW = 2;

// A grid item of `h` rows is h * ROW_HEIGHT + (h - 1) * GRID_MARGIN pixels tall.
const pxToRows = (px) =>
    Math.max(MIN_ROWS, Math.ceil((px + GRID_MARGIN) / (ROW_HEIGHT + GRID_MARGIN)));

const estimatePanelHeight = (skillCount) => {
    const pillRows = Math.max(1, Math.ceil(skillCount / PILLS_PER_ROW));
    return PANEL_CHROME_HEIGHT + pillRows * PILL_HEIGHT + (pillRows - 1) * PILL_GAP;
};

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
    // Natural pixel height of each panel, reported once it has rendered.
    const [panelHeights, setPanelHeights] = useState({});
    // Rows the user asked for by dragging a resize handle.
    const [resizedRows, setResizedRows] = useState({});
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

    const handleMeasure = useCallback((id, height) => {
        setPanelHeights((previous) =>
            previous[id] === height ? previous : { ...previous, [id]: height }
        );
    }, []);

    const handleResizeStop = useCallback((_layout, _oldItem, newItem) => {
        setResizedRows((previous) => ({ ...previous, [newItem.i]: newItem.h }));
    }, []);

    // Generate layout from data
    const generateLayout = () => {
        return skillsData.map((item) => {
            const skillCount = skills.filter(skill => {
                if (!skill.is_showing) return false;
                if (Array.isArray(item.topic)) {
                    return item.topic.includes(skill.topic);
                }
                return skill.topic === item.topic;
            }).length;

            // Before a panel has been measured, estimate from the skill count so
            // the first paint is already close to the right size.
            const measuredHeight = panelHeights[item.i];
            const minH = pxToRows(
                measuredHeight === undefined ? estimatePanelHeight(skillCount) : measuredHeight
            );

            return {
                i: item.i,
                x: item.x,
                y: item.y,
                w: item.w,
                // Never smaller than the content: a shorter cell clips the last
                // row of skills against the panel border.
                h: Math.max(minH, resizedRows[item.i] || 0),
                minW: 1,
                maxW: 2,
                minH,
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
                rowHeight={ROW_HEIGHT}
                isDraggable={!isMobile}
                isResizable={!isMobile}
                onResizeStop={handleResizeStop}
                margin={[GRID_MARGIN, GRID_MARGIN]}
            >
                {skillsData.map((topic) => (
                    <div key={topic.i}>
                        <SkillGroupWraper topic={topic} skills={skills} onMeasure={handleMeasure} />
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
};

export default Skills;
