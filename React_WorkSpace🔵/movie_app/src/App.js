import React, { Component } from "react";

import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends Component {
    state = {
        movies: [],
        search: "",
    };

    getSearch = (e) => {
        this.setState({ search: e.target.value });
    };

    getMovie = async () => {
        this.setState({ movies: [] });
        if (this.state.search === "") {
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
            return;
        }
        this.setState({ movies, isLoading: false });
        this.setState({ search: "" });
        console.log(this.state.movies);
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.getMovie();
        }
    };

    render() {
        const { isLoading, movies } = this.state;
        return (
            <div>
                <div className="header">
                    <h1>
                        영화 검색 <span>🤔</span>
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

                <section className="display_movie">
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                        />
                    ))}
                </section>
            </div>
        );
    }
}

export default App;
