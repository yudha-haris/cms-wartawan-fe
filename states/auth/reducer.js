import { ActionType } from "./action";

function authUserReducer(loginStatus=false, action = {}) {
    switch (action.type) {
        case ActionType.REGISTER:
            return action.payload.loginStatus
        case ActionType.LOGIN:
            return action.payload.loginStatus;
        case ActionType.LOGOUT:
            return action.payload.loginStatus;
        default:
            return loginStatus;
    }
}

export default authUserReducer;