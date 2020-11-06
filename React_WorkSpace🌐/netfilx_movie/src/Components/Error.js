import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    justify-content: center;
`;
const Text = styled.span`
    color: #ffb300;
`;

const Error = ({ text }) => {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    );
};

Error.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Error;
