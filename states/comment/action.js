import { toast } from "react-toastify";
const { default: api } = require("@/utils/api");

const ActionType = {
    GET_COMMENT: "GET_COMMENT",
}

function setGetCommentActionCreator({ comments }) {
    return {
        type: ActionType.GET_COMMENT,
        payload: {
            comments,
        }
    }
}

function getCommentByVersionId({ versionId }) {
    return async (dispatch) => {
        try {
            const comments = await api.getComment({ versionId });
            dispatch(setGetCommentActionCreator({ comments }));
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }
}

function getCommentByDraftId({ draftId }) {
    return async (dispatch) => {
        try {
            const comments = await api.getCommentByDraftId({ draftId });
            dispatch(setGetCommentActionCreator({ comments }));
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }
}

function createComment({ versionId, draftId, content, onSuccess, onError }) {
    return async (dispatch) => {
        try {
            const createdComment = await api.createComment({ versionId, content });
            const comments = await api.getCommentByDraftId({ draftId });
            dispatch(setGetCommentActionCreator({ comments }));
            toast.success("Berhasil membuat komentar", {
                position: toast.POSITION.TOP_CENTER,
            });
            onSuccess();
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
    getCommentByVersionId,
    getCommentByDraftId,
    createComment,
}