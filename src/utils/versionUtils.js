/**
 * Compares two semantic version strings.
 * Returns:
 *  1 if v1 > v2
 * -1 if v1 < v2
 *  0 if v1 == v2
 * 
 * @param {string} v1 - First version string (e.g., "2.0.3")
 * @param {string} v2 - Second version string (e.g., "2.0.1")
 * @returns {number} Comparison result
 */
export const compareVersions = (v1, v2) => {
    if (!v1) v1 = "0";
    if (!v2) v2 = "0";

    const parts1 = v1.toString().split('.').map(Number);
    const parts2 = v2.toString().split('.').map(Number);
    const len = Math.max(parts1.length, parts2.length);

    for (let i = 0; i < len; i++) {
        const num1 = parts1[i] || 0;
        const num2 = parts2[i] || 0;
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }
    return 0;
};
