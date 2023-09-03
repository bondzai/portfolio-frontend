import axios from 'axios';
import { BACKEND_URLS } from './urls/urls.js';

const getCertificationList = (async () => {
    const urls = BACKEND_URLS.map(url => url + "/certifications/");

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

export { getCertificationList }
