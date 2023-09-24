import { FC } from 'react';

import { List, Avatar, Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import type { DataNode } from 'antd/es/tree';
import { RoadmapTasksType } from "../../types/index";

const convertDataToTreeData = (data: RoadmapTasksType): DataNode[] => {
    const treeData: DataNode[] = [];

    data.data.forEach((task) => {
        const taskNode: DataNode = {
            title: task.title,
            key: task._id,
            children: [],
        };

        if (Object.keys(task.sub_tasks).length > 0) {
            const subTaskNode: DataNode = {
                title: 'Sub Tasks',
                key: `${task._id}-sub-tasks`,
                children: Object.entries(task.sub_tasks).map(([key, value]) => ({
                    title: value,
                    key: `${task._id}-${key}`,
                })),
            };

            taskNode.children?.push(subTaskNode);
        }

        treeData.push(taskNode);
    });

    return treeData;
};

const RoadmapCard: FC<RoadmapTasksType> = ({ data }) => {
    return (
        <div
            id="scrollableDiv"
            style={{
                height: 550,
                overflow: 'auto',
                padding: '0 12px',
                border: '1px solid rgba(140, 140, 140, 0.35)',
                borderRadius: '5px'
            }}
        >
            <List
                size="large"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item key={item._id}>
                        <List.Item.Meta
                            avatar={
                                item.image ? <Avatar src={item.image} /> : <Avatar>N/A</Avatar>
                            }
                            title={
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </a>
                            }
                            description={
                                Object.keys(item.sub_tasks).length > 0 ? (
                                    <Tree
                                        showLine
                                        switcherIcon={<DownOutlined />}
                                        treeData={convertDataToTreeData({ data: [item] })}
                                    />
                                ) : (
                                    item.description
                                )
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default RoadmapCard;
