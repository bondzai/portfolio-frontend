import { Empty, Card, Badge, Avatar, Tooltip } from "antd";
import { InfoCircleOutlined, PlayCircleOutlined, ExclamationCircleOutlined, StarFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { getLampStatusStyle } from "../StatusStyles.jsx";
import { openInNewTab } from "../../utils/utils.js";

const { Meta } = Card;

const Project = ({ ...project }) => {
    if (!project) return <Empty />;

    const navigate = useNavigate();

    const cover = project.image_url ? (
        <img
          alt={project.name}
          src={project.image_url}
          style={{ width: '100%', height: '120px', objectFit: 'cover' }}
        />
    ) : null;

    const actions = [
        <InfoCircleOutlined onClick={() => navigate(`/project/${project.id}`)} key="detail" />, 
        <PlayCircleOutlined onClick={() => openInNewTab(project.host_url)} key="demo" />, 
        <ExclamationCircleOutlined style={getLampStatusStyle(project.status)} key="status" />
    ];

    const description = project.is_sleep ? (
        <Tooltip title="Automatically sleep after a period of inactivity.">
            <span>*</span>
        </Tooltip>
    ) : null;

    const cardComponent = (
        <Card
            style={{ width: 320, height: 240, margin: '10px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
            cover={cover}
        >
            <div style={{ height: 'calc(100% - 120px)', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Meta
                    avatar={project.avatar ? <Avatar src={project.avatar} /> : null}
                    title={project.name}
                    description={description}
                />
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    {actions}
                </div>
            </div>
        </Card>
    );

    if (project.is_highlight) {
        return (
            <Badge.Ribbon text={<StarFilled />} color="blue">
                {cardComponent}
            </Badge.Ribbon>
        );
    }

    return cardComponent;
};

export default Project;
