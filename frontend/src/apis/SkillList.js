import axios from 'axios';

const MAX_RETRIES = 3;

const get = (url, n = 0) => axios.get(url).catch((error) => {
    if (n === MAX_RETRIES) {
        throw error;
    }
    return new Promise((resolve) => setTimeout(resolve, 1000)).then(() => get(url, n + 1));
});

const getSkillList = async () => {
    const BACKEND_URLS = [
        import.meta.env.VITE_BACKEND_URL1,
        import.meta.env.VITE_BACKEND_URL2,
    ].map((url) => `${url}/skills/`);

    const requests = BACKEND_URLS.map((url) => get(url));

    try {
        const responses = await Promise.allSettled(requests);

        const errorResponses = responses.filter(response => response.status === 'rejected');
        if (errorResponses.length > 0) {
            console.error('Error with one or more backend services: ', errorResponses.map(response => response.reason.message).join(', '));
        }

        return responses
            .filter(response => response.status === 'fulfilled')
            .map(response => response.value.data);
    } catch (error) {
        console.error('An unexpected error occurred:', error.message);
        throw new Error('All backend services are unavailable.');
    }
};

export { getSkillList };
