import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: absolute;
    padding: 30px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;

    min-width: 600px;
    min-height: 900px;
    border-radius: 5px;
`;

const DataContainer = styled.div`
    padding: 20px;
`;

const Data = styled.ul`
    font-size: 20px;
    margin-top: 15px;
`;

const Title = styled.p`
    font-size: 80px;
`;

const Dot = styled.span`
    margin-right: 8px;
`;

function DetailPresenter({ result, error, loading }) {
    return loading ? (
        <Loader />
    ) : (
        <Container>
            <Helmet>
                <title>
                    {result.title ? result.title : result.name} | Heflix
                </title>
            </Helmet>
            <Backdrop
                bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />
            <Content>
                <Cover
                    bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("../../assets/noimg.png")
                    }
                />
                <DataContainer>
                    <Title>{result.title ? result.title : result.name}</Title>

                    <Data>
                        <Dot>•</Dot>
                        {result.release_date
                            ? result.release_date.substring(0, 4)
                            : result.first_air_date.substring(0, 4)}
                    </Data>

                    <Data>
                        <Dot>•</Dot>
                        {result && result.genres.map((g) => g.name + " / ")}
                    </Data>
                    <Data>
                        <Dot>•</Dot>
                        {result.runtime} min
                    </Data>
                </DataContainer>
            </Content>
        </Container>
    );
}

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
