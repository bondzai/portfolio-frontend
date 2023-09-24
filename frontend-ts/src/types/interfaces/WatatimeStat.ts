export interface WatatimeStatType {
    human_readable_total_including_other_language: string;
    operating_systems: {
        name: string;
        text: string;
        percent: number;
    }[];
    editors: {
        name: string;
        text: string;
        percent: number;
    }[];
    languages: {
        name: string;
        text: string;
        percent: number;
    }[];
}
