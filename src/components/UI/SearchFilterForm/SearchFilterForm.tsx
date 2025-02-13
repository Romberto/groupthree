import { FilterButton } from './FilterButton';
import { FILTER_TYPES } from './filterTypes';
import { SearchBar } from './SearchBar';
import styles from './SearchFilterForm.module.css';
import React, { useState } from 'react';


export const SearchFilterForm: React.FC<{ onSearch: (query: string) => void}> = ({ onSearch }) => {
    const [openFilter, setOpenFilter] = useState<string | null>(null);

    const toggleFilter = (filterType: string) => {
        setOpenFilter((prev) => (prev === filterType ? null : filterType));
    };

    return (
        <div className={styles.filterWrapper}>

            <SearchBar placeholder="Search..." onSearch={onSearch}/>

            <div className={styles.filterTitle}>Filter by:</div>

            <div className={styles.filters}>
                <FilterButton
                    label="Author"
                    isOpen={openFilter === FILTER_TYPES.AUTHOR}
                    onClick={() => toggleFilter(FILTER_TYPES.AUTHOR)}
                >
                    <button className={styles.filterItem}>Author 1</button>
                    <button className={styles.filterItem}>Author 2</button>
                    <button className={styles.filterItem}>Author 3</button>
                </FilterButton>

                <FilterButton
                    label="Genre"
                    isOpen={openFilter === FILTER_TYPES.GENRE}
                    onClick={() => toggleFilter(FILTER_TYPES.GENRE)}
                >
                    <button className={styles.filterItem}>Abstract</button>
                    <button className={styles.filterItem}>Impressionism</button>
                    <button className={styles.filterItem}>Modern</button>
                </FilterButton>

                <FilterButton
                    label="Year"
                    isOpen={openFilter === FILTER_TYPES.YEAR}
                    onClick={() => toggleFilter(FILTER_TYPES.YEAR)}
                >
                    <button className={styles.filterItem}>By default</button>
                    <button className={styles.filterItem}>Old</button>
                    <button className={styles.filterItem}>New</button>
                </FilterButton>
            </div>
        </div>
    );
};
