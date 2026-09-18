// Pure list logic behind useCollectionView: searching, facet filtering and
// paging. Kept free of React so it can be reasoned about (and tested) on its
// own.

// Sentinel for "no filter applied" on a facet, so a select can carry it as a value.
export const ANY_VALUE = "any";

export const normalize = (value) => String(value ?? "").trim().toLowerCase();

// Named getValue, not valueOf: every object inherits Object.prototype.valueOf,
// so a `facet.valueOf` check is always true and would stringify the facet
// itself for every item.
export const readFacet = (facet, item) => {
    const raw =
        typeof facet.getValue === "function" ? facet.getValue(item) : item[facet.key];
    return raw === null || raw === undefined ? "" : String(raw).trim();
};

export const isFacetActive = (value) => Boolean(value) && value !== ANY_VALUE;

// Every whitespace-separated token has to match, so "go micro" narrows the
// result rather than widening it.
export const tokenize = (query) => normalize(query).split(/\s+/).filter(Boolean);

// Options come from the data rather than a hardcoded list, so a facet picks up
// new values as soon as the backend returns them.
export const deriveFacetOptions = (facets, items) =>
    facets.map((facet) => ({
        ...facet,
        options: [...new Set(items.map((item) => readFacet(facet, item)))]
            .filter(Boolean)
            .sort((a, b) => a.localeCompare(b)),
    }));

export const filterItems = ({ items, searchKeys, facets, tokens, selections }) =>
    items.filter((item) => {
        const haystack = searchKeys.map((key) => normalize(item[key])).join(" ");
        if (!tokens.every((token) => haystack.includes(token))) return false;

        return facets.every((facet) => {
            const selected = selections[facet.key];
            return !isFacetActive(selected) || readFacet(facet, item) === selected;
        });
    });

/**
 * Slices one page, clamping the requested page into range. Clamped rather than
 * corrected after the fact: a shrinking result set must never render an empty
 * page, not even for one frame.
 */
export const paginate = (items, page, pageSize) => {
    const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
    const currentPage = Math.min(Math.max(page, 1), pageCount);
    const firstIndex = (currentPage - 1) * pageSize;
    const visibleItems = items.slice(firstIndex, firstIndex + pageSize);

    return {
        visibleItems,
        page: currentPage,
        pageCount,
        // 1-based and inclusive, for "showing 1-8 of 23"
        firstShown: items.length === 0 ? 0 : firstIndex + 1,
        lastShown: firstIndex + visibleItems.length,
    };
};
