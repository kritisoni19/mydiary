import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        uilook:uiSlice,
        user:userSlice
        
    }
})

export default store;