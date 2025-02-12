import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { getFavoritesAllById, isLoadToFulfilled } from "./FavoritesPage.slice";
import { ArtworkList } from "@/components/UI/AtrworkList/ArtworkList";
import { FavoritesNotRecords } from "./FavoritesNotRecords";
import { PENDING, REJECTED } from "@/utils/constants";
import {
  selectFavoritesIds,
  selectFavoritesItem,
  selectFavoritesIsLoading,
} from "@/utils/selectors";

export const FavoritesPage: React.FC = () => {
  const favorites_ids = useAppSelector(selectFavoritesIds); // Используйте селектор
  const favorites_items = useAppSelector(selectFavoritesItem);
  const favorites_isLoading = useAppSelector(selectFavoritesIsLoading);

  const [isNotData, setIsNotdata] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (favorites_ids.length > 0) {
      dispatch(getFavoritesAllById(favorites_ids));
    } else {
      dispatch(isLoadToFulfilled());
      setIsNotdata(true);
    }
  }, [favorites_ids, dispatch]);
  return (
    <>
      {favorites_isLoading === PENDING ? (
        <p>Loading...</p>
      ) : favorites_isLoading === REJECTED ? (
        <p>Ups...error</p>
      ) : (
        <ul>
          {!isNotData ? (
            <ArtworkList data={favorites_items} />
          ) : (
            <FavoritesNotRecords />
          )}
        </ul>
      )}
    </>
  );
};
