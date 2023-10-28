import { toast } from "react-toastify";
const { default: api } = require("@/utils/api");

const ActionType = {
    GET_COMMENT: "GET_COMMENT",
}

function setGetCommentActionCreator({ versionId, comments }) {
    return {
        type: ActionType.GET_COMMENT,
        payload: {
            versionId,
            comments,
        }
    }
}

function getCommentByVersionId({ versionId }) {
    return async (dispatch) => {
        try {
            const comments = await api.getComment({ versionId });
            dispatch(setGetCommentActionCreator({
                versionId,
                comments,
            }));
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }
}

function createComment({ versionId, content }) {
    return async (dispatch) => {
        try {
            const createdComment = await api.createComment({ versionId, content });
            const comments = await api.getComment({ versionId });
            dispatch(setGetCommentActionCreator({
                versionId,
                comments,
            }));
            toast.success("Sukses", {
                position: toast.POSITION.TOP_CENTER,
            });
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }
}

export {
    ActionType,
    getCommentByVersionId,
    createComment,
}