import axios from 'axios';

const getWakatimeStats = (async () => {
    const BACKEND_URLS = [
        import.meta.env.VITE_WAKA_BACKEND_URL,
    ].map(url => url + "/");

    for (let url of BACKEND_URLS) {
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
