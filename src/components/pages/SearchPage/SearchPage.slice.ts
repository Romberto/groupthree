import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { responseDataProps, searchPageInitialState } from '@/utils/types';
import { fetchGetCardPage, fetchQuerysearchPage } from '@/utils/api';

const initialState: searchPageInitialState = {
  cards: [],
  isLoading: 'pending',
  total_page: 1
};

export const getCardsPage = createAsyncThunk<responseDataProps, string>(
  'getcard',
  async (page) => {
    return await fetchGetCardPage(page);
  }
);

export const getQuerySearchPage = createAsyncThunk<responseDataProps, string>(
  'getQuerySearchPage',
  async (query) => {
    return await fetchQuerysearchPage(query);
  }
);

const searchPageData = createSlice({
  name: 'searchPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCardsPage.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(getCardsPage.fulfilled, (state, action: PayloadAction<responseDataProps>) => {
        state.cards = action.payload.data;
        state.total_page = action.payload.pagination.total_pages;
        state.isLoading = 'fulfilled';
      })
      .addCase(getCardsPage.rejected, (state) => {
        state.isLoading = 'rejected';
      })
      .addCase(getQuerySearchPage.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(getQuerySearchPage.fulfilled, (state, action: PayloadAction<responseDataProps>) => {
        state.cards = action.payload.data;
        state.total_page = action.payload.pagination.total_pages;
        state.isLoading = 'fulfilled';
      })
      .addCase(getQuerySearchPage.rejected, (state) => {
        state.isLoading = 'rejected';
      });
  },
});

export const {} = searchPageData.actions;
export default searchPageData.reducer;