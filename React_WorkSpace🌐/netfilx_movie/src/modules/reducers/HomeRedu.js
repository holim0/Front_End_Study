import { createAction } from "redux-actions";

const HANDLE_NOWPLAYING = "HANDLE_NOWPLAYING";
const HANDLE_POPULAR = "HANDLE_POPULAR";
const HANDLE_UPCOMING = "HANDLE_UPCOMING";
const SETLOADING = "SETLOADING";
const SETERROR = "SETERROR";

const handleNowplaying = (list) => ({ type: HANDLE_NOWPLAYING, list }); //현재 상영 영화 액션함수
const handlePopular = (list) => ({ type: HANDLE_POPULAR, list }); //현재 안가 영화 액션함수
const handleUpcoming = (list) => ({ type: HANDLE_UPCOMING, list }); //개봉 예정 영화 액션함수
const setLoading = (load) => ({ type: SETLOADING, load }); // 로딩 액션함수
const setError = (e) => ({ type: SETERROR, e }); //에러 액션함수

const initialState = {
    nowPlaying: null,
    getPopular: null,
    getUpcoming: null,
    loading: true,
    error: "",
};

const HomeRedu = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_NOWPLAYING:
            return {
                ...state,
                nowPlaying: action.list,
            };

        case HANDLE_POPULAR:
            return {
                ...state,
                getPopular: action.list,
            };

        case HANDLE_UPCOMING:
            return {
                ...state,
                getUpcoming: action.list,
            };

        case SETLOADING:
            return {
                ...state,
                loading: action.load,
            };

        case SETERROR:
            return {
                ...state,
                error: action.e,
            };

        default:
            return state;
    }
};

export const actionPack = {
    handleNowplaying,
    handlePopular,
    handleUpcoming,
    setLoading,
    setError,
}; // 각 액션 함수를 합병.

export default HomeRedu;
