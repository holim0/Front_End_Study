import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";

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
                <Section title="Now Playing Movie">
                    {nowPlaying.map((m) => (
                        <span key={m.id}>{m.title}</span>
                    ))}
                </Section>
            )}

            {getPopular && getPopular.length > 0 && (
                <Section title="Popular Moive">
                    {getPopular.map((m) => (
                        <span key={m.id}>{m.title}</span>
                    ))}
                </Section>
            )}
            {getUpcoming && getUpcoming.length > 0 && (
                <Section title="Upcoming Moive">
                    {getUpcoming.map((m) => (
                        <span key={m.id}>{m.title}</span>
                    ))}
                </Section>
            )}
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
