import React from "react";
import { openInNewTab } from "../utils/utils.js"

const SkillItem = ({ ...skill }) => {
    
    return (
        <div className="skill">
            <div>
                <button onClick={() => openInNewTab(skill.url)}>
                    <img
                        src={skill.image_url}
                        alt={skill.name}
                        style={{ width: "50px", height: "auto" }}
                    />
                </button>
            </div>
        </div>
    );
};

export default SkillItem;
