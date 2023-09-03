import axios from 'axios';
import { BACKEND_URLS } from './urls/urls.js';

const getSkillList = (async () => {
    const urls = BACKEND_URLS.map(url => url + "/skills/");

    for (let url of urls) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(`Error with URL ${url}: ${error}`);
        }
    }
    throw new Error('All backend services are unavailable.');
});

export { getSkillList }