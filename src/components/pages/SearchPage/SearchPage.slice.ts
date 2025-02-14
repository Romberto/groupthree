import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArtWorkDataProps } from '@/utils/types';
import { ARTWORKS_ENDPOINT } from '@/utils/constants';
import { fetchGetCardPage } from '@/utils/api';

type searchPageInitialState = {
  cards: ArtWorkDataProps[];
  isLoading: 'pending' | 'fulfilled' | 'rejected';
};

const initialState: searchPageInitialState = {
  cards: [],
  isLoading: 'pending',
};

export const getCardsPage = createAsyncThunk('getcard', async (page:string) => {
    return await fetchGetCardPage(page)
    
});

const searchPageData = createSlice({
  name: 'searchPage',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getCardsPage.fulfilled,
      (state, action: PayloadAction<ArtWorkDataProps[]>) => {
        state.cards = action.payload;
        state.isLoading = 'fulfilled';
      },
    );
  },
});

export const {} = searchPageData.actions;
export default searchPageData.reducer;
