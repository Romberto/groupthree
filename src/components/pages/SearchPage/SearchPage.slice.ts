import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { responseDataProps, searchPageInitialState } from '@/utils/types';
import { fetchGetCardPage } from '@/utils/api';


const initialState: searchPageInitialState = {
  cards: [],
  isLoading: 'pending',
  total_page: 1
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
      (state, action: PayloadAction<responseDataProps>) => {
        state.cards = action.payload.data;
        state.total_page = action.payload.pagination.total_pages
        state.isLoading = 'fulfilled';
      },
    );
  },
});

export const {} = searchPageData.actions;
export default searchPageData.reducer;
