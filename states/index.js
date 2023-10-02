import authUserReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";
import draftListReducer from "./draft_list/reducer";
import draftDetailReducer from "./draft/reducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        auth: authUserReducer,
        preload: preloadReducer,
        draft_list: draftListReducer,
        draft_detail: draftDetailReducer,
    }
})

export default store;