import React from "react";
import useCollectionView from "../../hooks/useCollectionView";
import CollectionToolbar from "./CollectionToolbar";
import CollectionPagination from "./CollectionPagination";
import "./Collection.css";

/**
 * Searchable, filterable, paginated list. The page supplies the data, what is
 * searchable, which facets to offer and how one item renders; everything
 * between the toolbar and the pager is shared.
 */
const CollectionBrowser = ({
    items,
    renderItem,
    searchKeys,
    facets,
    pageSize,
    listClassName,
    searchPlaceholder,
    itemNoun,
    emptyMessage = "Nothing matches those filters.",
    noDataMessage = "Nothing here yet.",
}) => {
    const view = useCollectionView({ items, searchKeys, facets, pageSize });

    // With nothing to search, a search box is just furniture.
    const hasData = view.total > 0;

    return (
        <div className="collection">
            {hasData && (
                <CollectionToolbar
                    query={view.query}
                    onQueryChange={view.setQuery}
                    facets={view.facets}
                    selections={view.selections}
                    onFacetChange={view.setFacet}
                    onReset={view.reset}
                    isFiltered={view.isFiltered}
                    matchCount={view.matchCount}
                    total={view.total}
                    firstShown={view.firstShown}
                    lastShown={view.lastShown}
                    searchPlaceholder={searchPlaceholder}
                    itemNoun={itemNoun}
                />
            )}

            {view.matchCount === 0 ? (
                <div className="collection-empty">
                    <p>{hasData ? emptyMessage : noDataMessage}</p>
                    {view.isFiltered && (
                        <button type="button" className="collection-reset" onClick={view.reset}>
                            Clear filters
                        </button>
                    )}
                </div>
            ) : (
                <div className={listClassName}>
                    {view.visibleItems.map((item, index) => renderItem(item, index))}
                </div>
            )}

            <CollectionPagination
                page={view.page}
                pageCount={view.pageCount}
                onChange={view.setPage}
            />
        </div>
    );
};

export default CollectionBrowser;
