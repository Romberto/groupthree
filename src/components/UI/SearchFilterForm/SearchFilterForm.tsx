import { FilterButton } from "./FilterButton";
import { SearchBar } from "./SearchBar";
import styles from "./SearchFilterForm.module.css";
import React, { useState } from "react";

export const SearchFilterForm: React.FC = () => {
    const [openFilter, setOpenFilter] = useState<string | null>(null);

    const toggleFilter = (filterType: string) => {
        setOpenFilter((prev) => (prev === filterType ? null : filterType));
    };

    return (
        <div className={styles.filterWrapper}>

            <SearchBar placeholder="Search..." />

            <div className={styles.filterTitle}>Filter by:</div>

            <div className={styles.filters}>
                <FilterButton
                    label="Author"
                    isOpen={openFilter === "author"}
                    onClick={() => toggleFilter("author")}
                >
                    <button className={styles.filterItem}>Author 1</button>
                    <button className={styles.filterItem}>Author 2</button>
                    <button className={styles.filterItem}>Author 3</button>
                </FilterButton>

                <FilterButton
                    label="Genre"
                    isOpen={openFilter === "genre"}
                    onClick={() => toggleFilter("genre")}
                >
                    <button className={styles.filterItem}>Abstract</button>
                    <button className={styles.filterItem}>Impressionism</button>
                    <button className={styles.filterItem}>Modern</button>
                </FilterButton>

                <FilterButton
                    label="Year"
                    isOpen={openFilter === "year"}
                    onClick={() => toggleFilter("year")}
                >
                    <button className={styles.filterItem}>By default</button>
                    <button className={styles.filterItem}>Old</button>
                    <button className={styles.filterItem}>New</button>
                </FilterButton>
            </div>
        </div>
    );
};


