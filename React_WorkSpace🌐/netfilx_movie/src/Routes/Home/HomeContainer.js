import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { connect } from "react-redux";
import { actionPack } from "modules/reducers/HomeRedu";
import Api from "Api";

const HomeContainer = ({
    handleNowPlaying,
    setError,
    setLoading,
    nowPlaying,
    error,
    loading,
}) => {
    // const [nowPlaying, handleNowPlaying] = useState(null);

    const [getPopular, handleGetPopular] = useState(null);
    const [getUpcoming, handleGetupcoming] = useState(null);
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

            handleNowPlaying(nowPlaying);
            handleGetupcoming(getUpcoming);
            handleGetPopular(getPopular);
        } catch {
            setError("Can't find movie informations!");
        } finally {
            setLoading(false);
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

const mapStateToProps = (state) => {
    return {
        nowPlaying: state.nowPlaying,
        error: state.setError,
        loading: state.setLoading,
    };
};
const mapDispatchToProps = (dispatch) => {
    // console.log(dispatch);
    return {
        handleNowPlaying: (list) => dispatch(actionPack.handleNowPlaying(list)),
        setError: (e) => dispatch(actionPack.setError(e)),
        setLoading: (flag) => dispatch(actionPack.setLoading(flag)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
