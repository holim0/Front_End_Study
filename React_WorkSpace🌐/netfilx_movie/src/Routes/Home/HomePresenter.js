import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
`;

function HomePresenter({
    nowPlaying,
    getPopular,
    getUpcoming,
    error,
    loading,
}) {
    console.log(nowPlaying);
    return loading ? null : (
        <Container>
            {nowPlaying &&
                nowPlaying.map((movie, i) => {
                    return <div key={movie.id}>{movie.title}</div>;
                })}
        </Container>
    );
}

export default HomePresenter;
