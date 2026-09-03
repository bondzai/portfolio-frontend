/**
 * Build-time feature flags, read from Vite env vars.
 *
 * Every flag defaults to OFF: an unset `VITE_*` var comes through as
 * `undefined`, so a feature stays hidden unless its var is explicitly set to a
 * truthy value. `.env` is gitignored, so nothing here can be turned on by
 * accident from a checkout.
 *
 * Enable in `.env` (and in the deploy environment) with any of:
 *
 *   VITE_FEATURE_ACTIVITIES=true      # Activities tab -> /stats
 *   VITE_FEATURE_SERVER_STATUS=true   # bottom-left System Control Center
 *   VITE_FEATURE_REALTIME_COUNT=true  # bottom-left live viewer count
 *
 * Vite inlines these at build time, so changing one needs a rebuild.
 */
const isEnabled = (value) => value === "true" || value === "1";

export const FEATURES = {
    // Activities dashboard (/stats): WakaTime stats + GitHub contributions.
    activities: isEnabled(import.meta.env.VITE_FEATURE_ACTIVITIES),
    // Bottom-left System Control Center: network/memory status and running apps.
    serverStatus: isEnabled(import.meta.env.VITE_FEATURE_SERVER_STATUS),
    // Bottom-left live viewer count, fed by the WebSocket.
    realtimeCount: isEnabled(import.meta.env.VITE_FEATURE_REALTIME_COUNT),
};

export default FEATURES;
