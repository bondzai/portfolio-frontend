import axios from 'axios';
import { WAKA_BACKEND_URL } from './urls/urls.js';

const getWakatimeStats = (async () => {
    const urls = WAKA_BACKEND_URL.map(url => url + "/");

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

export { getWakatimeStats }
