import { combineReducers } from "redux";
import HomeRedu from "./reducers/HomeRedu";
import TvRedu from "./reducers/TvRedu";
import DetailRedu from "./reducers/DetailRedu";

export default combineReducers({
    // rootReducer 생성
    HomeRedu,
    // TvRedu,
    // DetailRedu,
});
