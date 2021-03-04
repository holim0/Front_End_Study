import { fork, call, put, takeLatest, all } from "redux-saga/effects";
import {
    RequestClassInfoData,
    RequestClassInfoSuccess,
    RequestClassInfoFail,
} from "./ClassInfoStore";
import { ClassInfoParser } from "../Api/dataParser";

const ClassInfoRequestApi = () => {
    return ClassInfoParser();
};

function* ClassInfoRequestFunc() {
    try {
        const response = yield call(ClassInfoRequestApi);
        if (response.success) {
            yield put(RequestClassInfoSuccess(response.result));
        } else {
            yield put(RequestClassInfoFail());
        }
    } catch (e) {
        alert(e);
        yield put(RequestClassInfoFail());
    }
}

function* watchClassInfoSaga() {
    yield takeLatest(RequestClassInfoData, ClassInfoRequestFunc);
}

export default function* ClassInfoSaga(): Generator {
    yield all([fork(watchClassInfoSaga)]);
}
