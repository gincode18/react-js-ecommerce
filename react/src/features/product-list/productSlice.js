import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct, fetchProductByFilter, fetchProductBySort } from './productlistAPI';

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

export const fetchProductAsyncFilter = createAsyncThunk(
  'product/fetchAllProductsFilter',
  async (filter) => {
    const response = await fetchProductByFilter(filter);
    return response;
  }
);
export const fetchProductAsyncSort = createAsyncThunk(
  'product/fetchAllProductsSort',
  async (filter) => {
    const response = await fetchProductBySort(filter);
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
      })
      .addCase(fetchProductAsyncFilter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductAsyncFilter.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductAsyncSort.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductAsyncSort.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
      
  },
});

export const { increment} = productlistSlice.actions;
export const selectCount = (state) => state.counter.value;


export default productlistSlice.reducer;
