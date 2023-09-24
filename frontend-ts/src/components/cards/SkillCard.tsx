import React from "react";
import { Tooltip } from "antd";
import { openInNewTab } from "../../utils/utils";

import { SkillCardType } from "../../types"

import "../../styles/Skills.css";

const SkillCard: React.FC<SkillCardType> = ({ data, topic }) => {
    const topicFilterd = data.filter((skill) => {
        return skill.topic === topic && skill.is_showing === true;
    });

    return (
        <div className="skill-list">
            {topicFilterd.map((item, index) => (
                <div className="skill" key={index}>
                    <Tooltip title={item.name}>
                        <button onClick={() => openInNewTab(item.url)}>
                            <img
                                src={item.image_url}
                                alt={item.name}
                                style={{ width: "50px", height: "auto" }}
                            />
                        </button>
                    </Tooltip>
                </div>
            ))}
        </div>
    );
};

export default SkillCard;
