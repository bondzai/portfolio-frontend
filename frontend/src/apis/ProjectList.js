import axios from 'axios';
import { BACKEND_URLS } from './urls/urls.js';

const getProjectList = (async () => {
    const urls = BACKEND_URLS.map(url => url + "/projects/");

    for (let url of urls) {
        try {
            const response = await axios.get(url);
            return response.data.sort((a, b) => b.id - a.id);
        } catch (error) {
            console.error(`Error with URL ${url}: ${error}`);
        }
    }
    throw new Error('All backend services are unavailable.');
});

export { getProjectList }

export const statusOptions = [
    { value: "", label: "all" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "inprogress", label: "In progress" }
];

export const columns = [
    { field: 'id', headerName: 'id', width: 90 },
    {
        field: 'name',
        headerName: 'name',
        width: 250,
    },
    {
        field: 'language',
        headerName: 'language',
        width: 120,
    },
    {
        field: 'status',
        headerName: 'status',
        width: 120,
    },
];
