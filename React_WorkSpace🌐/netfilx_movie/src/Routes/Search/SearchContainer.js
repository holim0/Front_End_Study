import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
    const [movieResults, handleMovieResults] = useState(null);
    const [tvResults, handleTvResults] = useState(null);
    const [searchWord, handleSearchWord] = useState("");
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchWord={searchWord}
            error={error}
            loading={loading}
        />
    );
};

export default SearchContainer;
