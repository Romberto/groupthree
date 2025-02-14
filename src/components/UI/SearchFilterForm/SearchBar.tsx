import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SearchBar.module.css";
import { SearchBarProps } from "../../../utils/types";
import { useAppDispatch } from "@/app/hooks";
import { getQuerySearchPage } from "@/components/pages/SearchPage/SearchPage.slice";

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [formData, setFormData] = useState({
    search:''
  });
  const dispatch = useAppDispatch()
  const handleSearch = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const queryText = formData.search
    if(queryText){
      dispatch(getQuerySearchPage(queryText))
    }
    
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value } = e.target;
    setFormData(prev=>(
      {...prev,
      [name]: value})
    )
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input type="text" 
      name="search"
      placeholder={placeholder} 
      value={formData.search}
      onChange={handleChange}
      className={styles.searchInput} />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
);
}