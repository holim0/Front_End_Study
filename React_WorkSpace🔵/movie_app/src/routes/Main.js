import React, { Component } from "react";

import axios from "axios";
import Movie from "../components/Movie";
import "./Main.css";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            search: "",
            done: true,
            isLoading: true,
        };
    }

    getSearch = (e) => {
        this.setState({ search: e.target.value, isLoading: true, done: true });
    };

    getMovie = async () => {
        const value = document.getElementById("loader");
        value.classList.add("active");
        this.setState({ movies: [] });
        if (this.state.search === "") {
            this.setState({ done: false, isLoading: false });
            return;
        }
        document.querySelector(".input").value = "";

        const url = `https://yts.mx/api/v2/list_movies.json?sort_by=rating&query_term=${this.state.search}`;
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(url);

        if (movies === undefined) {
            this.setState({ done: false, isLoading: false, search: "" });
        }

        if (this.state.done) {
            this.setState({ movies, done: true, isLoading: false, search: "" });
        }

        value.classList.remove("active");
        console.log(this.state.movies);
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.getMovie();
        }
    };

    render() {
        const { movies, done, isLoading } = this.state;

        return (
            <div>
                <div className="header">
                    <h1>
                        영화 검색 <span>🎥</span>
                    </h1>
                    <div className="search">
                        <input
                            className="input"
                            placeholder="search"
                            value={this.state.search}
                            onChange={this.getSearch}
                            onKeyPress={this.handleKeyPress}
                        ></input>
                        <button
                            className="btn"
                            type="button"
                            onClick={this.getMovie}
                        >
                            검색
                        </button>
                    </div>
                </div>
                <div>
                    {isLoading ? (
                        <h1 className="loading" id="loader">
                            🤔
                        </h1>
                    ) : done ? (
                        <section className="display_movie">
                            {movies.map((movie) => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                    url={movie.url}
                                />
                            ))}
                        </section>
                    ) : (
                        <h1 className="Not_Found">Not Found! 🥺</h1>
                    )}
                </div>
            </div>
        );
    }
}

export default Main;
