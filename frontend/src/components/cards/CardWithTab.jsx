import React, { useState } from "react";
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
                tabList={tabList}
                activeTabKey={activeTabKey}
                onTabChange={onTab1Change}
            >
                {contentList[activeTabKey]}
            </Card>
        </>
    );
};

export default CardWithTab;
