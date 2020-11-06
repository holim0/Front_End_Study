import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";

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
            <Helmet>
                <title>TV Shows | Hefilx</title>
            </Helmet>
            {getPopular && getPopular.length > 0 && (
                <Section title="Popular TV Shows">
                    {getPopular.map((m) => (
                        <Poster
                            key={m.id}
                            id={m.id}
                            imgUrl={m.poster_path}
                            title={m.name}
                            rating={m.vote_average}
                            year={
                                m.first_air_date &&
                                m.first_air_date.substring(0, 4)
                            }
                        />
                    ))}
                </Section>
            )}
            {getAiringToday && getAiringToday.length > 0 && (
                <Section title="AiringToday TV Shows">
                    {getAiringToday.map((m) => (
                        <Poster
                            key={m.id}
                            id={m.id}
                            imgUrl={m.poster_path}
                            title={m.name}
                            rating={m.vote_average}
                            year={
                                m.first_air_date &&
                                m.first_air_date.substring(0, 4)
                            }
                        />
                    ))}
                </Section>
            )}

            {getTopRate && getTopRate.length > 0 && (
                <Section title="TopRate TV Shows">
                    {getTopRate.map((m) => (
                        <Poster
                            key={m.id}
                            id={m.id}
                            imgUrl={m.poster_path}
                            title={m.name}
                            rating={m.vote_average}
                            year={
                                m.first_air_date &&
                                m.first_air_date.substring(0, 4)
                            }
                        />
                    ))}
                </Section>
            )}
            {error && <Error text={error} />}
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
