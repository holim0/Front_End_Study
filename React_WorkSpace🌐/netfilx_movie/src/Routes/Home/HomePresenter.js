import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 0px 20px;
`;

const HomePresenter = ({
    nowPlaying,
    getPopular,
    getUpcoming,
    error,
    loading,
}) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing Movies">
                    {nowPlaying.map((m) => (
                        <Poster
                            key={m.id}
                            id={m.id}
                            imgUrl={m.poster_path}
                            title={m.title}
                            rating={m.vote_average}
                            year={
                                m.release_date && m.release_date.substring(0, 4)
                            }
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}

            {getPopular && getPopular.length > 0 && (
                <Section title="Popular Moives">
                    {getPopular.map((m) => (
                        <Poster
                            key={m.id}
                            id={m.id}
                            imgUrl={m.poster_path}
                            title={m.title}
                            rating={m.vote_average}
                            year={
                                m.release_date && m.release_date.substring(0, 4)
                            }
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}
            {getUpcoming && getUpcoming.length > 0 && (
                <Section title="Upcoming Moives">
                    {getUpcoming.map((m) => (
                        <Poster
                            key={m.id}
                            id={m.id}
                            imgUrl={m.poster_path}
                            title={m.title}
                            rating={m.vote_average}
                            year={
                                m.release_date && m.release_date.substring(0, 4)
                            }
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}

            {error && <Error text={error}></Error>}
        </Container>
    );

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    getPopular: PropTypes.array,
    getUpcoming: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
