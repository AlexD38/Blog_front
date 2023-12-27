export const SET_USER_NAME = "SET_USER_NAME";
export const DEL_USER_NAME = "DEL_USER_NAME";

export const setUserName = (name) => ({
    type: SET_USER_NAME,
    payload: name,
});
export const delUserName = () => ({
    type: DEL_USER_NAME,
});
