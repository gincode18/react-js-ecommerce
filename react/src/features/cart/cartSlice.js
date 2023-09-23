import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {AddToCartAPI ,FetchCartAPI,ClearCartAPI} from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};
export const AddToCart = createAsyncThunk(
  "product/AddTOCart",
  async (data) => {
    const response = await AddToCartAPI(data);
    console.log(response);
    return response;
  }
);
export const GetCart = createAsyncThunk(
  "product/GetCart",
  async (data) => {
    const response = await FetchCartAPI(data);
    console.log(response);
    return response;
  }
);
export const ClearCart = createAsyncThunk(
  "product/CLearCart",
  async (data) => {
    const response =  ClearCartAPI(data);
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.products = state.products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddToCart.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload) ;
      })
      .addCase(GetCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetCart.fulfilled, (state, action) => {
        state.status = "idle";
        state.items=action.payload ;
      })
      .addCase(ClearCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ClearCart.fulfilled, (state, action) => {
        state.status = "idle";
        state.items=[] ;
      });
  },
});

export default cartSlice.reducer;
