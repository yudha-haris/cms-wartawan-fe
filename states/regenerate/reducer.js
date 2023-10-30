import { ActionType } from "./action";

function regenerateReducer(value = false, action = {}) {
    switch (action.type) {
        case ActionType.SET_IS_REGENERATE:
            return true;
        case ActionType.UNSET_IS_REGENERATE:
            return false;
        default:
            return false;
    }
}

export default regenerateReducer;