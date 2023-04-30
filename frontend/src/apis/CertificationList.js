import axios from 'axios';

const getCertificationList = (async () => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + "/certifications/";
    try {
        const response = await axios.get(BACKEND_URL);
        return response.data.sort((a, b) => b.id - a.id);
    } catch (error) {
        console.error(error);
    };
});

export { getCertificationList }
