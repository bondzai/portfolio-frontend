import axios from "axios";

const WAKATIME_API_URL = "https://wakatime.com/api/v1/users/current/stats/all_time";

/**
 * Transforms Wakatime API response items to chart format
 * @param {Array} items - Array of items from Wakatime API (languages, editors, operating_systems)
 * @returns {Array} Transformed array with value, name, and text properties
 */
const transformChartData = (items = []) => {
    return items.map(item => ({
        value: item.percent,
        name: item.name,
        text: item.text,
    }));
};

/**
 * Transforms Wakatime API response to component-expected format
 * @param {Object} apiResponse - Raw response from Wakatime API
 * @returns {Object} Transformed data object
 */
const transformWakatimeResponse = (apiResponse) => {
    const { data } = apiResponse;
    
    return {
        human_readable_total_including_other_language: data.human_readable_total_including_other_language,
        operating_systems: data.operating_systems || [],
        editors: data.editors || [],
        languages: data.languages || [],
    };
};

/**
 * Fetches all-time stats from Wakatime API
 * @returns {Promise<Object>} Transformed Wakatime stats data
 * @throws {Error} If API key is missing or API request fails
 */
const getWakatimeStats = async () => {
    const apiKey = import.meta.env.VITE_WAKATIME_API_KEY;
    
    if (!apiKey) {
        throw new Error("Wakatime API key is missing. Please set VITE_WAKATIME_API_KEY in your .env file.");
    }

    try {
        const response = await axios.get(WAKATIME_API_URL, {
            headers: {
                Authorization: `Basic ${btoa(apiKey + ':')}`,
            },
            timeout: 10000,
        });

        return transformWakatimeResponse(response);
    } catch (error) {
        if (error.response) {
            throw new Error(`Wakatime API error: ${error.response.status} - ${error.response.data?.message || error.message}`);
        } else if (error.request) {
            throw new Error("Unable to reach Wakatime API. Please check your internet connection.");
        } else {
            throw new Error(`Error fetching Wakatime stats: ${error.message}`);
        }
    }
};

export { getWakatimeStats, transformChartData };
