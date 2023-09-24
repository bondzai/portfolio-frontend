import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { Empty } from 'antd';

import { AiFillStar } from 'react-icons/ai';

import { openInNewTab, getLampStatusStyle, getHighlightStatusStyle } from '../../utils/utils';

import { LabPropsType } from "../../types"

const LabCard: FC<LabPropsType> = ({ data }) => {
    const navigate = useNavigate();

    const lampStatusStyle = getLampStatusStyle(data.status);
    const highlightStatusStyle = getHighlightStatusStyle(data.is_highlight);

    return (
        <div className="projectItem">
            {data.is_highlight && (
                <div className="highlightIcon" style={highlightStatusStyle}>
                    <AiFillStar size={30} />
                </div>
            )}
            {data.image_url ? (
                <div style={{ backgroundImage: `url(${data.image_url})` }} className="bgImage" />
            ) : (
                <Empty className="bgImage" />
            )}
            <h1> {data.name} </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button onClick={() => navigate('/project/' + data.id)}> Detail </button>
                    <button onClick={() => openInNewTab(data.host_url)}> Demo </button>
                    <div style={lampStatusStyle} />
                </div>
            </div>
            <div>
                <small>{data.is_sleep && <> *Automatically sleep after after a period of inactivity. </>}</small>
            </div>
        </div>
    );
};

export default LabCard;
