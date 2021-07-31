import types from "./types";

export function login(){
    return {
        type: types.LOGIN_USER,
        isLogin: true
    }
}

export function logout(){
    return {
        type: types.LOGOUT_USER,
        isLogin: false
    }
}
