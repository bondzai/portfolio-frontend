import { gql } from "graphql-tag";

export const GET_TRACKS_FOR_HOME = gql`
    query GetTracksForHome {
        tracksForHome {
        id
        title
        thumbnail
        length
        modulesCount
        author {
            id
            name
            photo
        }
        }
    }
`;
