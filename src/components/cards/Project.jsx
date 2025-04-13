import { Empty, Card, Badge, Avatar, Tooltip } from "antd";
import {
    InfoCircleOutlined,
    PlayCircleOutlined,
    ExclamationCircleOutlined,
    StarFilled,
    MoonOutlined
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { getLampStatusStyle } from "../decorators/StatusStyles.jsx";
import { openInNewTab } from "../../utils/utils.js";

const { Meta } = Card;

const Project = ({ ...project }) => {
    if (!project) return <Empty />;

    // const navigate = useNavigate();

    const cover = project.image_url ? (
        <img
            alt={project.name}
            src={project.image_url}
            style={{ width: '100%', height: '120px', objectFit: 'cover' }}
        />
    ) : null;

    const actions = [
        // <InfoCircleOutlined onClick={() => navigate(`/project/${project.id}`)} key="detail" />,
        <PlayCircleOutlined onClick={() => openInNewTab(project.host_url)} key="demo" />,
        // <ExclamationCircleOutlined style={getLampStatusStyle(project.status)} key="status" />,
        project.is_sleep && (
            <Tooltip title="Automatically sleep after a period of inactivity." key="sleep">
                <MoonOutlined />
            </Tooltip>
        )
    ].filter(Boolean);

    const cardComponent = (
        <Card
            style={{ width: 320, height: 240, margin: '10px', borderRadius: '8px', overflow: 'hidden' }}
            cover={cover}
        >
            <div style={{ height: 'calc(100% - 120px)', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
                <Meta
                    avatar={project.avatar ? <Avatar src={project.avatar} /> : null}
                    title={project.name}
                    style={{ textAlign: 'center', width: '100%' }}
                />
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}
                >
                    {actions}
                </div>
            </div>
        </Card>
    );

    // if (project.is_highlight) {
    //     return (
    //         <Badge.Ribbon
    //             text={
    //                 <StarFilled style={{ fontSize: '12px', transform: 'translateY(2px)' }} />
    //             }
    //             color="blue"
    //             placement="end"
    //         >
    //             {cardComponent}
    //         </Badge.Ribbon>
    //     );
    // }

    return cardComponent;
};

export default Project;