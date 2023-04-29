import axios from 'axios';

const getProjectList = (async () => {
    try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbw5LvdR-rN92zHfS7waUWub4OLY9oWvxEyovpFrvYuVmowMABhDobCtS-iJGuSH77ks/exec?action=readData');
        return response.data;
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
