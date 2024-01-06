// src/reducers

import { DEL_USER_NAME, SET_USER_NAME, SET_CATS, SET_POSTS } from "./actions";

// reducer
const initialState = {
    userName: null,
    posts: null,
    categoryClicked: null,
    posts: [],
};
const userReducer = (state = initialState, action) => {
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
            return { ...state, categoryClicked: action.payload };
    }
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload };
        default:
            return state;
    }
};

export default userReducer;
