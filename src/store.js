// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers"; // Import your root reducer

const store = configureStore({
    reducer: userReducer,
    // Any additional configuration, middleware, etc.
});

export default store;
