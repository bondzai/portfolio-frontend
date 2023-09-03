import axios from 'axios';
import { BACKEND_URLS } from './urls/urls.js';

const getRoadmapList = async () => {
    const urls = BACKEND_URLS.map(url => url + "/roadmap/");
    
    for (let url of urls) {
        try {
            const response = await axios.get(url);
            return response.data.sort((a, b) => b.id - a.id);
        } catch (error) {
            console.error(`Error with URL ${url}: ${error}`);
        }
    }
    throw new Error('All backend services are unavailable.');
};

export { getRoadmapList }

export const years = [
    {
        label: '2022',
        key: '2022',
    },
    {
        label: '2023',
        key: '2023',
    },
];

export const columns = [
    {
        title: 'Ideas',
        icon: 'TipsAndUpdatesIcon',
    },
    {
        title: 'Todo',
        icon: 'ListAltIcon',
    },
    {
        title: 'Focusing',
        icon: 'RiFocus3Fill',
    },
    {
        title: 'Done',
        icon: 'TaskAltIcon',
    },
];
