// src/reducers

import { DEL_USER_NAME, SET_USER_NAME } from "./actions";

// reducer
const initialState = {
    userName: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, userName: action.payload };
    }
    switch (action.type) {
        case DEL_USER_NAME:
            return { ...state, userName: null };
        default:
            return state;
    }
};
