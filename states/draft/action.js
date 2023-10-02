import { toast } from "react-toastify";
const { default: api } = require("@/utils/api");

const ActionType = {
    GET_DRAFT: "GET_DRAFT",
    CREATE_DRAFT: "CREATE_DRAFT",
    EDIT_DRAFT: "EDIT_DRAFT",
}

function setGetDraftActionCreator({ draft_detail }) {
    return {
        type: ActionType.GET_DRAFT,
        payload: {
            draft_detail,
        }
    }
}

function setCreateDraftActionCreator({ draft_detail }) {
    return {
        type: ActionType.CREATE_DRAFT,
        payload: {
            draft_detail,
        }
    }
}

function setEditDraftActionCreator() {
    return {
        type: ActionType.EDIT_DRAFT,
        payload: {}
    }
}

function getDraftDetailById({ id }) {
    return async (dispatch) => {
        try {
            const draft_detail = await api.getDraftById({ id });
            console.log(draft_detail);
            dispatch(setGetDraftActionCreator({
                draft_detail,
            }));
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }
}

function createDraft({ prompt, onSuccess, onError }) {
    return async (dispatch) => {
        try {
            const draft_detail = await api.createDraft({ prompt });
            dispatch(setCreateDraftActionCreator({
                draft_detail,
            }));
            onSuccess(draft_detail);
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            });
            onError();
        }
    }
}

export {
    ActionType,
    setCreateDraftActionCreator,
    setGetDraftActionCreator,
    setEditDraftActionCreator,
    getDraftDetailById,
    createDraft,
}