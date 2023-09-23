import { FC } from 'react';
import { Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { getLampStatusStyle, getHighlightStatusStyle } from './Status';
import { openInNewTab } from '../utils/utils';

interface Lab {
    id: number;
    name: string;
    language: string;
    status: string;
    is_highlight: boolean;
    is_sleep: boolean;
    image_url: string;
    host_url: string;
}

interface LabProps {
    lab: Lab
}

const Project: FC<LabProps> = ({ lab }) => {
    const navigate = useNavigate();

    const lampStatusStyle = getLampStatusStyle(lab.status);
    const highlightStatusStyle = getHighlightStatusStyle(lab.is_highlight);

    return (
        <div className="projectItem">
            {lab.is_highlight && (
                <div className="highlightIcon" style={highlightStatusStyle}>
                    <AiFillStar size={30} />
                </div>
            )}
            {lab.image_url ? (
                <div style={{ backgroundImage: `url(${lab.image_url})` }} className="bgImage" />
            ) : (
                <Empty className="bgImage" />
            )}
            <h1> {lab.name} </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button onClick={() => navigate('/project/' + lab.id)}> Detail </button>
                    <button onClick={() => openInNewTab(lab.host_url)}> Demo </button>
                    <div style={lampStatusStyle} />
                </div>
            </div>
            <div>
                <small>{lab.is_sleep && <> *Automatically sleep after after a period of inactivity. </>}</small>
            </div>
        </div>
    );
};

export default Project;