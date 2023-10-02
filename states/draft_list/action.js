import { toast } from "react-toastify";
const { default: api } = require("@/utils/api");

const ActionType = {
    GET_DRAFT_LIST: "GET_DRAFT_LIST",
};

function setGetDraftListActionCreator({ draft_list_info }) {
    return {
        type: ActionType.GET_DRAFT_LIST,
        payload: {
            draft_list_info
        },
    };
}

function getDraftList({ page, limit, onSuccess }) {
    return async (dispatch) => {
        try {
            const response = await api.getDraftList({ page, limit });
            dispatch(setGetDraftListActionCreator({
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

export {
    ActionType,
    setGetDraftListActionCreator,
    getDraftList,
}