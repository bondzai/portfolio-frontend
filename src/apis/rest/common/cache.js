/**
 * In-memory cache for REST reads, scoped to the page session.
 *
 * Each page fetches from a mount effect, so navigating Projects -> Home ->
 * Projects refetched from scratch every time. Entries are keyed by the
 * resolved request, so a repeat visit is served from memory.
 *
 * Concurrent callers for the same key share one in-flight promise rather than
 * racing — App.jsx passes the same loader to both a page and its detail route,
 * which previously could fire two identical requests.
 *
 * Nothing is persisted: a page reload always refetches.
 */
const DEFAULT_TTL_MS = 5 * 60 * 1000;

/** key -> { value, expiresAt } */
const entries = new Map();
/** key -> Promise, cleared as soon as the request settles */
const inFlight = new Map();

// Cached arrays are handed to components that may sort or splice their copy;
// hand out a shallow copy so a consumer can never mutate the cached value.
const detach = (value) => (Array.isArray(value) ? [...value] : value);

/**
 * Resolve `key` from cache, or run `loader` and cache what it returns.
 * A rejected loader is not cached, so the next call retries.
 *
 * @param {string} key Cache key; must capture everything that changes the result
 * @param {Function} loader Async producer, run only on a miss
 * @param {{ttl?: number, enabled?: boolean}} options
 */
export const cachedFetch = (key, loader, { ttl = DEFAULT_TTL_MS, enabled = true } = {}) => {
    if (!enabled) return loader();

    const hit = entries.get(key);
    if (hit) {
        if (hit.expiresAt > Date.now()) return Promise.resolve(detach(hit.value));
        entries.delete(key);
    }

    const pending = inFlight.get(key);
    if (pending) return pending.then(detach);

    const request = Promise.resolve()
        .then(loader)
        .then((value) => {
            entries.set(key, { value, expiresAt: Date.now() + ttl });
            return value;
        })
        .finally(() => inFlight.delete(key));

    inFlight.set(key, request);
    return request.then(detach);
};

/** Drop one key, or the whole cache when called with no argument. */
export const clearApiCache = (key) => {
    if (key === undefined) {
        entries.clear();
        inFlight.clear();
        return;
    }
    entries.delete(key);
    inFlight.delete(key);
};

/** Introspection for tests and debugging. */
export const apiCacheKeys = () => [...entries.keys()];
