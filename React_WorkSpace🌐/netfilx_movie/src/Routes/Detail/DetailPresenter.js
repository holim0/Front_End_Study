import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    height: calc(100vh-50px);
    width: 100%;
`;

function DetailPresenter({ result, error, loading }) {
    return <div>hi</div>;
}

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
