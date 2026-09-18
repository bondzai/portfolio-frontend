import { useCallback, useEffect, useMemo, useState } from "react";
import {
    ANY_VALUE,
    deriveFacetOptions,
    filterItems,
    isFacetActive,
    paginate,
    tokenize,
} from "../utils/collection";

export { ANY_VALUE };

/**
 * Search + facet filtering + pagination over a list, with the three kept in
 * sync: changing the query or a filter sends the reader back to page one, and
 * the current page is clamped so a shrinking result set never lands on an
 * empty page.
 *
 * @param items       the full list
 * @param searchKeys  item keys the query matches against
 * @param facets      [{ key, label, getValue?, format? }] - keep this a module constant
 * @param pageSize    items per page
 */
const useCollectionView = ({ items, searchKeys = [], facets = [], pageSize = 8 }) => {
    const [query, setQuery] = useState("");
    const [selections, setSelections] = useState({});
    const [page, setPage] = useState(1);

    const list = useMemo(() => (Array.isArray(items) ? items : []), [items]);
    const tokens = useMemo(() => tokenize(query), [query]);

    const facetsWithOptions = useMemo(
        () => deriveFacetOptions(facets, list),
        [facets, list]
    );

    const matches = useMemo(
        () => filterItems({ items: list, searchKeys, facets, tokens, selections }),
        [list, searchKeys, facets, tokens, selections]
    );

    // A new query, filter or data set starts the reader at the top again.
    useEffect(() => {
        setPage(1);
    }, [tokens, selections, list]);

    const setFacet = useCallback((key, value) => {
        setSelections((previous) => ({ ...previous, [key]: value }));
    }, []);

    const reset = useCallback(() => {
        setQuery("");
        setSelections({});
    }, []);

    return {
        query,
        setQuery,
        selections,
        setFacet,
        facets: facetsWithOptions,
        reset,
        isFiltered:
            tokens.length > 0 || facets.some((facet) => isFacetActive(selections[facet.key])),
        matchCount: matches.length,
        total: list.length,
        setPage,
        ...paginate(matches, page, pageSize),
    };
};

export default useCollectionView;
