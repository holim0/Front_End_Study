import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import Api from "Api";

const SearchContainer = () => {
    const [movieResults, handleMovieResults] = useState(null);
    const [tvResults, handleTvResults] = useState(null);
    const [searchWord, handleSearchWord] = useState("");
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     handleInput();
    // }, [searchWord]);

    const handleInput = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        handleSearchWord(e.value);
        if (searchWord !== "") {
            Search(searchWord);
        }
    };

    const Search = async (word) => {
        try {
            const {
                data: { results: movieInfo },
            } = await Api.MovieApi.searchMovie(word);
            const {
                data: { results: tvInfo },
            } = await Api.TVApi.searchTv(word);
            setLoading(true);
            handleMovieResults(movieInfo);
            handleTvResults(tvInfo);
        } catch {
            setError("Cant find information!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchWord={searchWord}
            error={error}
            loading={loading}
            handleInput={handleInput}
        />
    );
};

export default SearchContainer;
