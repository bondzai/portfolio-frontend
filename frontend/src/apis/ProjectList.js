import axios from 'axios';

const getProjectList = (async () => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + "/projects/";
    try {
        const response = await axios.get(BACKEND_URL);
        return response.data.sort((a, b) => b.id - a.id);
    } catch (error) {
        console.error(error);
    };
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