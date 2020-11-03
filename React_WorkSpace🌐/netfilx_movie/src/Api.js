import React from "react";
import axios from "axios";

const Api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "6ce5872428496fc4ad2bc70ae37af5ee",
        language: "kr",
    },
});

const TVApi = {
    getPopular: () => Api.get("tv/popular"),
    getAiringToday: () => Api.get("ttv/airing_today"),
    getTopRate: () => Api.get("tv/top_rated"),
    tvDetail: (id) => Api.get("tv/${id}"),

    searchTv: (word) =>
        Api.get("search/tv", {
            params: {
                query: encodeURIComponent(word),
            },
        }),
};

const MovieApi = {
    nowPlaying: () => Api.get("movie/now_playing"),
    getPopular: () => Api.get("movie/popular"),
    getTopRate: () => Api.get("movie/top_rated"),
    movieDetail: (id) =>
        Api.get("movie/${id}", {
            params: {
                append_to_response: "videos",
            },
        }),

    searchMovie: (word) =>
        Api.get("search/movie", {
            params: {
                query: encodeURIComponent(word),
            },
        }),
};

export default { TVApi, MovieApi };
