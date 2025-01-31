import React from "react";
import styles from "./SearchBar.module.css";
import { SearchBarProps } from "../../../utils/types";

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => (
    <div className={styles.searchBar}>
      <input type="text" placeholder={placeholder} className={styles.searchInput} />
      <button className={styles.searchButton}>
        Search
      </button>
    </div>
);
