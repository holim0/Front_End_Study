const HANDLE_NOWPLAYING = "HANDLE_NOWPLAYING";
const HANDLE_POPULAR = "HANDLE_POPULAR";
const HANDLE_UPCOMING = "HANDLE_UPCOMING";
const SETLOADING = "SETLOADING";
const SETERROR = "SETERROR";

const handleNowplaying = (list) => ({ type: HANDLE_NOWPLAYING, list });
const handlePopular = (list) => ({ type: HANDLE_POPULAR, list });
const handleUpcoming = (list) => ({ type: HANDLE_UPCOMING, list });
const setLoading = (load) => ({ type: SETLOADING, load });
const setError = (e) => ({ type: SETERROR, e });

const initialState = {
    nowPlaying: null,
    getPopular: null,
    getUpcoming: null,
    loading: true,
    error: "",
};

const HomeRedu = (state = initialState, action) => {
    console.log(action.e);
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
};

export default HomeRedu;
