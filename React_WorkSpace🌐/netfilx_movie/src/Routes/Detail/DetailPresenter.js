import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function DetailPresenter({ result, error, loading }) {
    return <div>hi</div>;
}

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
