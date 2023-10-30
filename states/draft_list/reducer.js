import { ActionType } from "./action";

function draftListReducer(draft_list_info = null, action = {}) {
    switch (action.type) {
        case ActionType.SET_DRAFT_LIST:
            return action.payload.draft_list_info;
        case ActionType.UNSET_DRAFT_LIST:
            return null;
        default:
            return draft_list_info;
    }
}

export default draftListReducer;