import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateUserAPI} from './authAPI';

const initialState = {
  users: [],
  status: 'idle',
};
export const CreateUser = createAsyncThunk(
  'product/CreateUser',
  async (data) => {
    const response = await CreateUserAPI(data);
    return response;
  }
);


export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state) => {
      state.products=state.products
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
      });
      
  },
});





export default userSlice.reducer;
