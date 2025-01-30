import styles from "./SearchFilterForm.module.css";
import React, { useState, useCallback } from "react";

const SearchFilterForm: React.FC = () => {
    const [openFilter, setOpenFilter] = useState<string | null>(null);

    const toggleFilter = useCallback((filterType: string) => {
        setOpenFilter((prev) => (prev === filterType ? null : filterType));
    }, []);

    return (
        <div className={styles.filterWrapper}>

            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                />
                <button className={styles.searchButton}>Search</button>
            </div>

            <div className={styles.filterTitle}>Filter by:</div>

            <div className={styles.filters}>
                <div
                    className={`${styles.filterButton} ${openFilter === "author" ? styles.active : ""
                        }`}
                    onClick={() => toggleFilter("author")}
                >
                    Author
                    {openFilter === "author" && (
                        <div className={styles.filterList}>
                            <button className={styles.filterItem}>Author 1</button>
                            <button className={styles.filterItem}>Author 2</button>
                            <button className={styles.filterItem}>Author 3</button>
                        </div>
                    )}
                </div>

                <div
                    className={`${styles.filterButton} ${openFilter === "genre" ? styles.active : ""
                        }`}
                    onClick={() => toggleFilter("genre")}
                >
                    Genre
                    {openFilter === "genre" && (
                        <div className={styles.filterList}>
                            <button className={styles.filterItem}>Abstract</button>
                            <button className={styles.filterItem}>Impressionism</button>
                            <button className={styles.filterItem}>Modern</button>
                        </div>
                    )}
                </div>

                <div
                    className={`${styles.filterButton} ${openFilter === "year" ? styles.active : ""
                        }`}
                    onClick={() => toggleFilter("year")}
                >
                    Year
                    {openFilter === "year" && (
                        <div className={styles.filterList}>
                            <button className={styles.filterItem}>By default</button>
                            <button className={styles.filterItem}>Old</button>
                            <button className={styles.filterItem}>New</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchFilterForm;
