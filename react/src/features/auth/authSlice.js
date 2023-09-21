import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateUserAPI, CheckUserAPI ,UpdateUserAPI} from "./authAPI";

const initialState = {
  users: [],
  status: "idle",
};
export const CreateUser = createAsyncThunk(
  "product/CreateUser",
  async (data) => {
    const response = await CreateUserAPI(data);
    console.log(response);
    return response;
  }
);
export const CheckUser = createAsyncThunk(
  "product/CheckUser",
  async (data) => {
    const response = await CheckUserAPI(data);
    console.log(response);
    return response;
  }
);
export const UpdateUser = createAsyncThunk(
  "product/UpdateUser",
  async (data) => {
    const response = await UpdateUserAPI(data);
    console.log(response);
    return response.addresses;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.products = state.products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(CheckUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CheckUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;

      })
      .addCase(UpdateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })

  },
});

export default userSlice.reducer;
