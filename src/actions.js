export const SET_USER_NAME = "SET_USER_NAME";
export const DEL_USER_NAME = "DEL_USER_NAME";
export const DEL_POST = "DEL_POST";
export const SET_CATS = "SET_CATS";
export const SET_POSTS = "SET_POSTS";

export const setUserName = (name) => ({
    type: SET_USER_NAME,
    payload: name,
});
export const delUserName = () => ({
    type: DEL_USER_NAME,
});
export const delPost = () => ({
    type: DEL_POST,
});
export const setCats = (categoryId) => ({
    type: SET_CATS,
    payload: categoryId,
});
export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});
