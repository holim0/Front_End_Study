import React from "react";
import SearchContainer from "./SearchContainer";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

function SearchPresenter({
    movieResults,
    tvResults,
    searchWord,
    error,
    loading,
    handleInput,
}) {
    return (
        <Container>
            <Form onSubmit={handleInput}>
                <Input placeholder="검색하세요!" value={searchWord}></Input>
            </Form>
        </Container>
    );
}

SearchPresenter.propTyps = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchWord: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleInput: PropTypes.func.isRequired,
};

export default SearchPresenter;
