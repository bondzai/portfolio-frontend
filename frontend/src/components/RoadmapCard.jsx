import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton } from 'antd';

const RoadmapCard = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    
    useEffect(() => {
        loadMoreData();
    }, []);

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
            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 50}
                loader={
                    <Skeleton
                        avatar
                        paragraph={{
                            rows: 1,
                        }}
                        active
                    />
                }
                endMessage={<Divider plain>It is all, nothing more</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                size='large'
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item key={item.email}
                            extra=""
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description={item.email}
                            />
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    );
};

export default RoadmapCard;
