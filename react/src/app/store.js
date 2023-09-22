import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product-list/productSlice";
import userReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import ordersReducer from "../features/orders/ordersSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    users: userReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
});
