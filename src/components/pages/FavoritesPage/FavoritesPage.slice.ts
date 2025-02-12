import { fetchFavoritesById } from "@/utils/api";
import { ArtWorkItemProps, FavoritesType } from "@/utils/types";
import {
  addFavotitesToList,
  getFavoritasList,
  removeFavoritesOfList,
} from "@/utils/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: FavoritesType = {
  favorites: getFavoritasList(),
  elements: [],
  isLoad: "pending",
};

//
export const getFavoritesAllById = createAsyncThunk(
  "favorites/getFavoritesall",
  async (ids: number[]) => {
     return await fetchFavoritesById(ids)
  }
);

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
      state.favorites = [];
      state.elements = [];
      state.isLoad = "pending";
    },
    isLoadToFulfilled: (state) => {
      state.isLoad = "fulfilled";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getFavoritesAllById.fulfilled,
      (state, action: PayloadAction<ArtWorkItemProps[]>) => {
        state.elements = action.payload;
        state.isLoad = "fulfilled";
      }
    );
  },
});

export const {
  addToFavorites,
  removeToFavorites,
  resetFavoriteList,
  isLoadToFulfilled,
} = FavoritesAction.actions;
export default FavoritesAction.reducer;
