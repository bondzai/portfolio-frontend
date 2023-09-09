import axios from 'axios';
import { CustomSortEnum } from '../../utils/choices.js';

const customSortResponse = (customSort, response) => {
    if (customSort === CustomSortEnum.DESCENDING) {
        return response.data.sort((a, b) => b.id - a.id);
    }

    if (customSort === CustomSortEnum.ASCENDING || !customSort) {
        return response.data;
    }
};

export const getList = async ({ ...Props }) => {
    if (!Props.urls || Props.urls.length === 0 || !Props.endpoint) {
        throw new Error('Props.urls and Props.endpoint must be defined.');
    }

    const urls = Props.urls.map(url => url + Props.endpoint);

    for (let url of urls) {
        try {
            const response = await axios.get(url, {
                headers: import.meta.env.DEV ? {
                    Authorization: `Bearer ${import.meta.env.VITE_DEV_TOKEN}`,
                } : {},
            });

            if (Array.isArray(response.data)) {
                return customSortResponse(Props.customSort, response);
            } else {
                console.error(`Error with URL ${url}: Response data is not an array.`);
            }
        } catch (error) {
            console.error(`Error with URL ${url}: ${error.message}`);
        }
    }

    throw new Error('All backend services are unavailable.');
};

export const getSingleObject = async ({ ...Props }) => {
    if (!Props.urls || Props.urls.length === 0 || !Props.endpoint) {
        throw new Error('Props.urls and Props.endpoint must be defined.');
    }

    const urls = Props.urls.map(url => url + Props.endpoint);

    for (let url of urls) {
        try {
            const response = await axios.get(url, {
                headers: import.meta.env.DEV ? {
                    Authorization: `Bearer ${import.meta.env.VITE_DEV_TOKEN}`,
                } : {},
            });

            return response.data;
        } catch (error) {
            console.error(`Error with URL ${url}: ${error.message}`);
        }
    }

    throw new Error('All backend services are unavailable.');
};
