const ActionType = {
    SET_IS_REGENERATE: "SET_IS_REGENERATE",
    UNSET_IS_REGENERATE: "UNSET_IS_REGENERATE",
};

function setIsRegenerateActionCreator() {
    return {
        type: ActionType.SET_IS_REGENERATE,
        payload: true,
    };
}

function unsetIsRegenerateActionCreator() {
    return {
        type: ActionType.UNSET_IS_REGENERATE,
        payload: false,
    };
}

function setIsRegenerate(value) {
    return (dispatch) => {
        if (value) {
            dispatch(setIsRegenerateActionCreator());
        } else {
            dispatch(unsetIsRegenerateActionCreator());
        }
    };
}

export {
    ActionType,
    setIsRegenerate,
    setIsRegenerateActionCreator,
    unsetIsRegenerateActionCreator,
};