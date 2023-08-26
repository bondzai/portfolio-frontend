import axios from 'axios';

const getRoadmapList = (async () => {
    const BACKEND_URLS = [
        import.meta.env.VITE_BACKEND_URL1,
        import.meta.env.VITE_BACKEND_URL2,
    ].map(url => url + "/roadmap/");

    for (let url of BACKEND_URLS) {
        try {
            const response = await axios.get(url);
            return response.data.sort((a, b) => b.id - a.id);
        } catch (error) {
            console.error(`Error with URL ${url}: ${error}`);
        }
    }
    throw new Error('All backend services are unavailable.');
});

export { getRoadmapList }

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