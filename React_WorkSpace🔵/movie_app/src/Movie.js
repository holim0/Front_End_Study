import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
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
