import React from "react";

const SkillItem = ({...skill}) => {
    const openInNewTab = (e) => {
        window.open(e, '_blank', 'noopener,noreferrer');
    };
    
    return (
        <div className="skill">
            <div>
                <button onClick={() => openInNewTab(skill.url)}> <img src={skill.image_url} alt={skill.name}/></button>
            </div>
        </div>
    );
};

export default SkillItem;