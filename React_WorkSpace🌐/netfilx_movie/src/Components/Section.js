import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

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
    display: flex;
    overflow-x: scroll;
    width: 100%;
    padding: 20px 0px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const clamp = (value, clampAt = 30) => {
    if (value > 0) {
        return value > clampAt ? clampAt : value;
    } else {
        return value < -clampAt ? -clampAt : value;
    }
};

const Section = ({ title, children }) => {
    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)",
    }));

    const bind = useScroll((event) => {
        console.log(event);
        set({
            transform: `perspective(500px) rotateY(${
                event.scrolling ? clamp(event.delta[0]) : 0
            }deg)`,
        });
    });

    return (
        <Container>
            <Title>{title}</Title>
            <Grid {...bind()}>{children}</Grid>
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
