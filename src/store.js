// store.js
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit

// import thunk from "redux-thunk";
import { userReducer } from "./reducers.js"; // Assurez-vous d'avoir un fichier reducers.js approprié

// const middleware = [thunk];

const store = configureStore({ reducer: userReducer });

export default store;
