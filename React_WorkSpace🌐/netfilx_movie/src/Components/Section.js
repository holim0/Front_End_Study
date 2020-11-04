import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 25px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    justify-content: center;
`;

const Section = ({ title, children }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Container>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Section;
