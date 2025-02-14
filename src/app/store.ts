import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '@/components/pages/AuthPage/AuthSlice';
import favoritesReducer from '@/components/pages/FavoritesPage/FavoritesPage.slice';
import searchPageDataCardReducer from '@/components/pages/SearchPage/SearchPage.slice';
const reducers = combineReducers({
  authReducer,
  favoritesReducer,
  searchPageDataCardReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
