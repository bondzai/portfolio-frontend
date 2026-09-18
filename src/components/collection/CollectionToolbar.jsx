import React from "react";
import { SearchOutlined, CloseCircleFilled } from "@ant-design/icons";
import { ANY_VALUE } from "../../utils/collection";

/**
 * Search box, one select per facet, and a live result count. A facet with
 * fewer than two values is hidden: a filter that cannot change the result is
 * only noise.
 */
const CollectionToolbar = ({
    query,
    onQueryChange,
    facets,
    selections,
    onFacetChange,
    onReset,
    isFiltered,
    matchCount,
    total,
    firstShown,
    lastShown,
    searchPlaceholder = "Search...",
    itemNoun = "items",
}) => {
    const usableFacets = facets.filter((facet) => facet.options.length > 1);

    return (
        <div className="collection-toolbar">
            <div className="collection-controls">
                <div className="collection-search">
                    <SearchOutlined className="collection-search-icon" />
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => onQueryChange(event.target.value)}
                        placeholder={searchPlaceholder}
                        aria-label={searchPlaceholder}
                    />
                    {query && (
                        <button
                            type="button"
                            className="collection-clear-input"
                            onClick={() => onQueryChange("")}
                            aria-label="Clear search"
                        >
                            <CloseCircleFilled />
                        </button>
                    )}
                </div>

                {usableFacets.map((facet) => (
                    <select
                        key={facet.key}
                        className="collection-select"
                        aria-label={facet.label}
                        value={selections[facet.key] || ANY_VALUE}
                        onChange={(event) => onFacetChange(facet.key, event.target.value)}
                    >
                        <option value={ANY_VALUE}>{facet.label}: All</option>
                        {facet.options.map((option) => (
                            <option key={option} value={option}>
                                {facet.format ? facet.format(option) : option}
                            </option>
                        ))}
                    </select>
                ))}

                {isFiltered && (
                    <button type="button" className="collection-reset" onClick={onReset}>
                        Clear
                    </button>
                )}
            </div>

            <p className="collection-count" role="status" aria-live="polite">
                {matchCount === 0
                    ? `No ${itemNoun} found`
                    : isFiltered
                        ? `Showing ${firstShown}-${lastShown} of ${matchCount} (${total} total)`
                        : `Showing ${firstShown}-${lastShown} of ${total} ${itemNoun}`}
            </p>
        </div>
    );
};

export default CollectionToolbar;
