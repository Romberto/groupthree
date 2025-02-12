import { RootState } from "../app/store"; // Импортируйте тип состояния

export const selectFavoritesIds = (state: RootState) =>
  state.favoritesReducer.favorites;
export const selectFavoritesItem = (state: RootState) =>
  state.favoritesReducer.elements;
export const selectFavoritesIsLoading = (state: RootState) =>
  state.favoritesReducer.isLoad;
export const selectIsUser = (state:RootState) => state.authReducer.auth
