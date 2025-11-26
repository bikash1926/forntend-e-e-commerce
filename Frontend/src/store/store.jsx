import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redusers/userSlice";
import productSlice from "./redusers/productSlice";
import cartSlice from "./redusers/cartSlice";

export const store = configureStore({
  reducer: {
    userReducer:userSlice,
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
});
