import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { getFavoritesAllById, isLoadToFulfilled } from "./FavoritesPage.slice";
import { ArtworkList } from "@/components/UI/AtrworkList/ArtworkList";
import { FavoritesNotRecords } from "./FavoritesNotRecords";

export const FavoritesPage: React.FC = () => {
  const ids = useAppSelector((state) => state.favoritesReducer.favorites);
  const favorites = useAppSelector((state) => state.favoritesReducer.elements);
  const isLoading = useAppSelector((state) => state.favoritesReducer.isLoad);
  const [isNotData, setIsNotdata] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (ids.length > 0) {
      dispatch(getFavoritesAllById(ids));
    } else {
      dispatch(isLoadToFulfilled());
      setIsNotdata(true);
    }
  }, [ids, dispatch]);
  return (
    <>
      {isLoading === "pending" ? (
        <p>Loading...</p>
      ) : isLoading === "rejected" ? (
        <p>Ups...error</p>
      ) : (
        <ul>{!isNotData ? <ArtworkList data={favorites} /> : <FavoritesNotRecords/>}</ul>
      )}
    </>
  );
};
