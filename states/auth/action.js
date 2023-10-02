import { toast } from "react-toastify";
const { default: api } = require("@/utils/api");

const ActionType = {
    REGISTER: "REGISTER",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}

function setRegisterActionCreator() {
    return {
        type: ActionType.REGISTER,
        payload: {
            loginStatus: false,
        }
    }
}

function setLoginActionCreator(isLoggedIn) {
    return {
        type: ActionType.LOGIN,
        payload: {
            loginStatus: isLoggedIn,
        },
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

function register({ email, username, password, onSuccess }) {
    return async (dispatch) => {
        try {
            if (!(email !== "" && username !== "" && password !== "")) {
                toast.error("Isi semua kolom yang dibutuhkan!", {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else {
                const user = await api.register({ email, username, password });
                dispatch(setRegisterActionCreator());

                toast.success("Pendaftaran Akun Berhasil, Silahkan Masuk", {
                    position: toast.POSITION.TOP_CENTER,
                });

                onSuccess();
            }

        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }
}

function login({ email, username, password, onSuccess }) {
    return async (dispatch) => {
        try {
            if (email) {
                const token = await api.loginEmail({ email, password });
                api.putAccessToken(token);
                dispatch(setLoginActionCreator(true));

            } else {
                const token = await api.loginUsername({ username, password });
                api.putAccessToken(token);
                dispatch(setLoginActionCreator(true));
            }

            toast.success("Login Berhasil", {
                position: toast.POSITION.TOP_CENTER,
            });

            onSuccess();

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
    register,
    login,
    logout,
}