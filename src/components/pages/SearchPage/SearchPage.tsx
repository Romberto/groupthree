
import { ArtworkList } from "@/components/UI/AtrworkList/ArtworkList";
import { SearchFilterForm } from "@/components/UI/SearchFilterForm/SearchFilterForm";
import React, { useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import { ARTWORKS_ENDPOINT } from "@/utils/constants";
import { ArtWorkItemProps } from "@/utils/types";
import { filterArtworks } from "@/utils/filterArtworks";

export const SearchPage: React.FC = () => {
    const [artworks, setArtworks] = useState<ArtWorkItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

   
  useEffect(() => {
    fetch(ARTWORKS_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch artworks");
        }
        return response.json();
      })
      .then((data) => {
        setArtworks(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  const filteredArtworks = filterArtworks(artworks, searchQuery);


return (
        <div className={styles.container}>
          <div className={styles.form}>
                <SearchFilterForm onSearch={setSearchQuery} />
            </div>
          <ArtworkList data={filteredArtworks}/>
        </div>
      );
};
