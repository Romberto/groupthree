import { BASE_API_URL } from "@/utils/constants";
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
    try {
      const idsStr = ids.join(",");
      console.log();
      const response = await fetch(
        `${BASE_API_URL}/artworks?ids=${idsStr}&fields=id,title,artist_display,date_display,image_id`
      );
      if (response.ok) {
        const data = await response.json();
        return data.data;
      } else {
        throw new Error("Network error");
      }
    } catch (error) {
      return Promise.reject(error);
    }
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
