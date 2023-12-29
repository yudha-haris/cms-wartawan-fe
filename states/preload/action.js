import api from "@/utils/api";
import { setLoginActionCreator, setLogoutActionCreator } from "../auth/action";

const ActionType = {
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

function setPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    // dispatch(setPreloadActionCreator(true));
    try {
      const token = api.getAccessToken();
      if (token) {
        dispatch(setLoginActionCreator(true));
      }
    } catch (error) {
      dispatch(setLogoutActionCreator());
    }
    dispatch(setPreloadActionCreator(false));
  };
}

export { ActionType, setPreloadActionCreator, asyncPreloadProcess };