import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productlistAPI';

const initialState = {
  products: [],
  status: 'idle',
};
export const fetchProductAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchProduct();
    return response;
  }
);

export const productlistSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.products=state.products
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment} = productlistSlice.actions;
export const selectCount = (state) => state.counter.value;


export default productlistSlice.reducer;
