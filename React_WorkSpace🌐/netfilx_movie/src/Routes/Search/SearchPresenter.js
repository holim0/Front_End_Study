import React from "react";
import SearchContainer from "./SearchContainer";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin: 50px 50px;
`;

const Input = styled.input`
    all: unset;
    font-size: 40px;
    width: 500px;
    height: 50px;
    border-radius: 10px;
    &::placeholder {
        color: #ffa000;
    }
`;

function SearchPresenter({
    movieResults,
    tvResults,
    searchWord,
    error,
    loading,
    pushEnter,
    updateInput,
}) {
    return (
        <Container>
            <Form onSubmit={pushEnter}>
                <Input
                    placeholder="Search Movie or TV Shows"
                    value={searchWord}
                    onChange={updateInput}
                ></Input>
            </Form>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {movieResults && movieResults.length > 0 && (
                        <Section title="Movies">
                            {movieResults.map((m) => (
                                <Poster
                                    key={m.id}
                                    id={m.id}
                                    imgUrl={m.poster_path}
                                    title={m.title}
                                    rating={m.vote_average}
                                    year={
                                        m.release_date &&
                                        m.release_date.substring(0, 4)
                                    }
                                    isMovie={true}
                                />
                            ))}
                        </Section>
                    )}
                    {movieResults && movieResults.length < 1 && (
                        <Section title="Movies">Not Found!</Section>
                    )}
                </>
            )}

            {loading ? (
                <Loader />
            ) : (
                <>
                    {tvResults && tvResults.length > 0 && (
                        <Section title="TV Shows">
                            {tvResults.map((m) => (
                                <Poster
                                    key={m.id}
                                    id={m.id}
                                    imgUrl={m.poster_path}
                                    title={m.name}
                                    rating={m.vote_average}
                                    year={
                                        m.release_date &&
                                        m.release_date.substring(0, 4)
                                    }
                                />
                            ))}
                        </Section>
                    )}
                    {tvResults && tvResults.length < 1 && (
                        <Section title="TV Shows">Not Found!</Section>
                    )}
                </>
            )}
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
    updateInput: PropTypes.func.isRequired,
};

export default SearchPresenter;
