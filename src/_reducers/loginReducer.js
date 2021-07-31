import types from "../_actions/types";

const defaultLoginValue = {
    isLogin: false
}

const loginReducer = (state = defaultLoginValue, action) => {
    switch(action.type){
        case types.LOGIN_USER:
            console.log("------LOGIN-----");
            return state = {
                ...state,
                isLogin: action.isLogin
            }
        case types.LOGOUT_USER:
            console.log("-----LOGOUT-----");
            return state = {
                ...state,
                isLogin: action.isLogin
            }
        default:
            return state;
    }
}

export default loginReducer;
