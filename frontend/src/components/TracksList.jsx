import React from 'react';

import { useQuery } from '@apollo/client';

import { GET_TRACKS_FOR_HOME } from '../apis/graphql/queries';

function TracksList() {
    const { loading, error, data } = useQuery(GET_TRACKS_FOR_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { tracksForHome } = data;

    return (
        <div>
            <h1>Tracks</h1>
            <ul>
                {tracksForHome.map((track) => (
                    <li key={track.id}>
                        <p>Author: {track.id}</p>
                        {/* <h2>{track.title}</h2> */}
                        {/* <p>Author: {track.author.name}</p> */}
                        {/* <img src={track.thumbnail} alt={track.title} /> */}
                        {/* <p>Length: {track.length} seconds</p> */}
                        {/* <p>Modules Count: {track.modulesCount}</p> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TracksList;
