import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct, fetchProductByFilter, fetchProductBySort } from './productlistAPI';

const initialState = {
  products: [],
  page:1,
  status: 'idle',
};
export const fetchProductAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async (page) => {
    const response = await fetchProduct(page);
    return response;
  }
);

export const fetchProductAsyncFilter = createAsyncThunk(
  'product/fetchAllProductsFilter',
  async (filter,page) => {
    const response = await fetchProductByFilter(filter,page);
    return response;
  }
);
export const fetchProductAsyncSort = createAsyncThunk(
  'product/fetchAllProductsSort',
  async (filter,page) => {
    const response = await fetchProductBySort(filter,page);
    return response;
  }
);
export const fetchProductPage = createAsyncThunk(
  'product/fetchAllProductPage',
  async (page) => {
    return page;
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
      })
      .addCase(fetchProductPage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductPage.fulfilled, (state, action) => {
        state.status = 'idle';
        state.page = action.payload;
      });
      
  },
});

export const { increment} = productlistSlice.actions;
export const selectCount = (state) => state.counter.value;


export default productlistSlice.reducer;
