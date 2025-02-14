import React, { ChangeEvent, useState } from "react";
import styles from "./SearchBar.module.css";
import { SearchBarProps } from "../../../utils/types";

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [formData, setFormData] = useState({
    search:''
  });

  const handleSearch = () => {
    // todo dispatch
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value } = e.target;
    setFormData(prev=>(
      {...prev,
      [name]: value})
    )
  }

  return (
    <form className={styles.searchBar}>
      <input type="text" 
      name="search"
      placeholder={placeholder} 
      value={formData.search}
      onChange={handleChange}
      className={styles.searchInput} />
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </form>
);
}