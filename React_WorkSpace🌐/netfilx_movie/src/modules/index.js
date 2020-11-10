import { combineReducers } from "redux";
import HomeRedu from "./reducers/HomeRedu";
import TvRedu from "./reducers/TvRedu";
import DetailRedu from "./reducers/DetailRedu";

export default combineReducers({
    HomeRedu,
    // TvRedu,
    // DetailRedu,
});
