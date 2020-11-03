import React, { useState } from "react";
import DetailPresenter from "./DetailPresenter";

const HomeContainer = () => {
    const [result, handleResult] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});
    return (
        <DetailPresenter
            result={result}
            error={error}
            loading={loading}
        ></DetailPresenter>
    );
};

export default HomeContainer;
