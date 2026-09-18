import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const MAX_VISIBLE_PAGES = 7;
const GAP = "gap";

// First and last page stay reachable; the rest is a window around the current
// page, with a gap marker standing in for what is skipped.
const buildPages = (pageCount, page) => {
    if (pageCount <= MAX_VISIBLE_PAGES) {
        return Array.from({ length: pageCount }, (_, index) => index + 1);
    }

    const window = [page - 1, page, page + 1].filter((n) => n > 1 && n < pageCount);
    const pages = [1, ...window, pageCount];

    return pages.flatMap((value, index) => {
        const previous = pages[index - 1];
        return previous && value - previous > 1 ? [`${GAP}-${value}`, value] : [value];
    });
};

const CollectionPagination = ({ page, pageCount, onChange }) => {
    if (pageCount <= 1) return null;

    return (
        <nav className="collection-pagination" aria-label="Pagination">
            <button
                type="button"
                className="collection-page-btn"
                onClick={() => onChange(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
            >
                <LeftOutlined />
            </button>

            {buildPages(pageCount, page).map((value) =>
                typeof value === "number" ? (
                    <button
                        key={value}
                        type="button"
                        className={`collection-page-btn${value === page ? " is-current" : ""}`}
                        onClick={() => onChange(value)}
                        aria-label={`Page ${value}`}
                        aria-current={value === page ? "page" : undefined}
                    >
                        {value}
                    </button>
                ) : (
                    <span key={value} className="collection-page-gap" aria-hidden="true">
                        &hellip;
                    </span>
                )
            )}

            <button
                type="button"
                className="collection-page-btn"
                onClick={() => onChange(page + 1)}
                disabled={page === pageCount}
                aria-label="Next page"
            >
                <RightOutlined />
            </button>
        </nav>
    );
};

export default CollectionPagination;
