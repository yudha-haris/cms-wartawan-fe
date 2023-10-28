import { ActionType } from "./action";

function commentReducer(comments = null, action = {}) {
    switch (action.type) {
        case ActionType.GET_COMMENT:
            return action.payload.comments;
        default:
            return comments;
    }
}

export default commentReducer;