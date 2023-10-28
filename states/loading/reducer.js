import { ActionType } from "./action";

function loadingReducer(value = false, action = {}) {
    switch (action.type) {
        case ActionType.SET_IS_LOADING:
            return true;
        case ActionType.UNSET_IS_LOADING:
            return false;
        default:
            return false;
    }
}

export default loadingReducer;