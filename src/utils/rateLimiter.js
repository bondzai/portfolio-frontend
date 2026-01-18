/**
 * Checks if an action is allowed based on rate limiting rules.
 * Uses localStorage to persist timestamps.
 * 
 * @param {string} key - Unique identifier for the action (e.g., 'feedback_limiter')
 * @param {number} maxAttempts - Maximum allowed attempts
 * @param {number} windowMs - Time window in milliseconds
 * @returns {object} { allowed: boolean, error: string | null }
 */
export const checkRateLimit = (key, maxAttempts, windowMs) => {
    const NOW = Date.now();
    const storageKey = `rate_limit_${key}`;

    // 1. Get existing timestamps
    const rawData = localStorage.getItem(storageKey);
    let timestamps = rawData ? JSON.parse(rawData) : [];

    // 2. Filter out expired timestamps (older than windowMs)
    timestamps = timestamps.filter(param => (NOW - param) < windowMs);

    // 3. Check limit
    if (timestamps.length >= maxAttempts) {
        const oldestTimestamp = timestamps[0];
        const resetTime = oldestTimestamp + windowMs;
        const waitMinutes = Math.ceil((resetTime - NOW) / 60000);
        return {
            allowed: false,
            error: `Rate limit exceeded. Please wait ${waitMinutes} minute(s).`
        };
    }

    // 4. Record new attempt
    timestamps.push(NOW);
    localStorage.setItem(storageKey, JSON.stringify(timestamps));

    return { allowed: true, error: null };
};
