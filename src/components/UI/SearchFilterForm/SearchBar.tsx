import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { SearchBarProps } from "../../../utils/types";

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  }
  
  return (
    <div className={styles.searchBar}>
      <input type="text" 
      placeholder={placeholder} 
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className={styles.searchInput} />
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
);
}