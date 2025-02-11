import { ArtworkList } from "@/components/UI/AtrworkList/ArtworkList";
import { SearchFilterForm } from "@/components/UI/SearchFilterForm/SearchFilterForm";
import React, { useState } from "react";
import styles from "./SearchPage.module.css";

export const SearchPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    return (
        <div className={styles.container}>
          <div className={styles.form}>
                <SearchFilterForm onSearch={setSearchQuery} />
            </div>
          <ArtworkList searchQuery={searchQuery}/>
        </div>
      );
}