import { ActionType } from "./action";

function draftListReducer(draft_list_info = null, action = {}) {
    switch (action.type) {
        case ActionType.GET_DRAFT_LIST:
            return action.payload.draft_list_info;
        default:
            return draft_list_info;
    }
}

export default draftListReducer;