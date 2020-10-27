import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, year, title, summary, poster, genres, flag }) {
    return (
        <div>
            <img
                className="poster"
                src={poster}
                alt={title}
                title={title}
            ></img>
            <h4>
                {title} {year}
            </h4>
            <section className="genre">
                Genres:
                {genres.map((genre) => (
                    <li
                        style={{ diplay: "inline" }}
                        key={genres.indexOf(genre)}
                    >
                        {genre}
                    </li>
                ))}
            </section>
            <h4>{summary}</h4>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;
