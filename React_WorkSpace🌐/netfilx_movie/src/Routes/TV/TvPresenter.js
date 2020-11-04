import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding: 0px 20px;
`;

const TvPresenter = ({
    getPopular,
    getAiringToday,
    getTopRate,
    error,
    loading,
}) => {
    return loading ? (
        <Loader />
    ) : (
        <Container>
            {getPopular && getPopular.length > 0 && (
                <Section title="Popular TV Show">
                    {getPopular.map((m) => (
                        <span key={m.id}>{m.name}</span>
                    ))}
                </Section>
            )}
            {getAiringToday && getAiringToday.length > 0 && (
                <Section title="AiringToday TV Show">
                    {getAiringToday.map((m) => (
                        <span key={m.id}>{m.name}</span>
                    ))}
                </Section>
            )}

            {getTopRate && getTopRate.length > 0 && (
                <Section title="TopRate TV Show">
                    {getTopRate.map((m) => (
                        <span key={m.id}>{m.name}</span>
                    ))}
                </Section>
            )}
        </Container>
    );
};

TvPresenter.propTypes = {
    getPopular: PropTypes.array,
    getAiringToday: PropTypes.array,
    getTopRate: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default TvPresenter;
