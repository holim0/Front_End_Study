import React, { useState } from "react";
import TvPresenter from "./TvPresenter";

const TvContainer = () => {
    const [getPopular, handleGetPopular] = useState(null);
    const [getAiringToday, handleGetAiringToday] = useState(null);
    const [getTopRate, handlegetTopRate] = useState(null);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(true);

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
