import React, { useState, useEffect } from "react";
import Certification from "../components/cards/Certification";
import CollectionBrowser from "../components/collection/CollectionBrowser";
import SpinLoader from "../components/loaders/SpinLoader";
import { getCertificationList } from "../apis/rest/Certification";
import { globalDelay } from "../utils/constants";
import "./Certifications.css";

const SEARCH_KEYS = ["name", "description"];
const PAGE_SIZE = 8;

// Module constants: a new array each render would re-derive the options.
const FACETS = [
    { key: "description", label: "Topic" },
];

const Certifications = () => {
    const [certificationList, setCertificationList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getCertificationList();
                setCertificationList(result);
                setIsLoading(false);
            }, globalDelay);
        };
        fetchData();
    }, []);

    if (isLoading) return <SpinLoader />;

    return (
        <div className="certifications">
            <CollectionBrowser
                items={certificationList}
                searchKeys={SEARCH_KEYS}
                facets={FACETS}
                pageSize={PAGE_SIZE}
                listClassName="certification-list"
                searchPlaceholder="Search certifications..."
                itemNoun="certifications"
                emptyMessage="No certifications match your search."
                renderItem={(certification) => (
                    <Certification key={certification.id} {...certification} />
                )}
            />
        </div>
    );
};

export default Certifications;
