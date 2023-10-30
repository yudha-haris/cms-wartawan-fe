import authUserReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";
import draftListReducer from "./draft_list/reducer";
import draftDetailReducer from "./draft/reducer";
import commentReducer from "./comment/reducer";
import loadingReducer from "./loading/reducer";
import regenerateReducer from "./regenerate/reducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        auth: authUserReducer,
        preload: preloadReducer,
        draft_list: draftListReducer,
        draft_detail: draftDetailReducer,
        is_loading: loadingReducer,
        comments: commentReducer,
        is_regenerate: regenerateReducer,
    }
})

export default store;