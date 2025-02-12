
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '@/components/pages/AuthPage/AuthSlice'
import favoritesReducer from '@/components/pages/FavoritesPage/FavoritesPage.slice'

const reducers = combineReducers({
    authReducer,
    favoritesReducer

});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
