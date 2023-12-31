// src/reducers

import { DEL_USER_NAME, SET_USER_NAME, SET_CATS } from "./actions";

// reducer
const initialState = {
    userName: null,
    posts: null,
    categories: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, userName: action.payload };
    }
    switch (action.type) {
        case DEL_USER_NAME:
            return { ...state, userName: null };
    }
    switch (action.type) {
        case SET_CATS:
            return { ...state, categories: action.payload };
        default:
            return state;
    }
};
// switch (action.type) {
//     case DEL_POST:
//         return { ...state, postCount: -1 };
