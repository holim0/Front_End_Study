import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import Api from "Api";

const SearchContainer = () => {
    const [movieResults, handleMovieResults] = useState(null);
    const [tvResults, handleTvResults] = useState(null);
    const [searchWord, handleSearchWord] = useState("");
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        e.preventDefault();
        console.log(searchWord);
        if (searchWord !== "") {
            Search(searchWord);
        }
    };
    const updateInput = (e) => {
        handleSearchWord(e.target.value);
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
            updateInput={updateInput}
        ></SearchPresenter>
    );
};

export default SearchContainer;
