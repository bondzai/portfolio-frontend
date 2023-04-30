import axios from 'axios';

const getSkillList = (async () => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + "/skills/";
    try {
        const response = await axios.get(BACKEND_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    };
});

export { getSkillList }
