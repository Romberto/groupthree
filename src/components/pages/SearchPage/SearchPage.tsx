import { ArtworkList } from "@/components/UI/AtrworkList/ArtworkList";
import React, { useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import { SearchBar } from "@/components/UI/SearchFilterForm/SearchBar";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectSearchPage, selectSearchPageIsLoading, selectTotalPage } from "@/utils/selectors";
import { getCardsPage } from "./SearchPage.slice";
import { PaginationCard } from "@/components/UI/PaginationCard/PaginationCard";

export const SearchPage: React.FC = () => {
  const artworks = useAppSelector(selectSearchPage)
  const loading = useAppSelector(selectSearchPageIsLoading)
  const total_page = useAppSelector(selectTotalPage)
  const dispatch = useAppDispatch()
  const [page, setPage] = useState('1')
  useEffect(() => {
    dispatch(getCardsPage(page))
  }, [dispatch, page]);
  if (loading === 'pending') return <p>Loading...</p>;

  const handlePage = (page:number) => {
    setPage(String(page))
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
            <SearchBar placeholder='Search...' />
        </div>
      <ArtworkList data={artworks}/>
      <PaginationCard total={total_page} onChange={handlePage}/>
    </div>
  );
};
