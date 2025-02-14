import { ArtworkList } from "@/components/UI/AtrworkList/ArtworkList";
import React, { useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import { SearchBar } from "@/components/UI/SearchFilterForm/SearchBar";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectSearchPage, selectSearchPageIsLoading } from "@/utils/selectors";
import { getCardsPage } from "./SearchPage.slice";

export const SearchPage: React.FC = () => {
  const artworks = useAppSelector(selectSearchPage)
  const loading = useAppSelector(selectSearchPageIsLoading)
  const dispatch = useAppDispatch()
  const [page, setPage] = useState('1')
  useEffect(() => {
    dispatch(getCardsPage(page))
  }, [dispatch, page]);
  if (loading === 'pending') return <p>Loading...</p>;


  return (
    <div className={styles.container}>
      <div className={styles.form}>
            <SearchBar placeholder='Search...' />
        </div>
      <ArtworkList data={artworks}/>
    </div>
  );
};
