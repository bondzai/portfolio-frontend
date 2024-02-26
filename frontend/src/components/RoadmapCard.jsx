import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Divider, List, Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { convertSubTasksToTree } from "../utils/utils.js";

const RoadmapCard = ({ data }) => {
    return (
        <div
            id="scrollableDiv"
            style={{
                height: 550,
                overflow: "auto",
                padding: "0 12px",
                border: "1px solid rgba(140, 140, 140, 0.35)",
                borderRadius: "5px",
            }}
        >
            <InfiniteScroll
                dataLength={data.length}
                hasMore={data.length < 50}
                endMessage={<Divider plain>It is all, nothing more</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    size="large"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item key={item._id}>
                            <List.Item.Meta
                                avatar={
                                    item.image ? (<Avatar src={item.image} />) : (<Avatar>N/A</Avatar>)
                                }
                                title={<a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                                description={
                                    Object.keys(item.sub_tasks).length > 0 ? (
                                        <Tree
                                            showLine
                                            switcherIcon={<DownOutlined />}
                                            treeData={convertSubTasksToTree(item.sub_tasks)}
                                        />
                                    ) : item.description
                                }
                            />
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    );
};

export default RoadmapCard;
