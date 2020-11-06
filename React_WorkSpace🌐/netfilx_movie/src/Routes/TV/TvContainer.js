import React, { useState, useEffect } from "react";
import TvPresenter from "./TvPresenter";
import Api from "Api";

const TvContainer = () => {
    const [getPopular, handleGetPopular] = useState(null);
    const [getAiringToday, handleGetAiringToday] = useState(null);
    const [getTopRate, handlegetTopRate] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getInfo = async () => {
        try {
            const {
                data: { results: Popular },
            } = await Api.TVApi.getPopular();
            const {
                data: { results: AringToday },
            } = await Api.TVApi.getAiringToday();
            const {
                data: { results: TopRate },
            } = await Api.TVApi.getTopRate();

            handleGetPopular(Popular);
            handleGetAiringToday(AringToday);
            handlegetTopRate(TopRate);
        } catch {
            setError("Can't find TV information");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <TvPresenter
            getPopular={getPopular}
            getAiringToday={getAiringToday}
            getTopRate={getTopRate}
            error={error}
            loading={loading}
        />
    );
};

export default TvContainer;
