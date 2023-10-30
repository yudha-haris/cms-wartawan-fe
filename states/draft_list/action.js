import { toast } from "react-toastify";
const { default: api } = require("@/utils/api");

const ActionType = {
    SET_DRAFT_LIST: "SET_DRAFT_LIST",
    UNSET_DRAFT_LIST: "UNSET_DRAFT_LIST",
};

function setDraftListActionCreator({ draft_list_info }) {
    return {
        type: ActionType.SET_DRAFT_LIST,
        payload: {
            draft_list_info
        },
    };
}

function unsetDraftListActionCreator() {
    return {
        type: ActionType.SET_DRAFT_LIST,
        payload: null,
    };
}

function getDraftList({ page, limit, onSuccess }) {
    return async (dispatch) => {
        try {
            const response = await api.getDraftList({ page, limit });
            dispatch(setDraftListActionCreator({
                draft_list_info: response
            }));
            onSuccess(response);
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }
}

function emptyDraftList() {
    return async (dispatch) => {
        try {
            dispatch(unsetDraftListActionCreator())
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }
}

export {
    ActionType,
    setDraftListActionCreator,
    unsetDraftListActionCreator,
    getDraftList,
    emptyDraftList,
}