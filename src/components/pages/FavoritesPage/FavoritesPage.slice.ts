import { addFavotitesToList, getFavoritasList, removeFavoritesOfList } from "@/utils/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesType = {
  favorites: number[];
};

const initialState: FavoritesType = {
  favorites: getFavoritasList(),
};

const FavoritesAction = createSlice({
  name: "favotites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<number>) => {
      state.favorites.push(action.payload);
      addFavotitesToList(action.payload);
    },
    removeToFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
      removeFavoritesOfList(action.payload);
    },
    resetFavoriteList: (state) => {
      state.favorites = []
    }
  },
});

export const { addToFavorites, removeToFavorites, resetFavoriteList } = FavoritesAction.actions;
export default FavoritesAction.reducer;
