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
 * Transforms Wakatime API response to component-expected format
 * @param {Object} apiResponse - Raw response from Wakatime API
 * @returns {Object} Transformed data object
 */
const transformWakatimeResponse = (apiResponse) => {
    const { data } = apiResponse.all_time;

    return {
        human_readable_total_including_other_language: data.human_readable_total_including_other_language,
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
        });

        // Backend returns { all_time: { ... }, summaries: ... }
        // We need to unwrap the structure.
        // If the backend returns Option<WakatimeData>, it might be null if not ready.
        if (!response.data || !response.data.all_time) {
            // Return empty structure or throw
            throw new Error("Wakatime stats not yet available (backend fetching in progress)");
        }

        // The current transform expects the raw wakatime response format.
        // Our backend returns `AllTimeStats` which matches the structure inside `data` of wakatime response,
        // but with snake_case keys preserved from Rust structs.
        // WakaTime API returns `data: { ... }`.
        // Our rust struct `AllTimeStats` has `data: AllTimeData`.
        // So `response.data.all_time` is `AllTimeStats` which has `data` field.
        // So we can pass `response.data.all_time` to `transformWakatimeResponse`.

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
