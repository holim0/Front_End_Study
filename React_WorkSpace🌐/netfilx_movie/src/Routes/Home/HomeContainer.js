import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import Api from "Api";

const HomeContainer = () => {
    const [nowPlaying, handleNowPlaying] = useState(null);
    const [getPopular, handleGetPopular] = useState(null);
    const [getUpcoming, handleGetupcoming] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

export default HomeContainer;
