import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from "./cartRedux"
import authReducer from "../redux/features/filterSlice";
import filterReducer from "../redux/features/filterSlice";


export default configureStore({
    reducer:{
        cart: cartReducer,
        auth: authReducer,
        filter: filterReducer,
    }
})