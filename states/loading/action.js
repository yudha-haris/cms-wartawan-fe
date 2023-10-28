const ActionType = {
    SET_IS_LOADING: "SET_IS_LOADING",
    UNSET_IS_LOADING: "UNSET_IS_LOADING",
};

function setIsLoadingActionCreator() {
    return {
        type: ActionType.SET_IS_LOADING,
        payload: true,
    };
}

function unsetIsLoadingActionCreator() {
    return {
        type: ActionType.UNSET_IS_LOADING,
        payload: false,
    };
}

function setIsLoading(value) {
    return (dispatch) => {
        if (value) {
            dispatch(setIsLoadingActionCreator());
        } else {
            dispatch(unsetIsLoadingActionCreator());
        }
    };
}

export {
    ActionType,
    setIsLoading,
    setIsLoadingActionCreator,
    unsetIsLoadingActionCreator,
};