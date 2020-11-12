import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { actionPack } from "modules/reducers/HomeRedu";
import Api from "Api";

const HomeContainer = () => {
    const { nowPlaying, getPopular, getUpcoming, loading, error } = useSelector(
        (state) => state.HomeRedu
    );
    // 현재 state 가져오기.

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

            const {
                data: { results: getUpcoming },
            } = await Api.MovieApi.getUpcoming();

            const {
                data: { results: getPopular },
            } = await Api.MovieApi.getPopular();
            dispatch(actionPack.handleNowplaying(nowPlaying));
            dispatch(actionPack.handleUpcoming(getUpcoming));
            dispatch(actionPack.handlePopular(getPopular));
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
