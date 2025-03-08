import axios from "axios";
import { CustomSortEnum } from "../../../utils/choices.js";

// Applies custom sort on the response data
const customSortResponse = (customSort, response) => {
    if (customSort === CustomSortEnum.DESCENDING) {
        return response.data.sort((a, b) => b.id - a.id);
    }
    // Default to ASCENDING or no sort
    return response.data;
};

// Helper function to fetch data from multiple URLs
const fetchFromUrls = async (urls, headers, defaultData, transform, waitingTime = 3000) => {
    for (const url of urls) {
        try {
            const response = await axios.get(url, { headers, timeout: waitingTime });
            const result = transform(response);
            if (result !== undefined) {
                return result;
            }
        } catch (error) {
            // If a timeout, network error or ECONNABORTED occurs and defaultData is provided, return it
            if (
                (error.code === "ECONNABORTED" ||
                    error.message.toLowerCase().includes("timeout") ||
                    error.message.toLowerCase().includes("network error")) &&
                defaultData !== undefined
            ) {
                return defaultData;
            }
            // Otherwise, silently ignore and try the next URL
        }
    }
    // Fallback to defaultData if available
    if (defaultData !== undefined) {
        return defaultData;
    }
    throw new Error("All backend services are unavailable.");
};

// Fetch a list of items and apply optional custom sorting
export const getList = async ({ ...Props }) => {
    if (!Props.urls || Props.urls.length === 0 || !Props.endpoint) {
        throw new Error("Props.urls and Props.endpoint must be defined.");
    }

    const urls = Props.urls.map(url => url + Props.endpoint);
    const headers = import.meta.env.DEV
        ? { Authorization: `Bearer ${import.meta.env.VITE_DEV_TOKEN}` }
        : {};

    return await fetchFromUrls(urls, headers, Props.defaultData, (response) => {
        if (Array.isArray(response.data)) {
            return customSortResponse(Props.customSort, response);
        }
        // If response.data is not an array, try the next URL
        return undefined;
    }, Props.waitingTime);
};

// Fetch a single object from the provided URLs
export const getSingleObject = async ({ ...Props }) => {
    if (!Props.urls || Props.urls.length === 0 || !Props.endpoint) {
        throw new Error("Props.urls and Props.endpoint must be defined.");
    }

    const urls = Props.urls.map(url => url + Props.endpoint);
    const headers = import.meta.env.DEV
        ? { Authorization: `Bearer ${import.meta.env.VITE_DEV_TOKEN}` }
        : {};

    return await fetchFromUrls(urls, headers, Props.defaultData, (response) => response.data, Props.waitingTime);
};
