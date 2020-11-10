import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { actionPack } from "modules/reducers/HomeRedu";
import Api from "Api";

const HomeContainer = () => {
    const { nowPlaying, getPopular, getUpcoming, loading, error } = useSelector(
        (state) => ({
            nowPlaying: state.HomeRedu.nowPlaying,
            getPopular: state.HomeRedu.getPopular,
            getUpcoming: state.HomeRedu.getUpcoming,
            loading: state.HomeRedu.loading,
            error: state.HomeRedu.error,
        })
    );

    const dispatch = useDispatch();

    // const [nowPlaying, handleNowPlaying] = useState(null);

    // const [getPopular, handleGetPopular] = useState(null);
    // const [getUpcoming, handleGetupcoming] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const getInfo = async () => {
        try {
            const {
                data: { results: nowPlaying },
            } = await Api.MovieApi.nowPlaying();
            dispatch(actionPack.handleNowPlaying(nowPlaying));
            const {
                data: { results: getUpcoming },
            } = await Api.MovieApi.getUpcoming();
            dispatch(actionPack.handleGetupcoming(getUpcoming));
            const {
                data: { results: getPopular },
            } = await Api.MovieApi.getPopular();

            dispatch(actionPack.handleGetPopular(getPopular));
        } catch {
            dispatch(actionPack.setError("Can't find movie informations!"));
        } finally {
            dispatch(actionPack.setLoading(false));
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <HomePresenter
            nowPlaying={nowPlaying}
            getPopular={getPopular}
            getUpcoming={getUpcoming}
            error={error}
            loading={loading}
        ></HomePresenter>
    );
};

export default HomeContainer;
