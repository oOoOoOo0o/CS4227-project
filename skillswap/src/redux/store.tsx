import {combineReducers, createStore} from "@reduxjs/toolkit"
import skillSwapReducer from "./reducers.tsx";

const rootReducer = combineReducers({
    skillSwaps: skillSwapReducer,
});

const store = createStore(rootReducer);

export default store;