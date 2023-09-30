import { toast } from "react-toastify";
const { default: api } = require("@/utils/api");

const ActionType = {
    LOGIN : "LOGIN",
    LOGOUT: "LOGOUT",
}

function setLoginActionCreator(isLoggedIn) {
    return {
        type: ActionType.LOGIN,
        payload: {loginStatus : isLoggedIn},
    };
}

function setLogoutActionCreator() {
    return {
        type: ActionType.LOGOUT,
        payload: {
            loginStatus: false,
        }
    }
}

function login({email, username, password, onSuccess}) {
    return async (dispatch) => {
        try {
            if (email) {
                const token = await api.loginEmail({email, password});
                api.putAccessToken(token);
                dispatch(setLoginActionCreator(true));

            } else {
                const token = await api.loginUsername({username, password});
                api.putAccessToken(token);
                dispatch(setLoginActionCreator(true));
            }

            onSuccess();

            toast.success("Login Berhasil", {
                position: toast.POSITION.TOP_CENTER,
            })
            
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }
}

function logout() {
    return async (dispatch) => {
        dispatch(setLogoutActionCreator());
        api.putAccessToken("");
    }
}

export {
    ActionType,
    setLoginActionCreator,
    setLogoutActionCreator,
    login,
    logout,
}