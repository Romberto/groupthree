import React from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  placeholder: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder={placeholder} className={styles.searchInput} />
      <button className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};
