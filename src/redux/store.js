import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const reducer = combineReducers({
    cart:cartSlice,
    user:userSlice,
})
const store = configureStore({
    reducer,
}) 
export default store