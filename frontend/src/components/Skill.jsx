import React from "react";

import { openInNewTab } from "../utils/utils.js";

import { Tooltip } from "antd";

const SkillItem = ({ ...skill }) => {
    return (
        <div className="skill">
            <div>
                <Tooltip title={skill.name}>
                    <button onClick={() => openInNewTab(skill.url)}>
                        <img
                            src={skill.image_url}
                            alt={skill.name}
                            style={{ width: "50px", height: "auto" }}
                        />
                    </button>
                </Tooltip>
            </div>
        </div>
    );
};

export default SkillItem;
