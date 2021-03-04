import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import ClassInfoStore from "./ClassInfoStore";
import ClassInfoSaga from "./ClassInfoSaga";

const rootReducer = combineReducers({ ClassInfoStore });

export function* rootSaga() {
    yield all([ClassInfoSaga()]);
}
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
