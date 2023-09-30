import preloadReducer from "./preload/reducer";

const { configureStore } = require("@reduxjs/toolkit");
const { default: authUserReducer } = require("./auth/reducer");

const store = configureStore({
    reducer: {
        auth: authUserReducer,
        preload: preloadReducer,
    }
})

export default store;