import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vh;
    font-size: 50px;
    margin: 30px auto;
    color: white;
    text-align: center;
`;

const Loader = () => (
    <Container>
        {/* <span role="img" aria-label="Loading"> */}
        <h1>Loading...</h1>
        {/* </span> */}
    </Container>
);

export default Loader;
