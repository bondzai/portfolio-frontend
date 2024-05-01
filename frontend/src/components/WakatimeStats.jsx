import React, { useState, useEffect } from "react";
import SpinLoader from "./loaders/SpinLoader";
import { getWakatimeStats } from "../apis/rest/WakatimeStats";
import { globalDelay } from "../utils/constants.js";
import "./Wakatime.css";
import PieChart from "../components/cards/Piechart.jsx";
import { Card } from 'antd';

const CardWithTab = ({tabList, contentList}) => {
    const [activeTabKey, setActiveTabKey] = useState(tabList[0].key || "");
    const onTab1Change = (key) => {
        setActiveTabKey(key);
    };

    return (
        <>
            <Card
                style={{width: '100%'}}
                extra={<a href="#">More</a>}
                tabList={tabList}
                activeTabKey={activeTabKey}
                onTabChange={onTab1Change}
            >
                {contentList[activeTabKey]}
            </Card>
        </>
    );
};

const WakatimeStats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getWakatimeStats();
                setStats(result);
            }, globalDelay);
        };
        fetchData();
    }, []);

    if (!stats) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100vh' }}>
                <SpinLoader customColor="whitesmoke" customHeight="330px" />
            </div>
        );
    };

    const os = stats.operating_systems.map(item => ({ value: item.percent, name: item.name, text: item.text }));
    const editor = stats.editors.map(item => ({ value: item.percent, name: item.name, text: item.text }));
    const language = stats.languages.map(item => ({ value: item.percent, name: item.name, text: item.text }));

    const tabList = [
        {
            key: 'os',
            tab: 'OS',
        },
        {
            key: 'editor',
            tab: 'Editor',
        },
        {
            key: 'languages',
            tab: 'Languages',
        },
    ];
    
    const contentList = {
        os: <PieChart data={os} title="OS"/>,
        editor: <PieChart data={editor} title="IDE"/>,
        languages: <PieChart data={language} title="Languages"/>,
    };

    return (
        <div className="wakatime-stats">
            <div className="wakatime-stats-title">
                <h4> 
                    Total coding time: {stats.human_readable_total_including_other_language}
                </h4>
            </div>
            <div className="wakatime-stats-full-chart">
                <PieChart data={os} title="OS"/>
                <PieChart data={editor} title="IDE"/>
                <PieChart data={language} title="Languages"/>
            </div>
            <div className="wakatime-stats-tab-chart">
                <CardWithTab tabList={tabList} contentList={contentList}/>
            </div>
        </div>
    );
};

export default WakatimeStats;
