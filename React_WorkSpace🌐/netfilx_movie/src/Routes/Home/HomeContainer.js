import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import Api from "Api";

const HomeContainer = () => {
    const [nowPlaying, handleNowPlaying] = useState(null);
    const [getPopular, handleGetPopular] = useState(null);
    const [getTopRate, handleGetTopRate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(async () => {
        try {
        } catch {
            setError("Can't find movie informations!");
        } finally {
            setLoading(false);
        }
    });
    return (
        <HomePresenter
            nowPlaying={nowPlaying}
            getTopRate={getPopular}
            getTopRate={getTopRate}
            error={error}
            loading={loading}
        ></HomePresenter>
    );
};

export default HomeContainer;
