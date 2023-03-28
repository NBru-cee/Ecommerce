import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
    },
});
export default store;
