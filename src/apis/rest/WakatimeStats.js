import axios from "axios";



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
 * The backend has served this payload in two shapes: the all-time fields at the
 * top level (what it returns today), and a `{ all_time: { data } }` envelope
 * mirroring WakaTime's own API. Accept both so either shape renders.
 * @param {Object} apiResponse - Raw response body from the backend
 * @returns {Object} The object holding the all-time fields
 */
const unwrapAllTime = (apiResponse) => {
    if (apiResponse?.all_time?.data) return apiResponse.all_time.data;
    if (apiResponse?.all_time) return apiResponse.all_time;
    return apiResponse;
};

/**
 * Transforms Wakatime API response to component-expected format
 * @param {Object} apiResponse - Raw response from Wakatime API
 * @returns {Object} Transformed data object
 */
const transformWakatimeResponse = (apiResponse) => {
    const data = unwrapAllTime(apiResponse);

    return {
        human_readable_total_including_other_language: data.human_readable_total_including_other_language,
        human_readable_daily_average: data.human_readable_daily_average,
        human_readable_daily_average_including_other_language: data.human_readable_daily_average_including_other_language,
        operating_systems: data.operating_systems || [],
        editors: data.editors || [],
        languages: data.languages || [],
        summaries: apiResponse.summaries || [],
    };
};

/**
 * Fetches all-time stats from Wakatime API
 * @returns {Promise<Object>} Transformed Wakatime stats data
 * @throws {Error} If API key is missing or API request fails
 */
const getWakatimeStats = async () => {
    // Determine backend URL based on environment or default to localhost
    // For now assuming localhost:3000 or using relative path if proxy is set up.
    // Since this is a separate repo, I'll use the full URL.
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
    const url = `${BACKEND_URL}/api/wakatime`;

    try {
        const response = await axios.get(url, {
            timeout: 10000,
            withCredentials: true,
        });

        // Validate the unwrapped payload rather than an `all_time` envelope: the
        // backend returns the all-time fields at the top level, so keying the
        // check on `all_time` rejected every successful 200 response.
        const allTime = unwrapAllTime(response.data);
        if (!allTime || !Array.isArray(allTime.languages)) {
            console.warn(
                "Unexpected Wakatime payload; top-level keys:",
                Object.keys(response.data || {})
            );
            throw new Error("Wakatime stats not yet available (backend fetching in progress)");
        }

        return transformWakatimeResponse(response.data);
    } catch (error) {
        if (error.response) {
            throw new Error(`API error: ${error.response.status} - ${error.response.data?.message || error.message}`);
        } else if (error.request) {
            throw new Error("Unable to reach Backend API.");
        } else {
            throw new Error(`Error fetching stats: ${error.message}`);
        }
    }
};

export { getWakatimeStats, transformChartData };
