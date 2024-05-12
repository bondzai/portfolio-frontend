import React from 'react';
import { Avatar, Tooltip, Row, Col } from 'antd';
import { openInNewTab } from "../../utils/utils.js";
import { avengers } from '../../apis/rest/Heroes.js';


const Avenger = ({ avatar, title, repoUrl}) => {
    const tooltipContent = (
        <div>
            {title}: ({repoUrl})
        </div>
    );

    return (
        <div style={{ cursor: "pointer", marginRight: "10px", marginBottom: "10px" }}>
             <Tooltip title={tooltipContent}>
                <Avatar size={40} src={avatar} onClick={() => openInNewTab(repoUrl)} />
            </Tooltip>
        </div>
    );
};

const Avengers = () => {
    return (
        <Row>
            <Col>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px"
                    }}>
                        {Object.values(avengers).map((avenger) => (
                            <Avenger 
                                key={avenger.title}
                                avatar={avenger.avatar}
                                title={avenger.title}
                                repoUrl={avenger.repoUrl}
                            />
                        ))}
                    </div>
            </Col>
        </Row>
    );
}

export default Avengers;
