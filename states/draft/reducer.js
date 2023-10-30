import { ActionType } from "./action";

function draftDetailReducer(draft_detail = null, action = {}) {
    switch (action.type) {
        case ActionType.GET_DRAFT:
            return action.payload.draft_detail;
        case ActionType.CREATE_DRAFT:
            return action.payload.draft_detail;
        case ActionType.EDIT_DRAFT:
            return action.payload.draft_detail;
        case ActionType.SAVE_DRAFT:
            return action.payload.draft_detail;
        default:
            return draft_detail;
    }
}

export default draftDetailReducer;