import axios from 'axios';

const getProjectList = (async () => {
    const BACKEND_URLS = [
        import.meta.env.VITE_BACKEND_URL1,
        import.meta.env.VITE_BACKEND_URL2,
    ].map(url => url + "/projects/");

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

export { getProjectList }


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
